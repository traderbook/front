import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'
import './Editor.scss'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
import 'brace/snippets/javascript'
import 'brace/ext/language_tools'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import Input from 'material-ui/Input'
import Menu, { MenuItem } from 'material-ui/Menu'

export default class Editor extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			code:
				`class Main extends Strategy {\n\tOnInit(){\n\n\t}\n\n\ttOnTick(tick){\n\n\t}\n\n\tOnDestruct(){\n\n\t}\n}`, 
				anchorEl: null, openAlgo: false, openMenuConfig: false, anchorElConfig: null, nameConfig: 'Config n°1'
		}
	}

	onChange = (code, e) => {
		this.setState({ code: code })
	}

	play = () => {
		console.log('Editor.react.js -> 25 : Play', )
	}

	closeAlog = (num) => {
		if (num === -1) {
			this.setState({ openAlgo: false })
		}
		let algos = [`class Main extends Strategy {\n\tOnInit(){\n\n\t}\n\n\ttOnTick(tick){\n\n\t}\n\n\tOnDestruct(){\n\n\t}\n}`, 'let animal = new Lapin() \nlet castor = new Castor()']
		this.setState({ openAlgo: false, code: algos[num] })
	}

	openMenu = (e) => { this.setState({ anchorEl: e.currentTarget, openAlgo: true }) }

	render() {
		return (
			<div>
				<div>
					<Toolbar style={{display: 'flex'}} >
					<div className="containerMenuAlgo">
					<div>
						<Input
							className="inputNameAlgo"
							placeholder="Saisir le nom de l'algorithme "
							inputProps={{
								'aria-label': 'Description',
							}}
						/>
							<IconButton onClick={this.openMenu} aria-owns={this.state.anchorEl ? 'menu-editor' : null} color="inherit" aria-label="Menu">
								<Icon>arrow_drop_down</Icon>
							</IconButton>
							<Menu
								id="menu-editor"
								anchorEl={this.state.anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}
								}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}
								}
								open={this.state.openAlgo}
								onClose={() => { this.closeAlog(-1) }}
								className="menuAlgo"
							>
								<MenuItem onClick={() => { this.closeAlog(0) }}>Algo n°1</MenuItem>
								<MenuItem onClick={() => { this.closeAlog(1) }}>Algo n°2</MenuItem>
							</Menu>
						</div>
						<div className="containerMenuRight">
						<p>{this.state.nameConfig}</p>
						<IconButton onClick={(e) => { this.setState({openMenuConfig: true, anchorElConfig: e.currentTarget}) }} aria-owns={this.state.anchorElConfig ? 'menu-editorConfig' : null} color="inherit" aria-label="Menu">
								<Icon>arrow_drop_down</Icon>
							</IconButton>
							<Menu
								id="menu-editorConfig"
								anchorEl={this.state.anchorElConfig}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}
								}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}
								}
								open={this.state.openMenuConfig}
								onClose={() => { this.setState({openMenuConfig: false}) }}
								className="menuAlgo"
							>
								<MenuItem onClick={() => { this.setState({openMenuConfig: false, nameConfig: 'Config n°1'}) }}>Config n°1</MenuItem>
								<MenuItem onClick={() => { this.setState({openMenuConfig: false, nameConfig: 'Config n°2'}) }}>Config n°2</MenuItem>
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
					mode="javascript"
					theme="monokai"
					name="codeEditorId"
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					onChange={this.onChange}
					value={this.state.code}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true,
						showLineNumbers: true,
						tabSize: 4,
					}}
				/>
			</div>
		)
	}
}