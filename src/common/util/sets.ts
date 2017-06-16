import { Set } from 'immutable';

export function toggle<T>(set: Set<T>, element: T): Set<T> {
    if (set.contains(element)) {
        return set.remove(element);
    }

    return set.add(element);
}
