import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'

export default class DialogAddConfig extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = { nom: '', deposit: 1000, debut: this.dateFormat(new Date()), fin: this.dateFormat(new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)), unitTime: 1, error: false }
	}

	dateFormat = (date) => {
		console.log('DialogAddConfig.react.js -> 18 : data', date, typeof date)
		console.log('DialogAddConfig.react.js -> 18 : data', '' + this.twoDigits(date.getDate()) + '/' + this.twoDigits(date.getMonth() + 1) + '/' + this.twoDigits(date.getFullYear()))
		return '' + date.getFullYear() + '-' + this.twoDigits(date.getMonth() + 1) + '-' + this.twoDigits(date.getDate())
	}

	twoDigits = (number) => {
		if (number >= 10) { return '' + number }
		else {
			return '0' + number
		}
	}

	ajouter = () => {
		if(this.state.nom.length > 0 ){
		let res = {nom: this.state.nom, deposit: this.state.deposit, debut: this.state.debut, fin: this.state.fin, unitTime: this.state.unitTime}
		this.props.add(res)
		this.props.close()
		}
		else{
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
				<DialogTitle id="alert-dialog-title">Ajout d'une configuration</DialogTitle>
				<DialogContent className="dialogContent">
					<TextField
						id="nom"
						label="Nom"
						onChange={(e) => { this.setState({ nom: e.target.value }) }}
						margin="normal"
						error={this.state.error}
					/>
					<TextField
						id="deposit"
						label="Déposite $"
						onChange={(e) => { this.setState({ deposit: e.target.value }) }}
						margin="normal"
						type="number"
						value={this.state.deposit}
					/>
					<TextField
						id="Début"
						label="debut"
						onChange={(e) => { this.setState({ debut: e.target.value }) }}
						margin="normal"
						id="date"
						type="date"
						value={this.state.debut}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="Fin"
						label="fin"
						onChange={(e) => { this.setState({ fin: e.target.value }) }}
						margin="normal"
						id="date"
						type="date"
						value={this.state.fin}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<InputLabel htmlFor="timeUnit" style={{ fontSize: '12px' }}>Unité de temps</InputLabel>
					<Select
						value={this.state.unitTime}
						onChange={this.handleChange}
						inputProps={{
							name: 'timeUnit',
							id: 'timeUnit',
						}}
					>
						<MenuItem value={1}>minutes</MenuItem>
						<MenuItem value={2}>heures</MenuItem>
						<MenuItem value={3}>jour</MenuItem>
						<MenuItem value={4}>mois</MenuItem>
						<MenuItem value={5}>année</MenuItem>
					</Select>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.ajouter} color="primary">
						Ajouter
            		</Button>
					<Button onClick={this.props.close} color="primary" autoFocus>
						Annuler
            		</Button>
				</DialogActions>
			</Dialog>
		)
	}
}