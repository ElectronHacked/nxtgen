import camelcase from 'camelcase';

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
