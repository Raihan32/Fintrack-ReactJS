import React from 'react'
import './record.css'
import Donutchart from '../../components/donutchart/Donutchart'
const Record = () => {
  return (
    <div>
    <div className='record'>
      <Donutchart />
      <button className='addtransaksi'>New Transaksi</button>
      <div className=''></div>
    </div>
    </div>
  )
}

export default Record;
