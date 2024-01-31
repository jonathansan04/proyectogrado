const express = require('express')

const app=express()

app.use(require('./rutas/rutas'))

app.listen(3001,()=>{
    console.log('corriendo en', 'http://localhost:'+ 3001)

})