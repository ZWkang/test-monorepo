export const isBool = (val: unknown): val is boolean => typeof val === 'boolean';

export const isString = (val: unknown): val is string => typeof val === 'string';

export const isNumber = (val: unknown): val is number => typeof val === 'number';

export const isFunction = (val: unknown): val is Function => typeof val === 'function';
