import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'padded', pure: true })
export class PaddedPipe implements PipeTransform {

  transform<E>(value: Iterable<E>, length: number, pad: E): E[] {
    let array = value ? Array.from(value) : [];

    while (array.length < length) {
      array.push(pad);
    }

    return array;
  }

}


