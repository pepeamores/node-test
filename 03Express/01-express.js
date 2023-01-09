const express = require('express')
const app = express()
const port = 3005
//motor de plantilla
app.set('views',__dirname + '/views');
app.set('view engine' ,'ejs')

//middleware
app.use(express.static(__dirname + '/public'));

//peticiones basicas HTTP
app.get('/', (req, res) => {
 // res.send('Hello Node.js!')
  res.render("contacto", {tituloContacto : "estamos en contacto de forma dinámico"})
})

app.get('/contacto', (req, res) => {
    res.send('Estás en contacto')
})
app.use((req,res) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
   })
   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

