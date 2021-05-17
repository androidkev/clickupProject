import { Name, Resource } from './base.model';

export interface RootObject {
  id: number;
  items: Resource[];
  name: string;
  names: Name[];
  pocket: Resource;
}
