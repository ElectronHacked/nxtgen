export const listIncludes = (list: string[], item: string) => {
  if (!Array.isArray(list) || !item) {
    return false;
  }

  return !!list.find(listItem => listItem.toLowerCase() === item.toLowerCase());
};
