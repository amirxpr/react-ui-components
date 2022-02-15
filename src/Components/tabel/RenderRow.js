import { Component } from "react";


export default class RenderTD extends Component {

    render() {
        if ("render" in this.props.column) {
            return ( 
                <td key={this.props.dataIndex}>
                    {this.props.column.render(this.props.dataValue)}
                </td>
             )
        }
        return (
            <td key={this.props.dataIndex}>{this.props.dataValue}</td>
        )
    }
}


RenderTD.defaultProps = {
    column: Object(),
    dataIndex: '',
    dataValue: ''
}