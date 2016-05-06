import { EntriesPipe } from './entries.pipe';
import { IndexedPipe } from './indexed.pipe';
import { MappedPipe } from './mapped.pipe';
import { PaddedPipe } from './padded.pipe';
import { RangePipe } from './range.pipe';
import { ReversedPipe } from './reversed.pipe';
import { SortedPipe } from './sorted.pipe';

export {EntriesPipe, IndexedPipe, MappedPipe, PaddedPipe, RangePipe, ReversedPipe, SortedPipe};

export const COMMON_PIPES: any[] = [ EntriesPipe, IndexedPipe, MappedPipe, PaddedPipe, RangePipe, ReversedPipe, SortedPipe ];

