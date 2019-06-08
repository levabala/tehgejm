import GameStore from 'src/stores/GameStore';
import UIStore from 'src/stores/UIStore';

import ISystem from '../../interfaces/ISystem';
import { IPlayer } from '../components/Player';

const PlayInputSystem: ISystem = entitiesMap => {
  const enitites = Object.values(entitiesMap);
  const playersEntities = enitites.filter(e => e.player);

  playersEntities.forEach(e => {
    const player = e.player as IPlayer;
    const { shooter, acceleration } = e;

    if (player.id !== 0) return;

    const { input1: moveInput, input2: shootInput } = UIStore;

    if (acceleration) {
      acceleration.x = moveInput.dx * GameStore.playerInputScale;
      acceleration.y = moveInput.dy * GameStore.playerInputScale;
    }
    if (shooter) {
      const doShoot = shootInput.distance !== 0;
      shooter.doShoot = doShoot;
      shooter.shootAngle = doShoot ? shootInput.angle : shooter.shootAngle;
    }
  });

  return entitiesMap;
};

export default PlayInputSystem;
