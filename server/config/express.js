import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'

export default function() {
  const app = express()

  app.set('port', process.env.PORT || config.get('server.port'))
  app.use(bodyParser.json())

  return app
}