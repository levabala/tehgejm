import IPlayerInput from 'src/interfaces/IPlayerInput';

class UIStore {
  private _input1: IPlayerInput = {
    angle: 0,
    distance: 0,
    dx: 0,
    dy: 0
  };

  private _input2: IPlayerInput = {
    angle: 0,
    distance: 0,
    dx: 0,
    dy: 0
  };

  public get input1() {
    return this._input1;
  }

  public set input1(value) {
    Object.assign(this._input1, value);
  }

  public get input2() {
    return this._input2;
  }

  public set input2(value) {
    Object.assign(this._input2, value);
  }
}

export default new UIStore();
