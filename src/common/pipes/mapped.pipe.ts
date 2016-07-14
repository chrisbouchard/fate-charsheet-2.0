import { Pipe, PipeTransform } from '@angular/core';

import { Iterable } from 'immutable';

@Pipe({ name: 'map', pure: true })
export class MappedPipe implements PipeTransform {

  transform<K, V, T>(value: any, fn: (x: V) => T): Iterable<K, T> {
    return Iterable<K, V>(value).map(fn);
  }

}

