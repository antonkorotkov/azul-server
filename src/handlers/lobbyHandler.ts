import { Server, Socket } from 'socket.io'
import { Lobby } from '../classes/Lobby'
import { getEventName } from '../common/utils'

export default <T>(io: Server, socket: Socket, lobby: Lobby<T>): void => {
  const notifyNumPlayers = (): void => {
    io.emit(
      getEventName(Lobby.eventPrefix, 'updated'),
      lobby.getWaitingPlayers().length,
    )
  }

  lobby.addWaitingPlayer(socket.id)

  socket.on('disconnect', () => {
    if (lobby.removeWaitingPlayer(socket.id)) notifyNumPlayers()
  })

  notifyNumPlayers()
}
