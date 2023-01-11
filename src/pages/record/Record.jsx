// import React from 'react'
// import './record.css'
// import Donutchart from '../../components/donutchart/Donutchart'
// import Tabel from '../../components/Tabel/Tabel'
// const Record = () => {
//   return (
//     <div>
//     <div className='record'>
//       <Donutchart />
//       <button className='addtransaksi'>New Transaksi</button>
//       <div> 
//         <Tabel/>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Record;
import React from "react";
import './record.css'
import ModalCreate from "../../components/Modal/ModalCreate";


class Record extends React.Component {
  constructor(tambahItem){
    super();

    this.state = {
      sisaUang : 0,
      persentasiUang : 0,
      pemasukanUang : 0,
      pengeluaranUang : 0,
      transaksiIN : 0,
      transaksiOUT : 0,
      summary : [
        // {
        //   deskripsi : 'menerima Gaji',
        //   tanggal : '1 mei 2022',
        //   nominal : 1000000,
        //   category : 'IN'
        // },
        // {
        //   deskripsi : 'menerima Gaji',
        //   tanggal : '1 mei 2022',
        //   nominal : 2000000,
        //   category : 'IN'
        // },
        // {
        //   deskripsi : 'Makan Nasi padang',
        //   tanggal : '3 mei 2022',
        //   nominal : 20000,
        //   category : 'OUT'
        // },
      ]
    }
    this.tambahItem = this.tambahItem.bind(this);
    this.fnHitung = this.fnHitung.bind(this);
  }
  tambahItem(objek){
    let newData = [...this.state.summary, objek]
    let datalUangIN = newData.filter( (item)=> item.category === 'IN' );
    let nominalUang = datalUangIN.map((item)=> item.nominal);
    let jumlahuangIN = nominalUang.reduce ((total, num) => total + num, 0 );
    let datalUangOUT = newData.filter( (item)=> item.category === 'OUT' );
    let nominalUangOUT = datalUangOUT.map((item)=> item.nominal);
    let jumlahuangOUT = nominalUangOUT.reduce ((total, num) => total + num, 0 );
    this.setState({
      pemasukanUang : jumlahuangIN,
      transaksiIN : nominalUang.length,
      pengeluaranUang : jumlahuangOUT,
      transaksiOUT : nominalUangOUT.length,
      sisaUang : jumlahuangIN - jumlahuangOUT,
      persentasiUang : (jumlahuangIN - jumlahuangOUT) / jumlahuangIN * 100,
      summary : newData
    })
}

  fnHitung() {
    let datalUangIN = this.state.summary.filter( (item)=> item.category === 'IN' );
    let nominalUang = datalUangIN.map((item)=> item.nominal);
    let jumlahuangIN = nominalUang.reduce ((total, num) => total + num );
    let datalUangOUT = this.state.summary.filter( (item)=> item.category === 'OUT' );
    let nominalUangOUT = datalUangOUT.map((item)=> item.nominal);
    let jumlahuangOUT = nominalUangOUT.reduce ((total, num) => total + num );
    
    this.setState({
      pemasukanUang : jumlahuangIN,
      transaksiIN : nominalUang.length,
      pengeluaranUang : jumlahuangOUT,
      transaksiOUT : nominalUangOUT.length,
      sisaUang : jumlahuangIN - jumlahuangOUT,
      persentasiUang : (jumlahuangIN - jumlahuangOUT) / jumlahuangIN * 100
    })
  }

  componentDidMount(){
    if(this.state.summary.length < 1  ) {
      console.log('ok')
    } else {
      this.fnHitung()
    }
  }

  render(){
    return(
      <>
        <div className="container py-5 ">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-bold">Financial Record</h1>
              <hr className="w-75 mx-auto"/>
              <h2 className="fw-bold">Rp. {this.state.sisaUang}</h2>
              <span className="title-md">Sisa uang kamu terisa {this.state.persentasiUang}%</span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <div className="card-wraper p-4">
              <div className="icon-wrapper-IN mb-1">
                <i class="bi bi-wallet"></i>
                </div>            
              <span className="title-sm">Pemasukan</span>
              <h3 className="fw-bold">Rp. {this.state.pemasukanUang}</h3>
              <div>
              <span className="title-sm text-ungu fw-bold">{this.state.transaksiIN} </span><span className="title-sm">transaksi</span>
              </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-wraper p-4">
              <div className="icon-wrapper-OUT mb-1">
              <i class="bi bi-cash-stack"></i>
                </div>            
              <span className="title-sm">Pengeluaran</span>
              <h3 className="fw-bold">Rp. {this.state.pengeluaranUang}</h3>
              <div>
              <span className="title-sm text-pink fw-bold">{this.state.transaksiOUT} </span><span className="title-sm">transaksi</span>
              </div>
              </div>
            </div>
          </div>
          
          
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between align-item-center">
              <h4 className="fw-bold">Ringkasan Transaksi</h4>
              <div className="wraooer-button d-flex">
                <ModalCreate action={this.tambahItem} category="IN" variant="button btn-ungu px-3 py-2 me-2" text="pemasukan" icon="bi bi-plus-circle" modalheading="Tambahkan Pemasukan"/>
                <ModalCreate action={this.tambahItem} category="OUT" variant="button btn-pink px-3 py-2 me-2" text="pengeluaran" icon="bi bi-dash-circle" modalheading="Tambahkan pengeluaran" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            { this.state.summary.length < 1 &&  <Alert />}
            
            { this.state.summary.map((sum, index)=>{
              return(
            <div key={index} className="mb-3 col-12 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
              <div className={sum.category === 'IN' ? 'icon-wrapper-IN' : 'icon-wrapper-OUT'}>
              <i className={sum.category === 'IN' ? 'bi bi-plus-lg': 'bi bi-dash-lg'}></i>
              </div>
              <div className="transaction ms-3 d-flex flex-column">
                <h6>{sum.deskripsi}</h6>
                <span className="titles">{sum.tanggal}</span>
              </div>
              </div>
              <h5 className={sum.category === 'IN' ? 'text-money-in' : 'text-money-out'}> Rp. {sum.nominal}</h5>
            </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

class Alert extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <h1>Tidak Ada Data</h1>
    )
  }
}



export default Record;