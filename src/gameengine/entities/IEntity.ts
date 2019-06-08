import { GamePlayComponent, GamePlayComponentMap } from '../components/GamePlay';
import { PhysicalComponent, PhysicalComponentMap } from '../components/Physical';
import { PlayerComponent, PlayerComponentMap } from '../components/Player';

type IEntity = { [key in PhysicalComponent]?: PhysicalComponentMap[key] } &
  { [key in PlayerComponent]?: PlayerComponentMap[key] } &
  { [key in GamePlayComponent]?: GamePlayComponentMap[key] };

export default IEntity;
