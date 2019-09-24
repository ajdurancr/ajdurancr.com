const express = require('express')
const nextJS = require('next')

async function start() {
  const dev = process.env.NODE_ENV !== 'production'
  const PORT = process.env.PORT || 3000
  const app = nextJS({ dev })
  const server = express()
  await app.prepare()

  server.get('/*', async (req, res, next) => {
    try {
      app.render(req, res, '/')
    } catch (e) {
      next(e)
    }
  })

  server.listen(PORT, (err) => {
    if (err) throw err

    console.log(`> Ready on http://localhost:${PORT}`)
  })
}

start()
