import { createServer } from 'http'

const server = createServer((req, res) => {
  // console.log(req)
  console.log(req.headers)
  res.end('ok!')
})

server.listen(3000)
