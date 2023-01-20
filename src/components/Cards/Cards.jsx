import React from "react";
import { Card } from "react-bootstrap";
import { FaRegFolderOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";

const Cards = ({ menuItem, query }) => {
  const navigate = useNavigate();
  return (
    <>
      {menuItem
        .filter((item) => {
          return query.toLowerCase() === ""
            ? item
            : item.heading.toLowerCase().includes(query);
        })
        .map((item) => (
          <Card
          data-aos="zoom-in"  
            key={item.id}
            className="card"
            onClick={() => {
              navigate(`/fc/${item.id}`);
            }}
          >
            {/* <Link to={`/fc/${item.id}`}>DETAILS</Link> */}
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.heading}
              className="card-thumbnail"
            />
            <div  className="card-container">
              <p className="card-information">
                {item.id} | {item.duration} | {item.video} | {item.kategori}
              </p>
              <h5 className="card-title">{item.heading}</h5>
              <p className="card-deskripsi">{item.description}</p>
              <span className="card-type">
                <FaRegFolderOpen size={21} style={{ color: "#8F97F9" }} />
                {item.kategori}
              </span>
            </div>
          </Card>
        ))}
    </>
  );
};

export default Cards;
