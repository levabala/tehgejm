class GameStore {
  public previousProcessStamp: number = new Date().valueOf();
  public currentProcessStamp: number = new Date().valueOf();
  public currentTimeDeltaMS = 0;
  public playerInputScale = 10;
}

export default new GameStore();
