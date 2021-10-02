import { Server, Socket } from 'socket.io'

const io: Server = new Server({cors: {origin: "*"}})

io.on('connection', (socket: Socket) => {
  console.log('connected', socket.id)
  socket.on("disconnect", (reason: string) => {
    console.log('disconnected', reason)
  });
})

io.listen(3000)
