import express from './config/express.js'

const app = express()
const port = app.get('port')

app.listen(port, () => {
  console.log(`🚀 Server up and running on port ${port}`)
})