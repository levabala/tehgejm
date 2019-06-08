export interface IHealth {
  value: number;
  max: number;
}

export interface IDamage {
  value: number;
}

export interface IShooter {
  firerate: number;
  cooldown: number;
  bulletDamage: number;
  bulletSpeed: number;
  bulletDiameter: number;
  shootAngle: number;
  doShoot: boolean;
}

export enum GamePlayComponent {
  Health = "health",
  Damage = "damage",
  Shooter = "shooter"
}

export interface GamePlayComponentMap {
  [GamePlayComponent.Damage]: IDamage;
  [GamePlayComponent.Health]: IHealth;
  [GamePlayComponent.Shooter]: IShooter;
}
