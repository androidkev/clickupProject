import { Language, Name, Resource } from './base.model';

export interface EnconterCondition {
  id: number;
  name: string;
  names: Name[];
  values: Resource[];
}
