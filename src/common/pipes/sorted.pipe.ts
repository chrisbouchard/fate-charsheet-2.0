import { Pipe, PipeTransform } from '@angular/core';

import { Iterable } from 'immutable';

@Pipe({ name: 'sorted', pure: true })
export class SortedPipe implements PipeTransform {

    transform<K, V>(value: any, key: string): Iterable<K, V> {
        const iterable = Iterable<K, V>(value);

        if (key === undefined) {
            return iterable.sort();
        }

        return iterable.sortBy((element: any) => element[key]);
    }

}
