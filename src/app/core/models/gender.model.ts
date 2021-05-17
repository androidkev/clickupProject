import { Resource } from './base.model';

export interface Gender {
  count: number;
  next?: any;
  previous?: any;
  results: Resource[];
}
