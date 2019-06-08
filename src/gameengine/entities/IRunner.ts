import { GamePlayComponent, IHealth, IShooter } from '../components/GamePlay';
import { IAcceleration, IBreaking, IDiameter, IPosition, IVelocity, PhysicalComponent } from '../components/Physical';
import { IPlayer, PlayerComponent } from '../components/Player';

export default interface IRunner {
  [PlayerComponent.Player]?: IPlayer;
  [PhysicalComponent.Position]?: IPosition;
  [PhysicalComponent.Velocity]?: IVelocity;
  [PhysicalComponent.Breaking]?: IBreaking;
  [PhysicalComponent.Acceleration]?: IAcceleration;
  [PhysicalComponent.Diameter]?: IDiameter;
  [GamePlayComponent.Health]?: IHealth;
  [GamePlayComponent.Shooter]?: IShooter;
}
