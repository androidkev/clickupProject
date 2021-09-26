import { Name, Resource } from './base.model';

export interface ItemPocket {
  categories: Resource[];
  id: number;
  name: string;
  names: Name[];
}
