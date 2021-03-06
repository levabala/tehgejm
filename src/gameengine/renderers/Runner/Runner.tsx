import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IDiameter, IPosition } from 'src/gameengine/components/Physical';
import IRunner from 'src/gameengine/entities/IRunner';

export interface IProps extends IRunner {}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "red",
    position: "absolute"
  }
});

export default class Runner extends React.Component<IProps> {
  public render() {
    const { position, diameter } = this.props;
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
            borderRadius: dia
          },
          styles.main
        )}
      />
    );
  }
}
