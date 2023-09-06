import { reduce } from 'rxjs';

export function isString<T>(value: T): boolean {
  return Object.prototype.toString.call(value) === '[object String]';
}

export function isArray<T>(value: T): boolean {
  return Object.prototype.toString.call(value) === '[object Array]';
}

export function isObject<T>(value: T): boolean {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function trimValue(value: any): any {
  if (isString(value)) {
    return `${value}`.trim();
  } else if (isArray(value)) {
    return value.map((item: string) => `${item}`.trim());
  } else if (isObject(value)) {
    return Object.entries(value).reduce((memo: any, [key, value]) => {
      memo[key] = `${value}`.trim();
      return memo;
    }, {});
  } else {
    return value;
  }
}
