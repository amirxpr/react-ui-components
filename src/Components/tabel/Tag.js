import { Component } from "react";


export default class Tag extends Component {

    render() {
        return (
            <span className={'tag tag-' + this.props.color} key={this.props.tagKey}>{this.props.children}</span>
         );
    }
}

Tag.defaultProps = {
    color: 'Blue',
    tagKey: ''
}