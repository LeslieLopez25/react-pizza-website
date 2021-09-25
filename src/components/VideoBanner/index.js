import React from "react";
import { VideoContainer, VideoBg } from "./VideoElements";
import Video from "../../video/video-1.mp4";

const VideoBanner = () => {
  return (
    <VideoContainer>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
    </VideoContainer>
  );
};

export default VideoBanner;
