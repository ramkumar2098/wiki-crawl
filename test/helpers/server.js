import http from 'http'
import fs from 'fs'
import path from 'path'

const ROOT = path.resolve('test/fixtures')

export async function startServer(port = 0) {
  const server = http.createServer((req, res) => {
    const filePath = path.join(ROOT, req.url)
    fs.createReadStream(filePath).pipe(res)
  })

  server.listen(port)

  return await new Promise(resolve => {
    server.once('listening', () => resolve(server))
  })
}
