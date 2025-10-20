const express = require('express')
const app = express()
require('dotenv').config()
const mascotaRoutes = require('./routes/mascotaRoutes')

app.use(express.json())
app.use('/api/mascotas', mascotaRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
