import React from "react"
import ReactDom from "react-dom"
import App from "./components/App.react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

//exemple de theme
const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: "#ff4400"
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contast with palette.primary.main
		},
		secondary: {
			light: "#0066ff",
			main: "#0044ff",
			// dark: will be calculated from palette.secondary.main,
			contrastText: "#ffcc00"
		}
		// error: will us the default color
	}
})

const renderApp = () => {
	ReactDom.render(
		<MuiThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
		</MuiThemeProvider>,
		document.getElementById("root")
	)
}

renderApp()
