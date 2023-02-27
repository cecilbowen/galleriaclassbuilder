import React, { useState } from "react";
import * as Classes from "../facets";
import { getFacetColor } from "../utils";

/*
props:
  skills = class map
  header = class name (optional)
  editBuild = (skill)
*/

const FacetTable = (props) => {
  const [color] = useState(getFacetColor(props.header));

  const renderTableRow = (skill, index) => {
    const tags = skill.tags.map(x => `${x.join(" ")}`);

    return (
      <tr
        key={`tr-${index}`}
        className={"FacetTable-row"}
        onClick={() => props.editBuild(skill)}
        title={`Learn at Level ${skill.level}`}
      >
        <td className={"SkillFrame"}>
          {skill.name}
          {skill.innate && " (Innate)"}
        </td>
        <td className={"SkillFrame"}>{skill.cost}</td>
        <td className={"SkillFrame"}>
          <div className="tags">
            {tags.map(x => <div className="tag">{x}</div>)}
          </div>
          {skill.description}
        </td>
      </tr>
    );
  };

  const renderTable = (skills) => {
    let headerColor = `linear-gradient(${color} -40%, #212c2f 80%, #212c2f 10%)`;

    return (
      <table className={"FacetTable"}>
        <tbody className={"FacetTable-body"}>
          {props.header && (
            <tr className={"FacetTable-header"}>
              <th
                className={"SkillFrame-header"}
                colSpan={"3"}
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

export default FacetTable;
