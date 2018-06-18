const express = require("express")
var bodyParser = require("body-parser")
const app = express()

//pour récupérer le body des requetes
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("../client"))

//les routes
require('./routes/routes')(app)



app.listen(3000, () => console.log("Lancement serveur port: 3000"))
