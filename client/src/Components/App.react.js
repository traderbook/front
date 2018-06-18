import React, { Component } from "react"
import "./styles.scss"
import Header from "./Header/Header.react"
import Content from "./Content/Content.react"
import Footer from "./Footer/Footer.react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import API from '../API'


export default class App extends Component {
	componentWillMount() {
		API.connexion((data)=>{
			console.log('App.react.js -> 13 : data', data )
		}, (error) => {
			console.log('App.react.js -> 15 : error', error )
		})
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
