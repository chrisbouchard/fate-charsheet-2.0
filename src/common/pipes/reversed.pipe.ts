import { Pipe, PipeTransform } from '@angular/core';

import { Iterable } from 'immutable';

@Pipe({ name: 'reversed', pure: true })
export class ReversedPipe implements PipeTransform {

  transform<K, V>(value: Iterable<K, V>): Iterable<K, V> {
    return value.reverse();
  }

}

