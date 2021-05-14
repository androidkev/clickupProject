export interface Resource {
  resourceName: string;
  url: string;
}

export interface Content {
  count: number;
  next: string;
  results: Resource[];
}
