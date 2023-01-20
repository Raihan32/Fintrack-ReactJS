import React from "react";
import ReactPlayer from "react-player";
import "./responsive-player.css";
import foto1 from "../../assets/foto1.jpg";

const videoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        playing
        url={url}
        width="42rem"
        height="100%"
        light={foto1}
        controls={true}
        pip={true}
      />
    </div>
  );
};

export default videoPlayer;
