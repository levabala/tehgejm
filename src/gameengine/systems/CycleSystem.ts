import GameStore from 'src/stores/GameStore';

import ISystem from './ISystem';

const CycleSystem: ISystem = entitiesMap => {
  GameStore.previousProcessStamp = GameStore.currentProcessStamp;
  GameStore.currentProcessStamp = new Date().valueOf();
  GameStore.currentTimeDeltaMS =
    GameStore.currentProcessStamp - GameStore.previousProcessStamp;

  return entitiesMap;
};

export default CycleSystem;
