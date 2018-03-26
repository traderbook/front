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
import DialogAddConfig from './DialogAddConfig.react'

export default class Editor extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			code:0, anchorEl: null, openAlgo: false, openMenuConfig: false, anchorElConfig: null, nameConfig: 0, openDialogConfig: false,
			nameAlgo: 0, tabConfig:['Config n°1', 'Config n°2'], tabAlgo:['Algo n°1', 'Algo n°2'], tabCode: ['class Main extends Strategy {\n\tOnInit(){\n\n\t}\n\n\ttOnTick(tick){\n\n\t}\n\n\tOnDestruct(){\n\n\t}\n}', 'let animal = new Lapin() \nlet castor = new Castor()'],
			nameAlgoInput: ''
		}
	}

	onChange = (code, e) => {
		this.setState({ code: code })
	}

	play = () => {
		console.log('Editor.react.js -> 25 : Play', )
	}

	closeAlog = (num) => {
		switch(num){
			case -2 :
			this.setState({ openAlgo: false, code:-1, nameAlgo: -1 })
				
			break
			case -1 :
				this.setState({ openAlgo: false })
			break
			case 0: 
				this.setState({ openAlgo: false, code: 0, nameAlgo: 0 })
			
			break
			case 1: 
			this.setState({ openAlgo: false, code:1, nameAlgo: 1 })
				break
		}
	}

	onClickAddConfiguration = () => {
		this.setState({openMenuConfig: false, nameConfig: 'Config n°1', openDialogConfig: true})
	}

	openMenu = (e) => { this.setState({ anchorEl: e.currentTarget, openAlgo: true }) }

	addConfig = (config) => {
		let tabConfig = this.state.tabConfig
		tabConfig.push(config.nom)
		this.setState({tabConfig: tabConfig, nameConfig: (tabConfig.length -1)})
	}

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
							value={this.state.nameAlgo>-1?this.state.tabAlgo[this.state.nameAlgo]:''}
							onChange={(e)=>{this.setState({nameAlgoInput: e.target.value})}}
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
								<MenuItem onClick={() => { this.closeAlog(-2) }}>Ajouter un algorithme</MenuItem>
							</Menu>
						</div>
						<div className="containerMenuRight">
						<p>{this.state.nameConfig>-1?this.state.tabConfig[this.state.nameConfig]:this.state.nameConfig}</p>
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
								{this.state.tabConfig.map((config, i)=>{
									return (<MenuItem key={i} onClick={() => { this.setState({openMenuConfig: false, nameConfig: i-1}) }}>{config}</MenuItem>)
								})}
								<MenuItem onClick={this.onClickAddConfiguration}>Ajouter une configuration</MenuItem>
								
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
					value={this.state.code > -1?this.state.tabCode[this.state.code]:''}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true,
						showLineNumbers: true,
						tabSize: 4,
					}}
				/>
				<DialogAddConfig open={this.state.openDialogConfig} add={this.addConfig} close={()=>{this.setState({openDialogConfig: false})}} />
			</div>
		)
	}
}