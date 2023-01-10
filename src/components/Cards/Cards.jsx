import React from "react";
import { Card } from "react-bootstrap";
import { FaRegFolderOpen } from "react-icons/fa";
import "./card.css";

const Cards = ({ menuItem, query }) => {
  return (
    <>
      {menuItem
        .filter((item) => {
          return query.toLowerCase() === ""
            ? item
            : item.heading.toLowerCase().includes(query);
        })
        .map((item) => (
          <Card key={item.id} className="card">
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.heading}
              className="thumbnail"
            />
            <div className="container">
              <p className="information">
                {item.id} | {item.duration} | {item.video} | {item.kategori}
              </p>
              <h5 className="title">{item.heading}</h5>
              <p className="deskripsi">{item.description}</p>
              <span className="type">
                <FaRegFolderOpen size={21} style={{ color: "#8F97F9" }} />
                {item.level}
              </span>
            </div>
          </Card>
        ))}
    </>
  );
};

export default Cards;
