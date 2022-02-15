import React, { Component } from 'react';
import RenderRow from './tabel/RenderRow';

export default class Table extends Component {

    render() {
        return ( 
        <div className='box'>
            <table>
                <thead>
                    <tr>
                        {this.props.columns.map((data) => (
                            <th key={data.dataIndex}>{data.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataSource.map((data) => (
                        <RenderRow columns={this.props.columns} row={data} />
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
