import React from 'react';
import GameStore from 'src/stores/GameStore';

import ISystem from '../../interfaces/ISystem';
import { IShooter } from '../components/GamePlay';
import { IDiameter, IPosition } from '../components/Physical';
import IBullet from '../entities/IBullet';
import Bullet from '../renderers/Bullet';

const ShootSystem: ISystem = entitiesMap => {
  const enitites = Object.values(entitiesMap);
  const shooterEntities = enitites.filter(e => e.shooter);

  let bulletIndex = enitites.length;
  const timeDeltaSeconds = GameStore.currentTimeDeltaMS / 1000;
  shooterEntities.forEach(e => {
    const position = e.position as IPosition;
    const shooter = e.shooter as IShooter;
    const diameter = (e.diameter || { value: 0 }) as IDiameter;

    const {
      firerate,
      bulletDamage,
      bulletSpeed,
      shootAngle,
      bulletDiameter,
      doShoot
    } = shooter;
    const { value: dia } = diameter;
    let { cooldown } = shooter;

    cooldown = Math.max(cooldown - timeDeltaSeconds, 0);

    if (cooldown <= 0 && doShoot) {
      const newBullet: IBullet = {
        velocity: {
          x: Math.cos(shootAngle) * bulletSpeed,
          y: Math.sin(shootAngle) * bulletSpeed
        },
        breaking: { value: 0 },
        damage: { value: bulletDamage },
        position: {
          x: position.x + (Math.cos(shootAngle) * dia) / 2,
          y: position.y + (Math.sin(shootAngle) * dia) / 2
        },
        acceleration: { x: 0, y: 0 },
        diameter: { value: bulletDiameter },
        color: { value: "black" }
      };

      entitiesMap[bulletIndex] = { ...newBullet, renderer: <Bullet /> };

      cooldown += 1 / firerate;
      bulletIndex++;
    }

    shooter.cooldown = cooldown;
  });

  return entitiesMap;
};

export default ShootSystem;
