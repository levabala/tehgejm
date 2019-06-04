export interface IPosition {
  x: number;
  y: number;
}

export interface IVelocity {
  x: number;
  y: number;
}

export interface IAcceleration {
  x: number;
  y: number;
}

export interface IMass {
  value: number;
}

export interface IHealth {
  value: number;
  max: number;
}

export enum PhysicalComponent {
  Position = "position",
  Velocity = "velocity",
  Acceleration = "acceleration",
  Mass = "mass",
  Health = "health"
}
