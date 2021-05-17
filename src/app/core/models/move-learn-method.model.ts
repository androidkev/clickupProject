import { Language, Name, Resource } from './base.model';

export interface Description {
  description: string;
  language: Language;
}

export interface MoveLearnMethod {
  descriptions: Description[];
  id: number;
  name: string;
  names: Name[];
  version_groups: Resource[];
}
