import React, { useState, useEffect } from "react";
import * as Classes from "../classes";

/*
props:
  className - name of character's class

  asterKnight,
  marginalMaze,
  shinobushi,
  peerFortress,
  theatricalStar,
  madRaptor,
  gothicCoppelia,
  demonReaper
*/

const asterKnight = ["./images/asterKnight.png"];
const marginalMaze = ["./images/marginalMaze.png"];
const shinobushi = ["./images/shinobushi.png"];
const peerFortress = ["./images/peerFortress.png"];
const theatricalStar = ["./images/theatricalStar.png"];
const madRaptor = ["./images/madRaptor.png"];
const gothicCoppelia = ["./images/gothicCoppelia.png"];
const demonReaper = ["./images/demonReaper.png"];

const images = [
  asterKnight,
  marginalMaze,
  shinobushi,
  peerFortress,
  theatricalStar,
  madRaptor,
  gothicCoppelia,
  demonReaper
];

const CharacterPortrait = (props) => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    setBackgroundImage(grabCharacterPortrait(props.className));
  }, [props.className]);

  const grabCharacterPortrait = (className) => {
    let index = Classes.names.indexOf(className);
    return images[index][Math.floor(Math.random() * images[index].length)];
  };

  return (
    <div
      className={"CharacterPortrait"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default CharacterPortrait;
