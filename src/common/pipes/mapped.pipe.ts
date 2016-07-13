import { Pipe, PipeTransform } from '@angular/core';

import { Iterable } from 'immutable';

@Pipe({ name: 'map', pure: true })
export class MappedPipe implements PipeTransform {

  transform<K, V, T>(value: Iterable<K, V>, fn: (x: V) => T): Iterable<K, T> {
    if (value !== undefined) {
      return value.map(fn);
    }
  }

}

