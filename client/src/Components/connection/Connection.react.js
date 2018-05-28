import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import './Connection.scss'

export default class Connection extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = { login: '', password: '', error: false }
	}

	// quand on clique sur connection
	connection = () => { 
		if(this.state.login.length > 0 ){
			this.props.connection(this.state.login)
			this.props.close()
		}else{
			this.setState({error: true})
		}
	}

	render() {
		return (
			<Dialog
				open={this.props.open}
				onClose={this.props.close}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Connexion</DialogTitle>
				<DialogContent className="dialogContent">
					<TextField
						id="login"
						label="Identifiant"
						onChange={(e) => { this.setState({ login: e.target.value }) }}
						margin="normal"
						error={this.state.error}
					/>
					<TextField
						id="password"
						label="Mot de passe"
						type="password"
						onChange={(e) => { this.setState({ password: e.target.value }) }}
						margin="normal"
						error={this.state.error}
						/>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.connection} color="primary">
						Connexion
            		</Button>
					<Button onClick={this.props.close} color="primary" autoFocus>
						Annuler
            		</Button>
				</DialogActions>
			</Dialog>
		)
	}
}