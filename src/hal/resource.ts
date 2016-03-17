import {Observable} from 'rxjs';
import {ValueType as UriValueType} from 'uri-templates';
import {AnyConstructor} from '../common/core';

export interface HalResource<T> {
  url: string;

  get(params?: Map<string, UriValueType>): Observable<T>;

  delete(params?: Map<string, UriValueType>): Observable<void>;

  post<U>(body: U, params?: Map<string, UriValueType>): Observable<HalResource<U>>;
  post<U>(body: any, params: Map<string, UriValueType>, ctor: AnyConstructor<U>): Observable<HalResource<U>>;

  put(body: T, params?: Map<string, UriValueType>): Observable<HalResource<T>>;
}

