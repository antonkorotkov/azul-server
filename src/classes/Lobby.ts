import { Storable } from '../interfaces/Storable'
import debug from 'debug'

const d = debug('azul:lobby')

class Lobby<T> {
  static eventPrefix = 'lobby'

  constructor(private state: Storable<T>) {
    this.state.load()
  }

  addWaitingPlayer(name: string): Lobby<T> {
    d('Player Connected')
    this.state.set('.players[]', name)
    return this
  }

  getWaitingPlayers(): [] {
    return this.state.get<[]>('.players')
  }

  removeWaitingPlayer(name: string): boolean {
    if (this.state.deleteFromArray('.players', name)) {
      d('Player Disconnected')
      return true
    }
    return false
  }

  clear(): void {
    this.state.delete('.players')
  }
}

export { Lobby }
