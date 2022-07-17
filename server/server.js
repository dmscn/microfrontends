import express from './config/express.js'
import setProductRoutes from './api/routes/products.js' 

const app = express()
const port = app.get('port')

app.listen(port, () => {
  console.log(`🚀 Server up and running on port ${port}`)
})

setProductRoutes(app)