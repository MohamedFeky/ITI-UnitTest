export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  const groups: Record<string, T[]> = {};

  for (const item of arr) {
    const groupName = String(item[key]);

    if (groups[groupName] === undefined) {
      groups[groupName] = [];
    }

    groups[groupName].push(item);
  }

  return groups;
}

export function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
