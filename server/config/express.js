import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'
import cors from 'cors'

const allowedOrigins = ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082'];

export default function() {
  const app = express()

  app.set('port', process.env.PORT || config.get('server.port'))
  app.use(bodyParser.json())
  app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }))


  return app
}