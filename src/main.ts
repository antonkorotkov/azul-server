import { Server } from 'socket.io'

const io = new Server({})

io.on('connection', () => {
  console.log('test')
})

io.listen(3000)
