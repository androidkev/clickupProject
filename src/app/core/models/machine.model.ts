import { Resource } from './base.model';

export interface Machine {
  id: number;
  item: Resource;
  move: Resource;
  version_group: Resource;
}
