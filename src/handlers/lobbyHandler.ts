import { Server, Socket } from 'socket.io'
import { Lobby } from '../classes/Lobby'

export default <T>(_: Server, socket: Socket, lobby: Lobby<T>): void => {
  lobby.addWaitingPlayer(socket.id)

  socket.on('disconnect', () => {
    lobby.removeWaitingPlayer(socket.id)
  })
}
