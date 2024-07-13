import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../store/selectors';
import { DataEntry } from '../types/index';


const DataTable: React.FC = () => {
    const data: DataEntry[] = useSelector(selectData);

    return (
        <div className='Table'>
            {data.length === 0 ? (
                <p>No data found</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Modified At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.symbol}</td>
                                <td>{entry.price}</td>
                                <td>{entry.updated_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default DataTable;