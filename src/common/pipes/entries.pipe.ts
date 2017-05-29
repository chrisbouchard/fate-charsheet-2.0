import { Pipe, PipeTransform } from '@angular/core';

import { Iterable, Seq } from 'immutable';

@Pipe({ name: 'entries', pure: true })
export class EntriesPipe implements PipeTransform {

  transform<K, V>(value: Iterable<K, V>): Seq.Keyed<K, V> {
    if (value !== undefined) {
      return value.toKeyedSeq();
    }

    return undefined;
  }

}

