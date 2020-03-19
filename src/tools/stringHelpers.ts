import camelcase from 'camelcase';
import decamelize = require('decamelize');
const dashify = require('dashify');
const replaceString = require('replace-string');
const hyphenize = require('hyphenize');

/**
 * Ensure that a given string starts with a given prefix
 * @param value - value to compare
 * @param prefix - the prefix
 */
export const ensureItStartsWith = (value: string, prefix: string, pascalCase = false) => {
  return new RegExp(`^${prefix}`, 'i').test(value)
    ? camelcase(value, { pascalCase })
    : `${prefix}${camelcase(value, { pascalCase })}`;
};

/**
 * Ensure that a given string ends with a given suffix
 * @param value - the value to compare
 * @param suffix - the suffix
 */
export const ensureItEndsWith = (value: string, suffix: string) => {
  return new RegExp(`${suffix}$`, 'i').test(value)
    ? camelcase(value, { pascalCase: true })
    : `${camelcase(value, { pascalCase: true })}${suffix}`;
};

export const pascalCaseName = (input: string) => camelcase(input, { pascalCase: true });

export const camelCaseString = (input: string) => camelcase(input);

export const decamelizeString = decamelize;

export const hiphenizeString = hyphenize;

export const getRelativePathStringFrom = (input: string, from: string) => {
  let _input: string[] | string = input.split(from);

  if (Array.isArray(_input)) {
    return replaceString(_input[1], '\\', '/');
  }

  throw 'Invalid path provided';
};

export const dashifyString = (value: string, delimiter: '-' | '_' = '-'): string => {
  let dashified = dashify(value, { condense: true });

  if (delimiter === '_') {
    dashified = dashified.replace(/-/g, '_');
  }

  return dashified;
};

export const regionnify = (content: string, region: string) => `//#region ${region}\n${content}\n//#endregion\n`;
