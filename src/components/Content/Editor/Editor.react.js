import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'
import './Editor.scss'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
export default class Editor extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = { code: 'let animal = new Lapin()'}
	}

	onChange = (code, e) => {
		this.setState({code: code})
	}

	render() {
		console.log('Editor.react.js -> 17 : this', this.state.code)
		return (
			<div className='containerInputCode'>
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