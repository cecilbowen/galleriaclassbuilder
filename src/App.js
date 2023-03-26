import React, { useEffect, useState } from "react";
import "./styles.css";
import { initSkills, getAllFacets } from "./facets";
import SKILLS from "./data/skills.json";
import FacetTable from "./components/FacetTable";
import BuildBrowser from "./components/BuildBrowser";
import CharacterPortrait from "./components/CharacterPortrait";
import {
  newBuild,
  getFacetOrder,
  isValidBuildString,
  getFacetByNumber,
  getSkillByNumber,
  generateBuildString,
  TAG_DESCRIPTIONS
} from "./utils";
import CustomBuild from "./components/CustomBuild";
import Directions from "./components/Directions";
import MusicButton from "./components/MusicButton";

export default function App() {
  const DYNAMIC_URL = true;
  const [myBuild, setMyBuild] = useState(newBuild("Blank Build", true));
  const [finalSteps, setFinalSteps] = useState(undefined);
  const [seeDirections, setSeeDirections] = useState(false);
  const [seeBrowser, setSeeBrowser] = useState(false);
  const [startingSoulClarity, setStartingSoulClarity] = useState(1);
  const [efficient] = useState(true);
  const [filterString, setFilterString] = useState("");
  const [filterTag1, setFilterTag1] = useState("");
  const [filterTag2, setFilterTag2] = useState("");
  const [filterDonums, setFilterDonums] = useState(false);

  const loadBuild = (buildStr, assign) => {
    // load build from clipboard
    const newBuildRaw = buildStr || window.prompt("Paste Build Here: ", "");
    if (isValidBuildString(newBuildRaw)) {
      const saveSplit = newBuildRaw.split("_");
      const clsNumber = saveSplit[0];
      const skillNumList = saveSplit[1];
      let soulClarity = parseInt(saveSplit[2], 10);
      soulClarity = isNaN(soulClarity) ? 1 : soulClarity;

      const loadedBuild = {
        name: "Loaded S Build",
        efficient,
        facet: getFacetByNumber(clsNumber) || "Magia Maid", // should constant ref but
        soulClarity: soulClarity,
        skills: skillNumList.split("-").filter(x => getSkillByNumber(x)).map(num => {
          const skill = getSkillByNumber(num);

          return {
            name: skill.name,
            description: skill.description,
            facet: skill.facet,
            innate: skill.innate,
            color: skill.color,
            level: skill.level,
            cost: skill.cost
          };
        })
      };

      if (!assign) {
        setMyBuild(loadedBuild);
      }
      setStartingSoulClarity(soulClarity);

      return loadedBuild;
    }

    if (!assign && newBuildRaw) {
      alert("Invalid build!");
    }

    return undefined;
  };

  const saveBuild = noPrompt => {
    const saveStr = generateBuildString(myBuild.facet, myBuild.skills, myBuild.soulClarity);

    if (!noPrompt) {
      window.prompt(`CTRL+C to Copy Build\n${window.location.href}`, saveStr);
    }

    return saveStr;
  };

  useEffect(() => {
    initSkills();
  }, []);

  useEffect(() => {
    const tempBuild = {
      ...myBuild,
      efficient: efficient
    };
    setMyBuild(tempBuild);
  }, [efficient]);

  useEffect(() => {
    if (myBuild.name === "Blank Build") {
      const buildStr = window.location.href.split("?build=").pop();
      if (isValidBuildString(buildStr)) {
        loadBuild(buildStr);
      }
    } else {
      myBuild.skills.sort((a, b) => {
        if (a.facet > b.facet) { return 1; }
        if (a.facet < b.facet) { return -1; }
        return 0;
      });

      setFinalSteps(getFacetOrder(myBuild));

      if (DYNAMIC_URL) {
        const buildString = saveBuild(true);
        const isValid = isValidBuildString(buildString);
        const urlString = `/galleriaclassbuilder/?build=${buildString}`;
        window.history.replaceState({ page: 1 }, document.title, `${isValid ? urlString : '/galleriaclassbuilder/'}`);
      }
    }
  }, [myBuild]);

  useEffect(() => {
    setFilterTag2("");
  }, [filterTag1]);

  useEffect(() => {
    const clarity = startingSoulClarity;

    if (isNaN(clarity)) {
      setStartingSoulClarity(1);
    }

    if (clarity > 999) {
      setStartingSoulClarity(999);
    }

    const tempBuild = {
      skills: myBuild.skills,
      name: myBuild.name,
      soulClarity: clarity,
      facet: myBuild.facet,
      efficient: efficient
    };
    setMyBuild(tempBuild);
  }, [startingSoulClarity]);

  const isDuplicateSkill = skill => {
    for (const s of myBuild.skills) {
      if (s.name === skill.name) {
        return true;
      }
    }

    return false;
  };

  const addSkill = skill => {
    if (isDuplicateSkill(skill)) {
      return;
    }

    const tempBuildSkills = myBuild.skills.slice(0);
    tempBuildSkills.push({
      name: skill.name,
      description: skill.description,
      facet: skill.facet,
      innate: skill.innate,
      color: skill.color,
      level: skill.level,
      cost: skill.cost
    });

    const newMyBuild = {
      skills: tempBuildSkills,
      name: "Modded Build",
      soulClarity: startingSoulClarity,
      facet: myBuild.facet,
      efficient: efficient
    };

    setMyBuild(newMyBuild);
  };

  const removeSkill = skill => {
    const tempBuildSkills = myBuild.skills
      .slice(0)
      .filter(x => x.name !== skill.name);

    const newMyBuild = {
      skills: tempBuildSkills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      facet: myBuild.facet,
      efficient: efficient
    };

    setMyBuild(newMyBuild);
  };

  const resetBuild = () => {
    window.history.replaceState({ page: 1 }, document.title, '/galleriaclassbuilder/');

    setMyBuild(newBuild("Reset Build", efficient, myBuild.facet));
  };

  const changeClass = cls => {
    const tempBuild = {
      skills: myBuild.skills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      facet: cls,
      efficient: efficient
    };

    setMyBuild(tempBuild);
  };

  const renderBaseClasses = () => {
    return Object.entries(getAllFacets()).map((clsNameSkills, i) => {
      const clsName = clsNameSkills[0];
      const skills = clsNameSkills[1];

      return (
        <FacetTable
          editBuild={addSkill}
          key={i}
          header={clsName}
          skills={skills}
          filterDonums={filterDonums}
          filterString={filterString}
          filterTags={[filterTag1, filterTag2]}
        />
      );
    });
  };

  const renderFilter = () => {
    let tags = [];
    let tagsB = [];
    for (const skill of SKILLS) {
      for (const tag of skill.tags) {
        tags.push(tag[0]);

        if (filterTag1 && tag[1] && tag.indexOf(filterTag1) !== -1) {
          tagsB.push(tag[1]);
        }
      }
    }
    tags = Array.from(new Set(tags));
    tags.sort((a, b) => a - b);
    tagsB = Array.from(new Set(tagsB));
    tagsB.sort((a, b) => a - b);

    return (
      <div className="FilterDiv">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            className="FilterBar"
            type="text"
            id="filter"
            name="filter"
            onChange={ev => setFilterString(ev.target.value)}
            placeholder="Search skills"
          />
          <label htmlFor="donumFilter" className="noselect" style={{ cursor: "pointer" }}>
          Filter out donums
          <input
              type="checkbox"
              id="donumFilter"
              name="accept"
              value="no"
              onClick={() => setFilterDonums(!filterDonums)} />
          </label>
        </div>
        <div className="FilterTags noselect">
          {tags.map((x, i) =>
            <div
              style={{ color: x === filterTag1 ? "gold" : "" }}
              key={`filter-tag1-${i}`}
              className="FilterTag"
              title={TAG_DESCRIPTIONS[x]}
              onClick={() => {
                if (filterTag1 === x) {
                  setFilterTag1("");
                } else {
                  setFilterTag1(x);
                }
              }}>{x}</div>
          )}
          {tagsB.map((x, i) =>
            <div
              style={{ backgroundColor: "#556a40", color: x === filterTag2 ? "gold" : "" }}
              key={`filter-tag2-${i}`}
              className="FilterTag"
              title={TAG_DESCRIPTIONS[x]}
              onClick={() => {
                if (filterTag2 === x) {
                  setFilterTag2("");
                } else {
                  setFilterTag2(x);
                }
              }}>{x}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {!seeBrowser && renderFilter()}
      {!seeBrowser && <div style={{ width: "60vw", marginTop: "6.5em" }}>
        {renderBaseClasses()}
      </div>}
      {seeBrowser && <BuildBrowser
        currentFacet={myBuild.facet}
        currentSkills={myBuild.skills}
        currentSoulClarity={myBuild.soulClarity}
        onCloseBrowser={() => setSeeBrowser(false)}
        onLoadBuild={build => loadBuild(build)}
      />}
      <div className="CustomBuild">
        <CustomBuild
          facetName={myBuild.facet}
          editBuild={removeSkill}
          changeClass={changeClass}
          skills={myBuild.skills}
          hide={seeDirections}
        />
      </div>
      <Directions steps={finalSteps} hide={!seeDirections} />
      {<CharacterPortrait facetName={myBuild.facet} />}
      <div className="ButtonsDiv">
        <button
          className="ToggleButton"
          onClick={() => setSeeDirections(!seeDirections)}
          style={{
            backgroundColor: "#dcfcd4",
            borderRadius: "25px",
            borderStyle: "double",
            fontWeight: "bold"
          }}
        >
          Toggle
        </button>
        <button
          className="ToggleButton"
          onClick={() => saveBuild()}
        >
          Export Build
        </button>
        <button className="ToggleButton" onClick={() => loadBuild()}>
          Import Build
        </button>
        {<button
          className="ToggleButton ModeButton"
          onClick={() => setSeeBrowser(!seeBrowser)}
        >
          Build Browser
        </button>}
        <label
          className="soulClarityLabel"
          htmlFor="startingSoulClarity"
        >Starting Soul Clarity:</label>
        <input
          id="startingSoulClarity"
          placeholder="Starting Clarity"
          title="Starting Clarity"
          type="number"
          list="souls"
          style={{ width: "4em" }}
          value={startingSoulClarity}
          min={1}
          max={999}
          onChange={ev =>
            setStartingSoulClarity(parseInt(ev.currentTarget.value, 10))
          }
        />
        <datalist id="souls">
          <option label="Small Soul" value="1"></option>
          <option label="Small Soul / CI" value="2"></option>
          <option label="Small Soul / CII" value="4"></option>
          <option label="Small Soul / CIII" value="8"></option>
        </datalist>
        <div style={{ width: "5em" }}></div>
        <button className="ToggleButton" style={{ backgroundColor: "#f1adad" }} onClick={() => resetBuild()}>
          Clear Skills
        </button>
        <MusicButton />
        <small><a style={{ color: "aqua" }} href="https://github.com/cecilbowen/galleriaclassbuilder">Source Code</a></small>
      </div>
    </div>
  );
}
