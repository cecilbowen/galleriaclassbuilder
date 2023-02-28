import React, { useState, useEffect } from "react";
import { names } from "../facets";
import PropTypes from 'prop-types';

// unused for now because of lack of galleria sprites online, but
// may be used again in future

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

const CharacterPortrait = ({ facetName }) => {
  const [backgroundImage, setBackgroundImage] = useState();

  const grabCharacterPortrait = () => {
    const index = names.indexOf(facetName);
    return images[index][Math.floor(Math.random() * images[index].length)];
  };

  useEffect(() => {
    setBackgroundImage(grabCharacterPortrait());
  }, [facetName]);

  return (
    <div
      className={"CharacterPortrait"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

CharacterPortrait.propTypes = {
  facetName: PropTypes.string
};

export default CharacterPortrait;
