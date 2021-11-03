import React from "react";
import Audio from "../assets/audio/wavesUponAShore.mp3";

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio
          ref="audio_tag"
          src={Audio}
          controls
          autoPlay
          loop
          style={{ display: "none" }}
        />
      </div>
    );
  }
}

export default AudioPlayer;
