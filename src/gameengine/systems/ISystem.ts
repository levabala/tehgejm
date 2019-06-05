import IEntity from '../entities/IEntity';

type IEntitiesMap = { [id: string]: IEntity };
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
