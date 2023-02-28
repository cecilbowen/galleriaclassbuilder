import React, { useState } from "react";
import { getFacetColor } from "../utils";
import PropTypes from 'prop-types';

const FacetTable = ({ header, editBuild, skills }) => {
  const [color] = useState(getFacetColor(header));

  const renderTableRow = (skill, index) => {
    const tags = skill.tags.map(x => `${x.join(" ")}`);

    return (
      <tr
        key={`tr-${index}`}
        className={"FacetTable-row"}
        onClick={() => editBuild(skill)}
        title={`Learn at Level ${skill.level}`}
      >
        <td className={"SkillFrame"}>
          {skill.name}
          {skill.innate && " (Innate)"}
        </td>
        <td className={"SkillFrame"}>{skill.cost}</td>
        <td className={"SkillFrame"}>
          <div className="tags">
            {tags.map((x, i) => <div key={`skillframe-tag-${i}`} className="tag">{x}</div>)}
          </div>
          {skill.description}
        </td>
      </tr>
    );
  };

  const renderTable = tableSkills => {
    const headerColor = `linear-gradient(${color} -40%, #212c2f 80%, #212c2f 10%)`;

    return (
      <table className={"FacetTable"}>
        <tbody className={"FacetTable-body"}>
          {header &&
            <tr className={"FacetTable-header"}>
              <th
                className={"SkillFrame-header"}
                colSpan={"3"}
                style={{ backgroundImage: headerColor }}
              >
                {header}
              </th>
            </tr>
          }
          {tableSkills.map((skill, i) => renderTableRow(skill, i))}
        </tbody>
      </table>
    );
  };

  return renderTable(skills);
};

FacetTable.propTypes = {
  header: PropTypes.string,
  editBuild: PropTypes.func,
  skills: PropTypes.array
};

export default FacetTable;
