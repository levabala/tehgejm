import { Color } from 'csstype';

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

export interface IBreaking {
  value: number;
}

export interface IMass {
  value: number;
}

export interface IDiameter {
  value: number;
}

export interface IColor {
  value: Color;
}

export enum PhysicalComponent {
  Position = "position",
  Velocity = "velocity",
  Acceleration = "acceleration",
  Mass = "mass",
  Breaking = "breaking",
  Diameter = "diameter",
  Color = "color"
}

export interface PhysicalComponentMap {
  [PhysicalComponent.Position]: IPosition;
  [PhysicalComponent.Velocity]: IVelocity;
  [PhysicalComponent.Acceleration]: IAcceleration;
  [PhysicalComponent.Mass]: IMass;
  [PhysicalComponent.Breaking]: IBreaking;
  [PhysicalComponent.Diameter]: IDiameter;
  [PhysicalComponent.Color]: IColor;
}
