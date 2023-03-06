import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CharacterPortrait = ({ facetName }) => {
  const [backgroundImage, setBackgroundImage] = useState(facetName);

  const grabCharacterPortrait = () => {
    return `${process.env.PUBLIC_URL}/images/facets/${facetName}.png`;
  };

  useEffect(() => {
    setBackgroundImage(grabCharacterPortrait());
    console.log(facetName, grabCharacterPortrait());
  }, [facetName]);

  return (
    <div
      className={"CharacterPortrait"}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    ></div>
  );
};

CharacterPortrait.propTypes = {
  facetName: PropTypes.string
};

export default CharacterPortrait;
