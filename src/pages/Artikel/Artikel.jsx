import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./artikel.css";
import hero from "./img/hero.png";
import card from "./img/card.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import axios from "axios";

const Artikel = () => {
  const navigate = useNavigate();

  const [artikels, setArtikels] = useState([]);

  async function DataArtikels() {
    try {
      const response = await axios.get(
        "https://apigenerator.dronahq.com/api/jq3eOc4d/artikeldata"
      );
      setArtikels(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    DataArtikels();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Fintrack | Financial Article</title>
      </Helmet>
      <div className="artikel">
        <div className="heroartikel">
          <div className="gambarheroartikel">
            <img src={hero} alt="humbnail-0" style={{ borderRadius: "4px" }} />
          </div>
          <div className="desk">
            <div className="desk1">
              <p>Cara Membuat Laporan Laba Rugi untuk Bisnis Franchise</p>
              <p>
                Bagaimana cara membuat laporan laba rugi untuk bisnis franchise
                atau waralaba? Berikut penjelasannya di Blog
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
            <div className="desk2">
              <p>Cara Membaca Laporan Neraca Keuangan yang Benar</p>
              <button className="btn btn-primary">Read More</button>
            </div>
            <div className="desk2">
              <p>Jangan Lupa Lapor SPT Pajak, Begini Dendanya!</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <h1>All Articles</h1>
        <div className="isiartikel">
          <div
            className="cardsartikel"
            onClick={() => {
              navigate(`/fa/artikel`);
            }}
          >
            <img
              className="thumbnail-artikel"
              src={
                "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZpbmFuY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="gambar-artikel1"
            />
            <div className="cardisiartikel">
              <p className="cardisiartikeljudul">
                Mengenal Istilah-Istilah Audit Pada Laporan Keuangan Perusahaan
              </p>
              <p>
                Kenali dulu istilah-istilah dalam audit dalam laporan keuangan
                perusahaan agar Anda sebagai pemilik bisnis dapat
              </p>
              <Link className="linkisiartikel" to={`/fa/artikel`}>
                Read more <BsArrowRightCircle />
              </Link>
            </div>
          </div>
          {artikels.slice(0, 3).map((artikel) => {
            return (
              <div
                className="cardsartikel"
                key={artikel.id}
                // onClick={() => {
                //   navigate(`/fa/${artikel.id}`);
                // }}
              >
                <img
                  className="thumbnail-artikel"
                  src={artikel.image}
                  alt={artikel.heading}
                />
                <div className="cardisiartikel">
                  <p className="cardisiartikeljudul">{artikel.heading}</p>
                  <p>{artikel.description}</p>
                  <Link className="linkisiartikel" to={`/fa/${artikel.id}`}>
                    Read more <BsArrowRightCircle />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
