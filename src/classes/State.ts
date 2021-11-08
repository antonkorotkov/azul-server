import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { Storable } from '../interfaces/Storable'

class State implements Storable<State> {
  db: JsonDB

  constructor(private file: string) {}

  load(): State {
    this.db = new JsonDB(new Config(this.file, true, true, '.'))
    return this
  }

  save(): State {
    this.db.save()
    return this
  }

  set(key: string, value: string | Record<string, unknown> | []): State {
    this.db.push(key, value)
    return this
  }

  delete(key: string): State {
    this.db.delete(key)
    return this
  }

  deleteFromArray(key: string, value: string): boolean {
    const index = this.db.getIndexValue(key, value)
    if (index !== -1) {
      this.db.delete(`${key}[${index}]`)
      return true
    }

    return false
  }
}

export { State }
