interface Storable<T> {
  load(): T
  save(): T
  set(key: string, value: any): T
  delete(key: string): T
  deleteFromArray(key: string, value: string | number): boolean
}

export { Storable }
