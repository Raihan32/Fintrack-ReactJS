import DataTable from 'react-data-table-component';
import React from 'react';

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Note',
        selector: row => row.note,
        sortable: true,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
        sortable: true,
    },
    {
        name: 'date',
        selector: row => row.date,
        sortable: true,
    }
    
    
];

const data = [
    {
        id: 1,
        note: 'Gaji',
        amount: '5.000.000',
        date: '1 januari'
    },
    {
        id: 2,
        note: 'jajan',
        amount: '2.000.000',
        date: '3 januari'
    },
]

function Tabel() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
export default Tabel;