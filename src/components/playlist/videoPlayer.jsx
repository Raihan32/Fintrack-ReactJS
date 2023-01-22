import React from "react";
import ReactPlayer from "react-player";
import "./responsive-player.css";

const videoPlayer = ({ url, light }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        playing
        width="100%"
        url={url}
        light={light}
        controls={true}
        pip={true}
      />
    </div>
  );
};

export default videoPlayer;
