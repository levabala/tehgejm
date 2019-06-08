import { GamePlayComponent, IDamage } from '../components/GamePlay';
import {
  IAcceleration,
  IBreaking,
  IColor,
  IDiameter,
  IPosition,
  IVelocity,
  PhysicalComponent,
} from '../components/Physical';

export default interface IBullet {
  [PhysicalComponent.Position]?: IPosition;
  [PhysicalComponent.Velocity]?: IVelocity;
  [PhysicalComponent.Breaking]?: IBreaking;
  [PhysicalComponent.Acceleration]?: IAcceleration;
  [PhysicalComponent.Diameter]?: IDiameter;
  [PhysicalComponent.Color]?: IColor;
  [GamePlayComponent.Damage]?: IDamage;
}
