import React, { useEffect, useState } from "react";
import "./styles.css";
import * as Classes from "./facets";
import FacetTable from "./components/FacetTable";
import {
  newBuild,
  getSkillByName,
  getFacetOrder,
  isJsonString,
  Skill,
  getSkillNumberByName,
  getFacetNumber,
  getFacetByNumber,
  getSkillByNumber
} from "./utils";
import CustomBuild from "./components/CustomBuild";
import Directions from "./components/Directions";
import MusicButton from "./components/MusicButton";
import CharacterPortrait from "./components/CharacterPortrait";

export default function App() {
  const [myBuild, setMyBuild] = useState(newBuild("My Build", true));
  const [finalSteps, setFinalSteps] = useState(undefined);
  const [seeDirections, setSeeDirections] = useState(false);
  const [startingSoulClarity, setStartingSoulClarity] = useState(1);
  const [efficient, setEfficient] = useState(true);

  useEffect(() => {
    Classes.initSkills();
  }, []);

  useEffect(() => {
    const tempBuild = {
      ...myBuild,
      efficient: efficient
    };
    setMyBuild(tempBuild);
  }, [efficient]);

  useEffect(() => {
    if (startingSoulClarity > 999) {
      setStartingSoulClarity(999);
    }

    if (isNaN(startingSoulClarity)) {
      setStartingSoulClarity(1);
    }
  }, [startingSoulClarity]);

  useEffect(() => {
    setFinalSteps(getFacetOrder(myBuild));
  }, [myBuild]);

  useEffect(() => {
    let clarity = startingSoulClarity;
    if (isNaN(clarity)) {
      clarity = 1;
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

  const loadBuild = () => {
    //load build from clipboard
    let newBuildRaw = window.prompt("Paste Build Here: ", "");
    if (newBuildRaw && newBuildRaw.length > 0) {
      if (!isJsonString(newBuildRaw)) {
        //first check if SHORT save
        let underCount = newBuildRaw.split("").filter((x) => x === "_").length;
        if (underCount >= 2) {
          //okay, SHORT save found!
          let saveSplit = newBuildRaw.split("_");
          let clsNumber = saveSplit[0];
          let skillNumList = saveSplit[1];
          let soulClarity = saveSplit[2];

          let loadedBuild = {
            name: "Loaded S Build",
            facet: getFacetByNumber(clsNumber),
            soulClarity,
            skills: skillNumList.split("-").map((num) => {
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

          setMyBuild(loadedBuild);
          return;
        }

        alert("Invalid build!");
        return;
      }

      let newBuild = JSON.parse(newBuildRaw);

      //new save
      let loadedBuild = {
        name: "Loaded Build",
        facet: newBuild.facet,
        soulClarity: newBuild.soulClarity,
        efficient: efficient,
        skills: newBuild.skills.map((x) => {
          let skill = getSkillByName(x);

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

      for (let i = loadedBuild.skills.length; i <= 12; i++) {
        loadedBuild.skills.push(Skill());
      }

      setMyBuild(loadedBuild);
    }
  };

  const saveBuild = () => {
    let skillNumberStr = myBuild.skills
      .filter((x) => x.name !== "")
      .map((x) => getSkillNumberByName(x.name))
      .join("-");
    let saveStr = `${getFacetNumber(myBuild.facet)}_${skillNumberStr}_${
      myBuild.soulClarity
    }`;

    window.prompt("CTRL+C to Copy Build", saveStr);
  };

  const renderBaseClasses = () => {
    return Object.entries(Classes.getAllFacets()).map((clsNameSkills, i) => {
      let clsName = clsNameSkills[0];
      let skills = clsNameSkills[1];

      return (
        <FacetTable
          editBuild={addSkill}
          key={i}
          header={clsName}
          skills={skills}
        />
      );
    });
  };

  const isDuplicateSkill = (skill) => {
    for (const s of myBuild.skills) {
      if (s.name === skill.name) {
        return true;
      }
    }

    return false;
  };

  const changeClass = (cls) => {
    let tempBuild = {
      skills: myBuild.skills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      facet: cls,
      efficient: efficient
    };

    setMyBuild(tempBuild);
  };

  const addSkill = (skill) => {
    if (isDuplicateSkill(skill)) return;

    let tempBuildSkills = myBuild.skills.slice(0);
    tempBuildSkills.push({
      name: skill.name,
      description: skill.description,
      facet: skill.facet,
      innate: skill.innate,
      color: skill.color,
      level: skill.level,
      cost: skill.cost
    });

    let newMyBuild = {
      skills: tempBuildSkills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      facet: myBuild.facet,
      efficient: efficient
    };

    setMyBuild(newMyBuild);
  };

  const removeSkill = (skill) => {
    let tempBuildSkills = myBuild.skills
      .slice(0)
      .filter((x) => x.name !== skill.name);

    let newMyBuild = {
      skills: tempBuildSkills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      facet: myBuild.facet,
      efficient: efficient
    };

    setMyBuild(newMyBuild);
  };

  return (
    <div className="App">
      <div style={{ width: "60vw" }}>{renderBaseClasses()}</div>
      <div className="CustomBuild">
        <CustomBuild
          customClass={myBuild.facet}
          editBuild={removeSkill}
          changeClass={changeClass}
          skills={myBuild.skills}
          hide={seeDirections}
        />
      </div>
      <Directions steps={finalSteps} hide={!seeDirections} />
      {/*<CharacterPortrait className={myBuild.facet} />*/}
      <div className={"ButtonsDiv"}>
        {seeDirections && <button
          className={"ModeButton"}
          onClick={() => setEfficient(!efficient)}
        >
          {efficient ? "Mode: Efficient" : "Mode: Quickest"}
        </button>}
        <button
          className={"ToggleButton"}
          onClick={() => setSeeDirections(!seeDirections)}
          style={{
            backgroundColor: "#dcfcd4",
            borderRadius: "25px",
            borderStyle: "double",
            cursor: "pointer"
          }}
        >
          Toggle
        </button>
        <a
          className={"ToggleButton LinkButton"}
          style={{ margin: "1em", display: "none" }}
          type="button"
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(myBuild)
          )}`}
          download="coven_build.json"
        >
          Save Build
        </a>
        <button
          className={"ToggleButton"}
          style={{ margin: "1em" }}
          onClick={() => saveBuild()}
        >
          Save Build
        </button>
        <button className={"ToggleButton"} onClick={() => loadBuild()}>
          Load Build
        </button>
        <input
          placeholder="Starting Clarity"
          title="Starting Clarity"
          type="number"
          list="souls"
          style={{ width: "8em", marginLeft: "1em" }}
          value={startingSoulClarity}
          min={1}
          max={999}
          onChange={(ev) =>
            setStartingSoulClarity(parseInt(ev.currentTarget.value, 10))
          }
        />
        <datalist id="souls">
          <option label="Small Soul" value="1"></option>
          <option label="Shining Soul" value="4"></option>
          <option label="Shimmering Soul" value="8"></option>
          <option label="Divine Soul" value="12"></option>
        </datalist>
        <MusicButton />
        <small><a href="https://github.com/cecilbowen/galleriaclassbuilder">Source Code</a></small>
      </div>
    </div>
  );
}
