interface Storable<T> {
  load(): T
  save(): T
  set<L>(key: string, value: L): T
  get<K>(key: string): K
  delete(key: string): T
  deleteFromArray(key: string, value: string | number): boolean
}

export { Storable }
