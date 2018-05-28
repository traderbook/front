const express = require('express')
const app = express()

app.use(express.static('../client'))
app.get('/api/', (req, res) => {
	console.log('server.js -> 5 : coucou')
	res.send('lapin')
})
app.listen(3000, () => console.log('Lancement serveur port: 3000'))