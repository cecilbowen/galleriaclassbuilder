import React, { useState } from "react";
import * as Classes from "../classes";
import { getClassColor } from "../utils";

/*
props:
  skills = class map
  header = class name (optional)
  editBuild = (skill)
*/

const ClassTable = (props) => {
  const [color] = useState(getClassColor(props.header));

  const renderTableRow = (skill, index) => {
    return (
      <tr
        key={`tr-${index}`}
        className={"ClassTable-row"}
        onClick={() => props.editBuild(skill)}
        title={`Learn at Level ${Math.max(0, index - 1) * 8}`}
      >
        <td className={"SkillFrame"}>
          {skill.name}
          {skill.innate && " (Innate)"}
        </td>
        <td className={"SkillFrame"}>{skill.description}</td>
      </tr>
    );
  };

  const renderTable = (skills) => {
    let headerColor = `linear-gradient(${color} -40%, #212c2f 80%, #212c2f 10%)`;

    return (
      <table className={"ClassTable"}>
        <tbody className={"ClassTable-body"}>
          {props.header && (
            <tr className={"ClassTable-header"}>
              <th
                className={"SkillFrame-header"}
                colSpan={"2"}
                style={{ backgroundImage: headerColor }}
              >
                {props.header}
              </th>
            </tr>
          )}
          {skills.map((skill, i) => renderTableRow(skill, i))}
        </tbody>
      </table>
    );
  };

  return renderTable(props.skills);
};

export default ClassTable;
