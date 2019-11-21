export const listIncludes = (list: string[], item: string) => {
  if (!list || !item || !list.length) {
    return false;
  }

  return !! list.find(listItem => new RegExp(item, 'i').test(listItem) && listItem.length === item.length);
};
