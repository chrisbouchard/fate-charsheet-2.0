import { Pipe, PipeTransform } from '@angular/core';

import { Iterable, List, Repeat } from 'immutable';

@Pipe({ name: 'padded', pure: true })
export class PaddedPipe implements PipeTransform {

  transform<E>(value: Iterable.Indexed<E>, length: number, pad: E): Iterable.Indexed<E> {
    const list = List(value);
    return list.concat(Repeat(pad, length - list.size)).toIndexedSeq();
  }

}

