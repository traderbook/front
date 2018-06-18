class API {
	constructor() {
		this.url = "/api/"
	}

	requete(url, verbe, succes, failed, data = null) {
		var xhr = new XMLHttpRequest()
		xhr.onload = function() {
			succes(xhr.response)
		}
		xhr.onerror = function() {
			failed(xhr.response)
		}
		xhr.open(verbe, this.url + url, true)
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
		xhr.send(JSON.stringify(data))
	}

	connexion(succes, failed) {
		this.requete("connexion", "post", succes, failed, {
			login: "test",
			password: "mdpTest"
		})
	}
}

export default new API()
