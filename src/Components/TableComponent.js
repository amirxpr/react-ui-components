import React, { Component } from 'react';
import RenderTD from './tabel/RenderRow';

export default class Table extends Component {

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
                            {this.props.columns.map((column) => (
                                <RenderTD column={column} dataIndex={column.key + data.key} dataValue={data[column.dataIndex]} />
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