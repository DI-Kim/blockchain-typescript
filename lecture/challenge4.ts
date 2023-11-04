declare module "lodash" {
  function head(array: number[]): number | undefined;
  function hasIn(object: Object, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: string | number[] | Symbol): string | undefined;
  function split(string: string, separator: RegExp | string, limit: number): string[];
  function hasPath(object: Object, path: string[] | string): boolean;
  function filter(array: [], predicate: Function): [];
  function every(array: [], predicate: Function): boolean;
  function map<T>(array: Array<T>, iteratee: Function): Array<T>;
}
