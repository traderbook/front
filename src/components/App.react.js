import React, { Component } from "react"
import "./styles.scss"
import Header from "./Header/Header.react"
import Content from "./Content/Content.react"
import Footer from "./Footer/Footer.react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

export default class App extends Component {
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
