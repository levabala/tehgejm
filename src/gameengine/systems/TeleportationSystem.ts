import GameStore from 'src/stores/GameStore';

import ISystem from '../../interfaces/ISystem';
import { IPosition } from '../components/Physical';

const TeleportationSystem: ISystem = entitiesMap => {
  if (!GameStore.borders.initialized) return entitiesMap;

  const enitites = Object.values(entitiesMap);
  const movableEntities = enitites.filter(
    e => e.position && e.velocity && e.acceleration
  );

  movableEntities.forEach(e => {
    const position = e.position as IPosition;

    if (position.x > GameStore.borders.x) position.x = 0;
    else if (position.x < 0) position.x = GameStore.borders.x;

    if (position.y > GameStore.borders.y) position.y = 0;
    else if (position.y < 0) position.y = GameStore.borders.y;
  });

  return entitiesMap;
};

export default TeleportationSystem;
