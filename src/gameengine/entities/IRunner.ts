import { IAcceleration, IBreaking, IHealth, IPosition, IVelocity, PhysicalComponent } from '../components/Physical';
import { IPlayer, PlayerComponent } from '../components/Player';
import IEntity from './IEntity';

export default interface IRunner extends IEntity {
  [PlayerComponent.Player]?: IPlayer;
  [PhysicalComponent.Position]?: IPosition;
  [PhysicalComponent.Velocity]?: IVelocity;
  [PhysicalComponent.Breaking]?: IBreaking;
  [PhysicalComponent.Acceleration]?: IAcceleration;
  [PhysicalComponent.Health]?: IHealth;
}
