import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IDiameter, IPosition } from 'src/gameengine/components/Physical';
import IBullet from 'src/gameengine/entities/IBullet';

export interface IProps extends IBullet {}
const styles = StyleSheet.create({
  main: {
    position: "absolute"
  }
});

export default class Bullet extends React.Component<IProps> {
  public render() {
    const { position, diameter } = this.props;
    const { color } = this.props;
    const { x, y } = position as IPosition;
    const { value: dia } = diameter as IDiameter;

    return (
      <View
        style={Object.assign(
          {
            left: x - dia / 2,
            top: y - dia / 2,
            width: dia,
            height: dia,
            borderRadius: dia,
            backgroundColor: color ? color.value : "green"
          },
          styles.main
        )}
      />
    );
  }
}
