class UIStore {
  public joystick: { angle: number; distance: number } = {
    angle: 0,
    distance: 0
  };
}

export default new UIStore();
