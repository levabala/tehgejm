import React, { PureComponent } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import JoyStick from 'src/components/JoyStick';

export default class GameComponent extends PureComponent {
  public render() {
    return (
      <GameEngine style={styles.container} systems={[]} entities={{}}>
        <StatusBar hidden={true} />
        <JoyStick gap={10} dia={50} position={{ x: 100, y: 100 }} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
