import IEntity from '../gameengine/entities/IEntity';

type IEntitiesMap = { [id: string]: IEntity & { renderer: JSX.Element } };
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
