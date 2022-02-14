import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCheck } from '@fortawesome/free-solid-svg-icons'

import "../assets/editable-text.css"


export default class EditableText extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            value: this.props.value,
            type: 'text'
        }
    }

    save =  () => {
        this.setState({
            value: this.textInput.current.value,
            type: 'text'
        })
    }

    render() { 
        if (this.state.type === 'text'){
            return (
                <div className='box'>
                    {this.state.value}
                    <button onClick={() => this.setState({type: 'input'})}> <FontAwesomeIcon icon={faPencil} color="blue" /></button>
                </div>
            )
        }
        return (
            <div className='box'>
                <input type="text" defaultValue={this.state.value} ref={this.textInput} />
                <button onClick={this.save.bind(this)}> <FontAwesomeIcon icon={faCheck} color="blue" /></button>
            </div>
        )

    }
}

EditableText.defaultProps = {
    value: "Default value"
}