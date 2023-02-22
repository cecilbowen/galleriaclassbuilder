import React, { useEffect, useState } from "react";
import * as Classes from "../classes";
import { getClassColor } from "../utils";

/*
props:
  steps = finalStepsSorted from getClassOrder(build) in utils.js
*/

const Directions = (props) => {
  const renderCell = (data) => {
    return <td className={"Directions-cell"}>{data}</td>;
  };

  const renderTableRow = (rowData, index) => {
    let className = rowData[0];
    let info = rowData[1]; //order, skills, transferLevel
    let skills = info.skills; //name, description, innate, color, level

    let ret = [];

    let clsStats = (
      <div style={{ fontSize: "8px" }}>Soul Clarity: {info.soulClarity}</div>
    );

    let color = getClassColor(className);
    let headerColor = `linear-gradient(${color} -40%, #212c2f 80%, #212c2f 10%)`;

    ret.push(
      <tr key={`${className}-class`}>
        <td
          className={"SkillFrame"}
          style={{
            backgroundImage: headerColor
          }}
        >
          {index === 0 && "Start at "}
          {className}: {clsStats}
          {rowData.soulClarity}
        </td>
      </tr>
    );

    let sameRow = [];
    let numOfCols = 1;
    for (let i = 0; i < skills.length; i++) {
      let s = skills[i];
      let autoLearn = i === 0 ? "on soul transfer" : `at level ${s.level}`;

      let styledSkillName = (
        <div style={{ textDecoration: "underline" }}>{s.name}</div>
      );

      let alreadyKnow = `${s.name} is innate (already learned)`;

      sameRow.push(
        <td key={`${className}-skill-${i}`} className={"Directions-cell"}>
          {s.innate ? alreadyKnow : `Learn ${s.name} ${autoLearn}`}
        </td>
      );
      numOfCols = i;
    }

    ret.push(
      <tr key={`${className}-sameRow`} colSpan={"" + numOfCols}>
        {sameRow}
      </tr>
    );

    //if last one
    if (index === [...props.steps.entries()].length - 1) {
      //let leftoverClarity = 99 - rowData.soulClarity;

      return ret;
    }

    ret.push(
      <tr key={`${className}-transfer`} style={{ fontWeight: "bold" }}>
        <td className={"Directions-SoulTransfer"}>
          Soul transfer at level {info.transferLevel}
        </td>
      </tr>
    );

    return ret;
  };

  const renderTable = (tableData) => {
    return (
      <table className={"Directions"}>
        <tbody className={"Directions-body"}>
          {[...tableData.entries()].map((x, i) => renderTableRow(x, i))}
        </tbody>
      </table>
    );
  };

  return (
    <div
      className={"Directions-BG"}
      style={{ display: props.hide ? "none" : "" }}
    >
      {props.steps && renderTable(props.steps)}
    </div>
  );
};

export default Directions;
