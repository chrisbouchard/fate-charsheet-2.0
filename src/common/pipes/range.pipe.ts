import { Pipe, PipeTransform } from '@angular/core';

import { Range, Seq } from 'immutable';

@Pipe({ name: 'range', pure: true })
export class RangePipe implements PipeTransform {

  transform(value: number): Seq.Indexed<number> {
    if (value !== undefined) {
      return Range(0, value);
    }
  }

}

