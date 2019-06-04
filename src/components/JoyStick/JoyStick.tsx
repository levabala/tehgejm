import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

export interface IProps {
  dia: number;
  gap: number;
  position: { x: number; y: number };
}

export interface IState {
  angle: number;
  distance: number;
}

const styles = StyleSheet.create({
  circleOutside: {
    backgroundColor: "rgba(50, 255, 50, 0.3)"
  },
  circleInside: {
    backgroundColor: "darkgreen"
  }
});

export default class JoyStick extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      angle: 0,
      distance: 0
    };
  }

  render() {
    const { dia, gap, position } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback
          style={Object.assign(
            {
              width: dia,
              height: dia,
              left: position.x - dia / 2,
              top: position.y - dia / 2,
              borderRadius: dia
            },
            styles.circleOutside
          )}
        />
        <View
          style={Object.assign(
            {
              width: dia - gap,
              height: dia - gap,
              borderRadius: dia - gap,
              left: position.x - (dia - gap) / 2,
              top: position.y - (dia - gap) / 2
            },
            styles.circleOutside
          )}
        />
      </View>
    );
  }
}
