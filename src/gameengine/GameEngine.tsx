import React, { PureComponent } from 'react';
import { Dimensions, LayoutChangeEvent, StatusBar, StyleSheet, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import JoyStick from 'src/components/JoyStick';
import TextConsole from 'src/components/TextConsole';
import IPlayerInput from 'src/interfaces/IPlayerInput';
import GameStore from 'src/stores/GameStore';
import UIStore from 'src/stores/UIStore';

import { GamePlayComponent, IHealth, IShooter } from './components/GamePlay';
import { IAcceleration, IBreaking, IDiameter, IPosition, IVelocity, PhysicalComponent } from './components/Physical';
import { IPlayer, PlayerComponent } from './components/Player';
import Runner from './renderers/Runner';
import CycleSystem from './systems/CycleSystem';
import MoveSystem from './systems/MoveSystem';
import PlayInputSystem from './systems/PlayerInputSystem';
import ShootSystem from './systems/ShootSystem';
import TeleportationSystem from './systems/TeleportationSystem';

export interface IProps {}

export interface IState {
  running: boolean;
}

export default class GameComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      running: false
    };
  }

  private onChangeInput1 = (input: IPlayerInput) => {
    UIStore.input1 = input;
  };

  private onChangeInput2 = (input: IPlayerInput) => {
    UIStore.input2 = input;
  };

  private onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = Dimensions.get("window");

    GameStore.borders = { x: width, y: height, initialized: true };

    this.setState({ running: true }, () => {
      GameStore.currentProcessStamp = new Date().valueOf();
      GameStore.previousProcessStamp = GameStore.currentProcessStamp;
    });
  };

  public render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[
          PlayInputSystem,
          MoveSystem,
          TeleportationSystem,
          ShootSystem,
          CycleSystem
        ]}
        entities={[
          {
            [PhysicalComponent.Position]: { x: 50, y: 50 } as IPosition,
            [PhysicalComponent.Velocity]: { x: 0, y: 0 } as IVelocity,
            [PhysicalComponent.Breaking]: { value: 150 } as IBreaking,
            [PhysicalComponent.Acceleration]: { x: 0, y: 0 } as IAcceleration,
            [PhysicalComponent.Diameter]: { value: 50 } as IDiameter,
            [GamePlayComponent.Health]: { max: 10, value: 10 } as IHealth,
            [GamePlayComponent.Shooter]: {
              bulletDamage: 1,
              bulletDiameter: 10,
              bulletSpeed: 100,
              cooldown: 0,
              doShoot: false,
              firerate: 1,
              shootAngle: 0
            } as IShooter,
            [PlayerComponent.Player]: { id: 0, name: "main" } as IPlayer,
            renderer: <Runner />
          },
          {
            [PhysicalComponent.Position]: { x: 80, y: 50 } as IPosition,
            [PhysicalComponent.Velocity]: { x: 0, y: 0 } as IVelocity,
            [PhysicalComponent.Breaking]: { value: 250 } as IBreaking,
            [PhysicalComponent.Acceleration]: { x: 0, y: 0 } as IAcceleration,
            [GamePlayComponent.Health]: { max: 10, value: 10 } as IHealth,
            [PhysicalComponent.Diameter]: { value: 40 } as IDiameter,
            renderer: <Runner />
          },
          {
            [PhysicalComponent.Position]: { x: 90, y: 90 } as IPosition,
            [PhysicalComponent.Velocity]: { x: 0, y: 0 } as IVelocity,
            [PhysicalComponent.Breaking]: { value: 100 } as IBreaking,
            [PhysicalComponent.Acceleration]: {
              x: 0,
              y: 0
            } as IAcceleration,
            [GamePlayComponent.Health]: { max: 10, value: 10 } as IHealth,
            [PhysicalComponent.Diameter]: { value: 70 } as IDiameter,
            renderer: <Runner />
          }
        ]}
      >
        <View onLayout={this.onLayout} pointerEvents="none" />
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
