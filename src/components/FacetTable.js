import React, { useState } from "react";
import { getFacetColor } from "../utils";
import PropTypes from 'prop-types';

const FacetTable = ({ header, editBuild, filterString, filterTags, skills }) => {
  const [color] = useState(getFacetColor(header));

  const fString = filterString.toLowerCase();
  const fTags = filterTags;
  let theSkills = skills;

  if (fTags[0]) {
    theSkills = skills.slice(0).filter(sk => {
      let skTags = sk.tags.filter(tag => tag.includes(fTags[0]));
      skTags = skTags.filter(tag => !fTags[1] || tag.includes(fTags[1]));

      return skTags.length > 0;
    });
  }

  if (fString) {
    theSkills = theSkills.slice(0).filter(x =>
      x.name.toLowerCase().includes(fString) ||
      x.description.toLowerCase().includes(fString)
    );
  }

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
    if (tableSkills.length === 0) {
      return null;
    }

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

  return renderTable(theSkills);
};

FacetTable.propTypes = {
  header: PropTypes.string,
  editBuild: PropTypes.func,
  filterString: PropTypes.string,
  filterTags: PropTypes.array,
  skills: PropTypes.array
};

export default FacetTable;
