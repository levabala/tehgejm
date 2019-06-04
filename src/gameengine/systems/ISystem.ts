import ICursorFollower from '../entities/ICursorFollower';

type IEntitiesMap = { [id: string]: ICursorFollower };
type ISystem = (
  entitiesMap: IEntitiesMap,
  {
    touches
  }: {
    touches: Array<{
      type: string;
      id: number;
      event: { pageX: number; pageY: number };
    }>;
  }
) => IEntitiesMap;

export default ISystem;
