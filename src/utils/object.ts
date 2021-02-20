export function deepCopy<T extends object>(object: T): T {
  return JSON.parse(JSON.stringify(object))
}
