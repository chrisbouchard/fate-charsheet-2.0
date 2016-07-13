import { Pipe, PipeTransform } from '@angular/core';

import { Iterable } from 'immutable';

@Pipe({ name: 'sorted', pure: true })
export class SortedPipe implements PipeTransform {

  transform<K, V>(value: Iterable<K, V>, key: string): Iterable<K, V> {
    if (value === undefined) {
      return;
    }

    if (key === undefined) {
      return value.sort();
    }

    return value.sortBy((element: any) => element[key]);
  }

}

