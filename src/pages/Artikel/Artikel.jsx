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
      {" "}
      <Helmet>
        <title>Fintrack | Finacial Article</title>
      </Helmet>
      <div className="artikel">
        <div className="heroartikel">
          <div className="gambarheroartikel">
            <img src={hero} alt="" />
          </div>
          <div className="desk">
            <div className="desk1">
              <p>ilustration</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
            <div className="desk2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>{" "}
            <div className="desk2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <h1>All Articles</h1>
        <div className="isiartikel">
          {artikels.slice().map((artikel) => {
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
