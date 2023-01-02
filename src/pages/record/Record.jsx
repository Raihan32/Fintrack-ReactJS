import React from 'react'
import './record.css'
import Donutchart from '../../components/donutchart/Donutchart'
import Tabel from '../../components/Tabel/Tabel'
const Record = () => {
  return (
    <div>
    <div className='record'>
      <Donutchart />
      <button className='addtransaksi'>New Transaksi</button>
      <div> 
        <Tabel/>
      </div>
    </div>
    </div>
  )
}

export default Record;
