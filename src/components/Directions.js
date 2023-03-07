import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getFacetColor, getSkillByName, DISCOUNT_COLORS, getSkillPointsAddedFromSoulClarity,
  getSoulClarityToHitSkillPoints, getSoulTransfersToReachSoulClarity,
  getSkillDiscountedCost, isInExclusiveCategory, DISCOUNTS } from "../utils";

const Directions = ({ hide, steps }) => {
  const [skills, setSkills] = useState([]);
  const [skillsChecked, setSkillsChecked] = useState(new Map());
  const [skillStars, setSkillStars] = useState(0); // # of witch petitions used to increase skill points (max 2)

  useEffect(() => {
    if (skillStars > 2) {
      setSkillStars(0);
    }
  }, [skillStars]);

  useEffect(() => {
    if (steps) {
      const tempSkills = [];
      const tempChecked = new Map();
      for (const step of steps) {
        for (const skill of step.skills) {
          let checked = skillsChecked.get(skill.name) === undefined ? true : skillsChecked.get(skill.name);

          for (const tSkill of tempSkills) {
            if (isInExclusiveCategory(skill, tSkill)) {
              checked = false;
              skill.checked = false;
              break;
            }
          }

          tempChecked.set(skill.name, checked);

          const newSkill = {
            ...skill,
            checked
          };
          tempSkills.push(newSkill);
        }
      }

      setSkills(tempSkills);
      setSkillsChecked(tempChecked);
    }
  }, [steps]);

  const toggleSkill = skill => {
    const tempChecked = new Map(skillsChecked);
    const checked = tempChecked.get(skill.name);

    if (!checked) {
      // disable alike exclusive skills in same category
      for (const sk of skills) {
        if (sk.name === skill.name) { continue; }
        if (isInExclusiveCategory(skill, sk)) {
          sk.checked = false;
          tempChecked.set(sk.name, false);
        }
      }
    }

    skill.checked = !checked;
    tempChecked.set(skill.name, !checked);
    setSkillsChecked(tempChecked);
  };

  const renderStep = (step, index) => {
    const className = step.facet;
    const rowSkills = step.skills; // name, description, innate, color, level

    const ret = [];

    const clsStats =
      <div style={{ fontSize: "8px" }}>Soul Clarity: {step.soulClarity}</div>
    ;

    const color = getFacetColor(className);
    const headerColor = `linear-gradient(${color} -40%, #212c2f 80%, #212c2f 10%)`;

    ret.push(
      <div key={`${className}-class`}>
        <div
          className={"SkillFrame SkillFramePadding"}
          style={{
            backgroundImage: headerColor
          }}
        >
          {index === 0 && "Start at "}
          {className}: {clsStats}
        </div>
      </div>
    );

    ret.push(<div style={{ margin: "5px 0px 0px 0px" }} className="FlexBreak" />);

    const sameRow = [];
    for (let i = 0; i < rowSkills.length; i++) {
      const s = rowSkills[i];
      const autoLearn = s.learn ? "on soul transfer" : `at level ${s.level}`;
      const alreadyKnow = `${s.name} is innate (already learned)`;

      sameRow.push(
        <div key={`${className}-skill-${i}`} className={"Directions-cell"}>
          {s.innate ? alreadyKnow : `Learn ${s.name} ${autoLearn}`}
        </div>
      );
    }

    ret.push(
      <div key={`${className}-sameRow`} className="SkillLevelSteps">
        {sameRow}
      </div>
    );

    // if last one
    if (index === steps.length - 1) {
      return ret;
    }

    ret.push(
      <div key={`${className}-transfer`} className={"Directions-SoulTransfer"}>
        Soul transfer at level {step.transferLevel}
      </div>
    );

    ret.push(<div className="FlexBreak" />);
    ret.push(
      <div className="FancyDividerDiv">
        <div className="FancyDivider" />
      </div>
    );

    return <div className="StepsContainer">
      {ret}
    </div>;
  };

  const renderSteps = theSteps => {
    return (
      <div className={"Directions"}>
        <div className={"Directions-body"}>
          {theSteps.map((x, i) => renderStep(x, i))}
        </div>
      </div>
    );
  };

  const renderSkillTableRow = (skill, index) => {
    const rawSkill = getSkillByName(skill.name);
    const color = skill.checked ? "#fff1a9" : "white";
    const tags = rawSkill.tags.map(x => `${x.join(" ")}`);
    const title = `${rawSkill.facet}: [${tags}] ${rawSkill.description}`;

    return (
      <div key={`skill-table-${index}`} className="SkillFrame SkillPointTableItem" title={title}>
        <div className="SkillCheck" onClick={() => toggleSkill(skill)}>{skill.checked ? "✔" : ""}</div>
        <div
          style={{ background: `linear-gradient(${rawSkill.orbColor}, ${rawSkill.orbColor}, white)` }}
          className="SkillOrb noselect">か</div>
        <div style={{ color }} className="SkillText">{skill.name}</div>
        <div className="DiscountTag">
          <div style={{ position: "relative", width: "2px" }}>
            <div className="CostTag">{getSkillDiscountedCost(skill.cost, skill.discount)}</div>
          </div>
          {skill.discount &&
            <div
              style={{ color: DISCOUNT_COLORS[skill.discount] }}
              className="DiscountTag-name">{skill.discount}</div>
          }
          {skill.discount && <div className="DiscountTag-number">{DISCOUNTS[skill.discount]}</div>}
        </div>
      </div>
    );
  };

  const renderSkillTable = () => {
    const soulClarity = steps[steps.length - 1].soulClarity;
    const addedSkillPoints = getSkillPointsAddedFromSoulClarity(soulClarity);
    const bonusSkillPoints = skillStars === 1 ? 10 : skillStars === 2 ? 40 : 0;
    const maxSkillPoints = 40 + addedSkillPoints + bonusSkillPoints;
    let skillPoints = 0;
    for (const skill of skills) {
      if (!skill.checked) { continue; }
      skillPoints = skillPoints + getSkillDiscountedCost(skill.cost, skill.discount);
    }

    const targetSoulClarity = getSoulClarityToHitSkillPoints(skillPoints, skillStars);
    const targetSoulClarityWith1 = getSoulClarityToHitSkillPoints(skillPoints, 1);
    const targetSoulClarityWith2 = getSoulClarityToHitSkillPoints(skillPoints, 2);

    console.log(`you need ${targetSoulClarity} soul clarity to hit ${skillPoints} skill points.`);
    let soulClarityGoal = "";
    let subGoal = "";
    const subGoals = [];
    if (targetSoulClarity < 0) {
      soulClarityGoal = `Required skill points exceed max (268)!`;
      if (targetSoulClarityWith1 >= 0) {
        subGoal = "1 Witch Petition Required (click ★)";
      }
      if (targetSoulClarityWith2 >= 0) {
        subGoal = "2 Witch Petitions Required (click ★)";
      }
    } else if (targetSoulClarity > soulClarity) {
      const soulTransfersNeeded = getSoulTransfersToReachSoulClarity(soulClarity, targetSoulClarity);
      soulClarityGoal = `Target Soul Clarity: ${targetSoulClarity}`;
      if (soulTransfersNeeded.level99Transfers > 0) {
        const s = soulTransfersNeeded.level99Transfers > 1 ? "s" : "";
        subGoals.push(`${soulTransfersNeeded.level99Transfers} level 99 soul transfer${s}`);
      }

      if (soulTransfersNeeded.finalTransferLevel > 0) {
        subGoals.push(`1 level ${soulTransfersNeeded.finalTransferLevel} soul transfer`);
      }
      subGoal = `Transfers Needed: ${subGoals.join(" + ")}`;
    }

    return (
      <div className="SkillPointDisplay">
        <div style={{ color: 'white' }}>
          {soulClarityGoal}<br />{subGoal}
        </div>
        <div className="SkillFrame SkillHeader noselect">
          Skill Points {skillPoints} / {maxSkillPoints}
          <span
            onClick={() => setSkillStars(skillStars + 1)}
            style={{ color: skillStars > 0 ? "gold" : "white" }}
            className="Star">★</span>
          <span
            onClick={() => setSkillStars(skillStars + 1)}
            style={{ color: skillStars > 1 ? "gold" : "white" }}
            className="Star">★</span>
        </div>
        <div className="SkillPointTable">
          {skills.map((x, i) => renderSkillTableRow(x, i))}
        </div>
      </div>
    );
  };

  return (
    <div className={"Directions-BG"} style={{ display: hide ? "none" : "" }}>
      {steps && renderSteps(steps)}
      {steps && renderSkillTable()}
    </div>
  );
};

Directions.propTypes = {
  hide: PropTypes.bool,
  steps: PropTypes.array
};

export default Directions;
