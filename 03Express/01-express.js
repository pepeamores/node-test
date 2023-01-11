const express = require('express')
const app = express()
const port = 3005
//motor de plantilla
app.set('views',__dirname + '/views');
app.set('view engine' ,'ejs')

//middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:
app.use('/', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));
app.use((req,res) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

