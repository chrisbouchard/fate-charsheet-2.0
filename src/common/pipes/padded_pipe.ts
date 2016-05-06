import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'padded', pure: true })
export class PaddedPipe implements PipeTransform {

  transform<E>(value: Iterable<E>, args: any[]): E[] {
    let array = value ? Array.from(value) : [];

    let length: number;
    let pad: E;

    [length, pad] = args;

    while (array.length < length) {
      array.push(pad);
    }

    return array;
  }

}


