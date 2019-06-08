import GameStore from 'src/stores/GameStore';

import ISystem from '../../interfaces/ISystem';
import { IAcceleration, IBreaking, IPosition, IVelocity } from '../components/Physical';

const MoveSystem: ISystem = entitiesMap => {
  const enitites = Object.values(entitiesMap);
  const movableEntities = enitites.filter(
    e => e.position && e.velocity && e.acceleration
  );

  const timeDeltaSeconds = GameStore.currentTimeDeltaMS / 1000;
  movableEntities.forEach(e => {
    const position = e.position as IPosition;
    const velocity = e.velocity as IVelocity;
    const acceleration = e.acceleration as IAcceleration;
    const breaking: IBreaking = e.breaking || { value: 0 };

    const velocityAngle = Math.atan2(velocity.y, velocity.x);
    const breakingX = breaking.value * Math.cos(velocityAngle);
    const breakingY = breaking.value * Math.sin(velocityAngle);
    const breakingXNormalized =
      Math.min(
        Math.abs(breakingX),
        Math.max(Math.abs(velocity.x), Math.abs(acceleration.x))
      ) * Math.sign(velocity.x);
    const breakingYNormalized =
      Math.min(
        Math.abs(breakingY),
        Math.max(Math.abs(velocity.x), Math.abs(acceleration.y))
      ) * Math.sign(velocity.y);

    acceleration.x -= breakingXNormalized;
    acceleration.y -= breakingYNormalized;

    velocity.x += acceleration.x * timeDeltaSeconds;
    velocity.y += acceleration.y * timeDeltaSeconds;

    position.x += velocity.x * timeDeltaSeconds;
    position.y += velocity.y * timeDeltaSeconds;
  });

  return entitiesMap;
};

export default MoveSystem;
