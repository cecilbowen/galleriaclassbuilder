import React, { useEffect, useState } from "react";

const URL =
  "https://vgmsite.com/soundtracks/coven-and-labyrinth-of-galleria-original-soundtrack/aotwhqkkkz/2-12%20Curio%20Gallery.mp3";

const MusicButton = props => {
  const [audio, ] = useState(new Audio(URL));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);

  useEffect(() => {
    if (playing) {
      audio.play();
      audio.loop = true;
      audio.volume = volume;
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  return (
    <div>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        id="volume-coven"
        value={volume}
        max={"1"}
        min={"0"}
        step={"0.05"}
        onChange={ev => setVolume(ev.currentTarget.value)}
        style={{ verticalAlign: "top" }}
      />
    </div>
  );
};

export default MusicButton;
