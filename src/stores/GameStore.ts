class GameStore {
  public previousProcessStamp: number = new Date().valueOf();
  public currentProcessStamp: number = new Date().valueOf();
  public currentTimeDeltaMS = 0;
  public playerInputScale = 10;
  public borders = { x: 0, y: 0, initialized: false };
}

export default new GameStore();
