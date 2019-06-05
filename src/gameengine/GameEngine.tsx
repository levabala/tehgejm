import React, { PureComponent } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import JoyStick from 'src/components/JoyStick';
import TextConsole from 'src/components/TextConsole';
import IPlayerInput from 'src/interfaces/IPlayerInput';
import UIStore from 'src/stores/UIStore';

import { IAcceleration, IBreaking, IHealth, IPosition, IVelocity, PhysicalComponent } from './components/Physical';
import { IPlayer, PlayerComponent } from './components/Player';
import Runner from './renderers/Runner';
import CycleSystem from './systems/CycleSystem';
import MoveSystem from './systems/MoveSystem';
import PlayInputSystem from './systems/PlayerInputSystem';

export default class GameComponent extends PureComponent {
  private onChangeInput1 = (input: IPlayerInput) => {
    UIStore.input1 = input;
  };

  private onChangeInput2 = (input: IPlayerInput) => {
    UIStore.input2 = input;
  };

  public render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[PlayInputSystem, MoveSystem, CycleSystem]}
        entities={[
          {
            [PhysicalComponent.Position]: { x: 50, y: 50 } as IPosition,
            [PhysicalComponent.Velocity]: { x: 0, y: 0 } as IVelocity,
            [PhysicalComponent.Breaking]: { amount: 150 } as IBreaking,
            [PhysicalComponent.Acceleration]: { x: 0, y: 0 } as IAcceleration,
            [PhysicalComponent.Health]: { max: 10, value: 10 } as IHealth,
            [PlayerComponent.Player]: { id: 0, name: "main" } as IPlayer,
            renderer: <Runner />
          }
        ]}
      >
        <StatusBar hidden={true} />
        <TextConsole
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 160,
            width: 180
          }}
        />
        <JoyStick
          gap={30}
          dia={130}
          style={{ left: 20, bottom: 20, position: "absolute" }}
          onChange={this.onChangeInput1}
        />
        <JoyStick
          gap={50}
          dia={150}
          color={{ red: 255, green: 20, blue: 20, alpha: 0.1 }}
          style={{ right: 20, bottom: 20, position: "absolute" }}
          onChange={this.onChangeInput2}
        />
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
