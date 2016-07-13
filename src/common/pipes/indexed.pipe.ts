import { Pipe, PipeTransform } from '@angular/core';

import { Iterable, Seq } from 'immutable';

@Pipe({ name: 'indexed', pure: true })
export class IndexedPipe implements PipeTransform {

  transform<K, V>(value: Iterable<K, V>, offset: number = 0): Iterable.Keyed<number, V> {
    if (value !== undefined) {
      return value.valueSeq().toKeyedSeq().mapKeys(i => i + offset);
    }
  }

}

