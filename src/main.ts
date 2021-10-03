import { Server, Socket } from 'socket.io'
import lobbyHandler from './handlers/lobbyHandler'
import debug from 'debug'
import { Lobby } from './classes/Lobby'
import { State } from './classes/State'

const d = debug('azul:server')
const io: Server = new Server({ cors: { origin: '*' } })
const lobby: Lobby = new Lobby(new State('db/lobby'))

lobby.clear()

io.on('connection', (socket: Socket) => {
  d('Connected')
  lobbyHandler(io, socket, lobby)
})

io.listen(3000)
