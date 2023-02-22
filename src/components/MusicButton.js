import React, { useEffect, useState } from "react";

const PLAY_URL =
  "https://www.flaticon.com/svg/vstatic/svg/59/59284.svg?token=exp=1612409540~hmac=2dd451b4b9c0c1a538f4ecba247a3503";
const MUTE_URL =
  "https://www.flaticon.com/svg/vstatic/svg/727/727240.svg?token=exp=1612409540~hmac=deda99a102e94464d138f23e80db3e62";

const URL =
  "https://vgmsite.com/soundtracks/labyrinth-of-refrain-coven-of-dusk-original-soundtrack/lnvcmmwdat/2-03%20-%20Witch%27s%20Depression.mp3";

const MusicButton = (props) => {
  const [audio, setAudio] = useState(new Audio(URL));
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
      <button
        onClick={() => setPlaying(!playing)}
        style={
          {
            //backgroundImage: playing ? `url(${PLAY_URL}` : `url(${MUTE_URL}`
          }
        }
      >
        {playing ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        id="volume-coven"
        value={volume}
        max={"1"}
        min={"0"}
        step={"0.05"}
        onChange={(ev) => setVolume(ev.currentTarget.value)}
        style={{ verticalAlign: "top" }}
      />
    </div>
  );
};

export default MusicButton;
