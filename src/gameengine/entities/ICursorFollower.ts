import { IHealth, IPosition, PhysicalComponent } from '../components/Physical';

export default interface ICursorFollower {
  [PhysicalComponent.Position]?: IPosition;
  [PhysicalComponent.Health]?: IHealth;
}
