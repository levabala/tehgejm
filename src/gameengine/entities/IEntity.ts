import { PhysicalComponent } from '../components/Physical';
import { PlayerComponent } from '../components/Player';

type AllComponents = PhysicalComponent | PlayerComponent;

type IEntity = { [key in AllComponents]?: any };

export default IEntity;
