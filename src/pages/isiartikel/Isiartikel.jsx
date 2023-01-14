import React from 'react';
import Cover from '../isiartikel/img/coverisi.png';
import './isiartikel.css';

const Isiartikel = () => {
  return (
    <div className='container'>
      <div className="coverisiartikel">
        <img src={Cover} alt="Cover" className="coverisi"></img>
      </div>
      <div className="artikeldes">
        <div className="des">
          <p>Cara Cermat Mencapai Financial Freedom</p>
          <div className="desc">
            <p>
              Kebebasan finansial, atau financial freedom, sering menjadi bahan perbincangan karena hal ini merupakan impian dari banyak orang. Namun apa sebetulnya yang dimaksud dengan hal tersebut? Pada dasarnya, financial freedom adalah
              sebuah kondisi di mana kita dapat mengambil berbagai keputusan (untuk pengeluaran) tanpa harus mengkhawatirkan keadaan keuangan kita. Untuk mencapai kondisi financial freedom tentunya tidak mudah, terlebih jika tidak diiringi
              dengan persiapan dan perencanaan yang matang serta gaya hidup hemat. Diperlukan komitmen serta kedisiplinan yang tinggi dalam mengelola keuangan sejak muda. Kita juga harus lebih bijaksana dalam melakukan pengeluaran.
            </p>
          </div>
          <div className="des1">
            <p> Apa yang Bisa Kita Lakukan Agar Lebih Disiplin Dalam Mengelola Keuangan?</p>
            <div className="desc">
              <p>
                pahami kondisi keuangan kita terlebih dahulu. Pada dasarnya, financial freedom tidak diukur dari seberapa besar penghasilan kita, melainkan bagaimana besaran penghasilan tersebut dapat mencukupi segala kebutuhan dan
                keinginan, tanpa harus mengganggu dana simpanan yang kita miliki.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Isiartikel;
