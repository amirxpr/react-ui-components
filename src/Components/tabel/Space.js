import { Component } from "react";

export default class Space extends Component {

    render() {
        return ( 
            <div className={'space ' + this.props.size} >
                {this.props.children.map((data, index) => (
                    <div className="space-item" key={index + data.toString().toLowerCase()}>{data}</div>
                ))}
            </div>
         );
    }
}

Space.defaultProps = { size:'middle' }