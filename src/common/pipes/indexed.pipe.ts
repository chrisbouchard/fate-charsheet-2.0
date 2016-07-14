import { Pipe, PipeTransform } from '@angular/core';

import { Iterable } from 'immutable';

@Pipe({ name: 'indexed', pure: true })
export class IndexedPipe implements PipeTransform {

  transform<V>(value: any, offset: number = 0): Iterable.Keyed<number, V> {
    return Iterable.Indexed<V>(value).toKeyedSeq().mapKeys(i => i + offset);
  }

}

