import React, { useEffect, useState } from "react";
import "./styles.css";
import * as Classes from "./classes";
import ClassTable from "./components/ClassTable";
import {
  newBuild,
  getSkillByName,
  getClassOrder,
  isJsonString,
  Skill,
  getSkillNumberByName,
  getClassNumber,
  getClassByNumber,
  getSkillByNumber
} from "./utils";
import CustomBuild from "./components/CustomBuild";
import Directions from "./components/Directions";
import MusicButton from "./components/MusicButton";
import CharacterPortrait from "./components/CharacterPortrait";

export default function App() {
  const [myBuild, setMyBuild] = useState(newBuild("My Build"));
  const [finalSteps, setFinalSteps] = useState(undefined);
  const [seeDirections, setSeeDirections] = useState(false);
  const [startingSoulClarity, setStartingSoulClarity] = useState(1);

  useEffect(() => {
    Classes.initSkills();
  }, []);

  useEffect(() => {
    if (startingSoulClarity > 99) {
      setStartingSoulClarity(99);
    }

    if (isNaN(startingSoulClarity)) {
      setStartingSoulClarity(1);
    }
  }, [startingSoulClarity]);

  useEffect(() => {
    setFinalSteps(getClassOrder(myBuild));
  }, [myBuild]);

  useEffect(() => {
    let clarity = startingSoulClarity;
    if (isNaN(clarity)) {
      clarity = 1;
    }

    let tempBuild = {
      skills: myBuild.skills,
      name: myBuild.name,
      soulClarity: clarity,
      className: myBuild.className
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
            className: getClassByNumber(clsNumber),
            soulClarity,
            skills: skillNumList.split("-").map((num) => {
              let sk = getSkillByNumber(num);

              return {
                name: sk.name,
                description: sk.description,
                innate: sk.innate,
                color: sk.color,
                level: sk.level
              };
            })
          };

          for (let i = loadedBuild.skills.length; i < 12; i++) {
            loadedBuild.skills.push(Skill());
          }

          setMyBuild(loadedBuild);
          return;
        }

        alert("Invalid build!");
        return;
      }

      let newBuild = JSON.parse(newBuildRaw);

      //legacy save
      if (newBuild.name) {
        if (newBuild && newBuild.skills) {
          setMyBuild(newBuild);
        } else {
          alert("Invalid legacy build!");
        }

        return;
      }

      //new save
      let loadedBuild = {
        name: "Loaded Build",
        className: newBuild.className,
        soulClarity: newBuild.soulClarity,
        skills: newBuild.skills.map((x) => {
          let sk = getSkillByName(x);

          return {
            name: sk.name,
            description: sk.description,
            innate: sk.innate,
            color: sk.color,
            level: sk.level
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
    let saveStr = `${getClassNumber(myBuild.className)}_${skillNumberStr}_${
      myBuild.soulClarity
    }`;

    window.prompt("CTRL+C to Copy Build", saveStr);
  };

  const renderBaseClasses = () => {
    return Object.entries(Classes.getAllClasses()).map((clsNameSkills, i) => {
      let clsName = clsNameSkills[0];
      let skills = clsNameSkills[1];

      return (
        <ClassTable
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
      className: cls
    };

    setMyBuild(tempBuild);
  };

  const addSkill = (skill) => {
    if (isDuplicateSkill(skill)) return;

    let tempBuildSkills = myBuild.skills.slice(0);
    for (const s of tempBuildSkills) {
      if (s.name === "") {
        s.name = skill.name;
        s.description = skill.description;
        s.innate = skill.innate;
        s.color = skill.color;
        s.level = skill.level;
        break;
      }
    }

    let newMyBuild = {
      skills: tempBuildSkills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      className: myBuild.className
    };

    setMyBuild(newMyBuild);
  };

  const removeSkill = (skill) => {
    if (skill.name === "") {
      return;
    }
    if (myBuild.skills.filter((x) => x.name !== "").length <= 0) {
      return;
    }

    let tempBuildSkills = myBuild.skills
      .slice(0)
      .filter((x) => x.name !== skill.name);
    for (
      let i = 0;
      i < Math.abs(myBuild.skills.length - tempBuildSkills.length);
      i++
    ) {
      tempBuildSkills.push({
        name: "",
        description: "",
        innate: false,
        color: "white",
        level: 0
      });
    }

    let newMyBuild = {
      skills: tempBuildSkills,
      name: myBuild.name,
      soulClarity: startingSoulClarity,
      className: myBuild.className
    };

    setMyBuild(newMyBuild);
  };

  return (
    <div className="App">
      <div style={{ width: "60vw" }}>{renderBaseClasses()}</div>
      <div className="CustomBuild">
        <CustomBuild
          customClass={myBuild.className}
          editBuild={removeSkill}
          changeClass={changeClass}
          skills={myBuild.skills}
          hide={seeDirections}
        />
      </div>
      <Directions steps={finalSteps} hide={!seeDirections} />
      <CharacterPortrait className={myBuild.className} />
      <div className={"ButtonsDiv"}>
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
          max={99}
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
      </div>
    </div>
  );
}
