import { Name, Resource } from './base.model';

export interface ItemCategory {
  id: number;
  items: Resource[];
  name: string;
  names: Name[];
  pocket: Resource;
}
