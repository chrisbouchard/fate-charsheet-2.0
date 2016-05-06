import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'map', pure: true })
export class MappedPipe implements PipeTransform {

  transform<E, T>(value: Iterable<E>, fn: (x: E) => T): T[] {
    if (!value) {
      return [];
    }

    return Array.from(value).map(fn);
  }

}

