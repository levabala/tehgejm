import IPlayerInput from 'src/interfaces/IPlayerInput';
import GameStore from 'src/stores/GameStore';
import UIStore from 'src/stores/UIStore';

import { IAcceleration } from '../components/Physical';
import { IPlayer } from '../components/Player';
import ISystem from './ISystem';

const PlayInputSystem: ISystem = entitiesMap => {
  const enitites = Object.values(entitiesMap);
  const playersEntities = enitites.filter(e => e.player && e.acceleration);

  playersEntities.forEach(e => {
    const player = e.player as IPlayer;
    const acceleration = e.acceleration as IAcceleration;

    // console.log(player);

    if (player.id < 0 || player.id > 1) return;

    const input =
      player.id === 0
        ? UIStore.input1
        : ((player.id === 1 ? UIStore.input2 : null) as IPlayerInput);

    acceleration.x = input.dx * GameStore.playerInputScale;
    acceleration.y = input.dy * GameStore.playerInputScale;
  });

  return entitiesMap;
};

export default PlayInputSystem;
