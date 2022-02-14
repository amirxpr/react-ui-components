import React, { Component } from 'react';

export default class Table extends Component {
    state = {  }
    render() {
        return ( 
        <div className='box'>
            <table>
                <thead>
                    <tr>
                    {this.props.columns.map((data) => (
                        <th key={data.key}>{data.title}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataSource.map((data) => (
                        <tr key={data.key}>
                            {Object.keys(data).map((key, value) => (
                                <td key={key+value}>{data[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
        );
    }
}

Table.defaultProps = {
    dataSource: [],
    columns: [],
}