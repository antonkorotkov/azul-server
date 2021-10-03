import { Server, Socket } from 'socket.io'
import { Lobby } from '../classes/Lobby'

export default (_: Server, socket: Socket, lobby: Lobby) => {
  lobby.addWaitingPlayer(socket.id)

  socket.on('disconnect', () => {
    lobby.removeWaitingPlayer(socket.id)
  })
}
