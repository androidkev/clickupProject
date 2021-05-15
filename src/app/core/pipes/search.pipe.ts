import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(items: any, searchText: any): any {
    if (!searchText) {
      return items;
    }
    return items.filter((item) => this.matchValue(item, searchText));
  }

  matchValue(item: any, items: any) {
    return Object.keys(item)
      .map((key) => {
        return new RegExp(items, 'gi').test(item[key]);
      })
      .some((result) => result);
  }
}
