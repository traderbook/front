module.exports = function(app){
    app.post("/api/connexion", (req, res) => {
		console.log("server.js -> 5 : coucou", req.body)
		let data = {
			login: req.body.login,
			token: 123
		}
		res.send(data)
	})
}