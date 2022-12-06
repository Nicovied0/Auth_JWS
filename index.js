const app = require('./src/app.js')
const {PORT} = require('./src/config')


app.listen(PORT, () =>{
  console.log(`Listening in port ${PORT}`)
})