import React, { Component } from "react"
import PropTypes from "prop-types"
import AceEditor from "react-ace"
import "./Editor.scss"
import "brace/mode/javascript"
import "brace/theme/monokai"
import "brace/snippets/javascript"
import "brace/ext/language_tools"
import Toolbar from "material-ui/Toolbar"
import IconButton from "material-ui/IconButton"
import Icon from "material-ui/Icon"
import Input from "material-ui/Input"
import Menu, { MenuItem } from "material-ui/Menu"
import DialogAddConfig from "./DialogAddConfig.react"
import Snackbar from "material-ui/Snackbar"

export default class Editor extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			code: 0,
			anchorEl: null,
			openAlgo: false,
			openMenuConfig: false,
			anchorElConfig: null,
			nameConfig: 0,
			openDialogConfig: false,
			nameAlgo: 0,
			tabConfig: ["Config n°1", "Config n°2"],
			tabAlgo: ["Algo n°1", "Algo n°2"],
			tabCode: [
				"class Main extends Strategy {\n\tOnInit(){\n\n\t}\n\n\tOnTick(tick){\n\n\t}\n\n\tOnDestruct(){\n\n\t}\n}",
				"let animal = new Lapin() \nlet castor = new Castor()"
			],
			nameAlgoInput: "Algo n°1",
			codeValue:
				"class Main extends Strategy {\n\tOnInit(){\n\n\t}\n\n\tOnTick(tick){\n\n\t}\n\n\tOnDestruct(){\n\n\t}\n}",
			openSnack: false
		}
	}

	// Quand l'éditeur change de valeur. code -> string correspondant au code, e -> Object evenement
	onChange = (code, e) => {
		this.setState({ codeValue: code })
	}

	// Pour fermer la snackBar
	closeSnack = () => {
		this.setState({ openSnack: false })
	}

	// Quand on clique sur "play", pour lancer un algorithme
	play = () => {
		console.log("Editor.react.js -> 25 : Play")
	}

	// Quand on change d'algorithme, dans le menu. num -> number qui correspond à l'indice du code
	closeAlog = num => {
		switch (num) {
			case -2:
				this.setState({
					openAlgo: false,
					code: -1,
					codeValue: "",
					nameAlgo: -1,
					nameAlgoInput: ""
				})

				break
			case -1:
				this.setState({ openAlgo: false })
				break
			default:
				this.setState({
					openAlgo: false,
					code: num,
					codeValue: this.state.tabCode[num],
					nameAlgo: num,
					nameAlgoInput: this.state.tabAlgo[num]
				})
				break
		}
	}

	// Quand on clique pour ajouter une configuration
	onClickAddConfiguration = () => {
		this.setState({
			openMenuConfig: false,
			nameConfig: "Config n°1",
			openDialogConfig: true
		})
	}

	// Lors de la validation d'ajout de configuration
	addConfig = config => {
		let tabConfig = this.state.tabConfig
		tabConfig.push(config.nom)
		this.setState({
			tabConfig: tabConfig,
			nameConfig: tabConfig.length - 1
		})
	}

	// Capture evenement keyDown, capture CTRL + S pour sauvegarder
	onKeyDown = e => {
		console.log("Editor.react.js -> 66 : e.wi", e.which)
		if (e.which == 83 && e.ctrlKey) {
			e.preventDefault()
			console.log("Editor.react.js -> 69 : ", this.state.nameAlgo)
			if (this.state.nameAlgo < 0) {
				let tabCode = this.state.tabCode
				tabCode.push(this.state.codeValue)
				let tabAlgo = this.state.tabAlgo
				tabAlgo.push(this.state.nameAlgoInput)
				console.log("Editor.react.js -> 75 : tab", tabAlgo)
				this.setState({
					tabCode: tabCode,
					code: tabCode.length - 1,
					tabAlgo: tabAlgo
				})
			} else {
				let tabCode = this.state.tabCode
				tabCode[this.state.code] = this.state.codeValue
				this.setState({ tabCode: tabCode })
			}
			this.setState({ openSnack: true })
			console.log("Editor.react.js -> 67 : pressed")
		}
	}

	render() {
		return (
			<div className="container" onKeyDown={this.onKeyDown}>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={this.state.openSnack}
					onClose={this.closeSnack}
					SnackbarContentProps={{
						"aria-describedby": "message-id"
					}}
					autoHideDuration={1500}
					message={<span id="message-id">Sauvegardé !</span>}
				/>
				<div>
					<Toolbar style={{ display: "flex" }}>
						<div className="containerMenuAlgo">
							<div>
								<Input
									className="inputNameAlgo"
									placeholder="Saisir le nom de l'algorithme "
									inputProps={{
										"aria-label": "Description"
									}}
									value={this.state.nameAlgoInput}
									onChange={e => {
										this.setState({
											nameAlgoInput: e.target.value
										})
									}}
								/>
								<IconButton
									onClick={e => {
										this.setState({
											anchorEl: e.currentTarget,
											openAlgo: true
										})
									}}
									aria-owns={
										this.state.anchorEl
											? "menu-editor"
											: null
									}
									color="inherit"
									aria-label="Menu"
								>
									<Icon>arrow_drop_down</Icon>
								</IconButton>
								<Menu
									id="menu-editor"
									anchorEl={this.state.anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									open={this.state.openAlgo}
									onClose={() => {
										this.closeAlog(-1)
									}}
									className="menuAlgo"
								>
									{this.state.tabAlgo.map((algo, i) => {
										return (
											<MenuItem
												key={i}
												onClick={() => {
													this.closeAlog(i)
												}}
											>
												{algo}
											</MenuItem>
										)
									})}
									<MenuItem
										onClick={() => {
											this.closeAlog(-2)
										}}
									>
										Ajouter un algorithme
									</MenuItem>
								</Menu>
							</div>
							<div className="containerMenuRight">
								<p>
									{this.state.nameConfig > -1
										? this.state.tabConfig[
												this.state.nameConfig
										  ]
										: this.state.nameConfig}
								</p>
								<IconButton
									onClick={e => {
										this.setState({
											openMenuConfig: true,
											anchorElConfig: e.currentTarget
										})
									}}
									aria-owns={
										this.state.anchorElConfig
											? "menu-editorConfig"
											: null
									}
									color="inherit"
									aria-label="Menu"
								>
									<Icon>arrow_drop_down</Icon>
								</IconButton>
								<Menu
									id="menu-editorConfig"
									anchorEl={this.state.anchorElConfig}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									open={this.state.openMenuConfig}
									onClose={() => {
										this.setState({ openMenuConfig: false })
									}}
									className="menuAlgo"
								>
									{this.state.tabConfig.map((config, i) => {
										return (
											<MenuItem
												key={i}
												onClick={() => {
													this.setState({
														openMenuConfig: false,
														nameConfig: i
													})
												}}
											>
												{config}
											</MenuItem>
										)
									})}
									<MenuItem
										onClick={this.onClickAddConfiguration}
									>
										Ajouter une configuration
									</MenuItem>
								</Menu>
								<div className="iconColorPlay">
									<IconButton
										aria-haspopup="true"
										onClick={this.play}
										color="inherit"
									>
										<Icon>play_arrow</Icon>
									</IconButton>
								</div>
							</div>
						</div>
					</Toolbar>
				</div>
				<AceEditor
					className="editor"
					width="100%"
					height="90%"
					mode="javascript"
					theme="monokai"
					name="codeEditorId"
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					onChange={this.onChange}
					value={this.state.codeValue}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true,
						showLineNumbers: true,
						tabSize: 4
					}}
				/>
				<DialogAddConfig
					open={this.state.openDialogConfig}
					add={this.addConfig}
					close={() => {
						this.setState({ openDialogConfig: false })
					}}
				/>
			</div>
		)
	}
}
