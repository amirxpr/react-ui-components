import { Component } from "react";


export default class RenderRow extends Component {

    render() {
        return (
            <tr key={this.props.row.key}>
                {this.props.columns.map((data) => (
                    <RenderTD column={data} dataIndex={data.dataIndex} dataValue={this.props.row[data.dataIndex]} />
                ))}
            </tr>
         );
    }
}

RenderRow.defaultProps = {
    columns: [],
    row: Object(),
}


class RenderTD extends Component {

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