import { Name, Resource } from './base.model';

export interface Version {
  id: number;
  name: string;
  names: Name[];
  version_group: Resource;
}
