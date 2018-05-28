import React, { Component } from "react"
import "./styles.scss"
import Header from "./Header/Header.react"
import Content from "./Content/Content.react"
import Footer from "./Footer/Footer.react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

export default class App extends Component {
	componentWillMount() {
		console.log("Main.react.js -> 27 : lapin")
		var xhr = new XMLHttpRequest()

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				console.log("App.react.js -> 16 : xhr", xhr.responseText)
			}
		}
		xhr.open("GET", "/api/", true)
		xhr.send(null)
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Content />
					<Footer />
				</div>
			</Router>
		)
	}
}
