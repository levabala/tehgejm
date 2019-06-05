import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IPosition } from 'src/gameengine/components/Physical';
import IRunner from 'src/gameengine/entities/IRunner';

export interface Props extends IRunner {}

const radius = 50;

const styles = StyleSheet.create({
  main: {
    width: radius,
    height: radius,
    borderRadius: radius,
    backgroundColor: "green"
  }
});

export default class Runner extends React.Component<Props> {
  public render() {
    const { position } = this.props;
    const { x, y } = position as IPosition;

    return (
      <View
        style={Object.assign(
          { left: x - radius / 2, top: y - radius / 2 },
          styles.main
        )}
      />
    );
  }
}
