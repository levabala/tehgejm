export interface IPlayer {
  id: number;
  name: string;
}

export enum PlayerComponent {
  Player = "player"
}

export interface PlayerComponentMap {
  [PlayerComponent.Player]: IPlayer;
}
