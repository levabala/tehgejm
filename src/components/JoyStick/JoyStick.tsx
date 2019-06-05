import * as React from 'react';
import { GestureResponderEvent, LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import IPlayerInput from 'src/interfaces/IPlayerInput';

export interface IProps {
  dia: number;
  gap: number;
  style?: StyleProp<ViewStyle>;
  color?: { red: number; green: number; blue: number; alpha: number };
  onChange: (input: IPlayerInput) => void;
}

export interface IState {
  angle: number;
  distance: number;
  offset: { x: number; y: number };
}

const styles = StyleSheet.create({
  circleOutside: {
    backgroundColor: "rgba(50, 255, 50, 0.3)"
  },
  circleInside: {
    backgroundColor: "rgba(50, 255, 50, 0.3)"
  }
});

export default class JoyStick extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      angle: 0,
      distance: 0,
      offset: { x: 0, y: 0 }
    };
  }

  private position = { x: 0, y: 0 };

  private onLayout = (e: LayoutChangeEvent) => {
    const { x, y } = e.nativeEvent.layout;
    const { dia } = this.props;

    this.position = { x: x + dia / 2, y: y + dia / 2 };
  };

  private onMove = (e: GestureResponderEvent) => {
    const { pageX, pageY } = e.nativeEvent;
    const { x: sx, y: sy } = this.position;

    const dx = pageX - sx;
    const dy = pageY - sy;

    const length = Math.sqrt(dx * dx + dy * dy);
    const maxLength = this.props.gap;

    const angle = Math.atan2(dy, dx);
    const distance = Math.min(length, maxLength);

    const ox = distance * Math.cos(angle);
    const oy = distance * Math.sin(angle);

    this.props.onChange({ angle, distance, dx: ox, dy: oy });

    this.setState({ offset: { x: ox, y: oy }, angle, distance });
  };

  private onEnd = (e: GestureResponderEvent) => {
    this.props.onChange({ dx: 0, dy: 0, distance: 0, angle: 0 });

    this.setState({ offset: { x: 0, y: 0 } });
  };

  private onStartShouldSetResponder = (e: GestureResponderEvent) => {
    return true;
  };

  private onMoveShouldSetResponder = (e: GestureResponderEvent) => {
    return true;
  };

  public render() {
    const { dia, gap, color, style } = this.props;
    const { offset } = this.state;
    const { position } = this;

    const outsideStyle = Object.assign(
      {
        width: dia,
        height: dia,
        borderRadius: dia
      },
      styles.circleOutside,
      style ? style : {},
      color
        ? {
            backgroundColor: `rgba(${color.red},${color.green},${color.blue},${
              color.alpha
            })`
          }
        : {}
    );

    const insideStyle = Object.assign(
      {
        width: dia - gap * 2,
        height: dia - gap * 2,
        borderRadius: dia - gap * 2,
        left: gap + offset.x,
        top: gap + offset.y
      },
      styles.circleInside,
      color
        ? {
            backgroundColor: `rgba(${color.red},${color.green},${color.blue},${
              color.alpha
            })`
          }
        : {}
    );

    return (
      <View
        style={outsideStyle}
        onLayout={this.onLayout}
        onResponderMove={this.onMove}
        // onResponderStart={this.onStart}
        onResponderRelease={this.onEnd}
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        onMoveShouldSetResponder={this.onMoveShouldSetResponder}
      >
        <View style={insideStyle} />
      </View>
    );
  }
}
