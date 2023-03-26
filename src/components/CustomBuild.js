import React, { useEffect, useState } from "react";
import { colors, names } from "../facets";
import { getFacetColor, getFacetAltByName, getSkillByName } from "../utils";
import PropTypes from 'prop-types';

const CustomBuild = ({ changeClass, facetName, editBuild, hide, skills }) => {
  const [customClass, setCustomClass] = useState(names[0]);
  const [customColor, setCustomColor] = useState(colors[0]);

  useEffect(() => {
    if (customClass !== facetName) {
      setCustomClass(facetName);
    }
  }, [facetName]);

  useEffect(() => {
    setCustomColor(getFacetColor(customClass));
    changeClass(customClass);
  }, [customClass]);

  const cycleClass = () => {
    let currentClassIndex = names.indexOf(customClass);
    const altClassSet = currentClassIndex > names.length / 2 - 1;
    currentClassIndex++;
    if (altClassSet === true && currentClassIndex > names.length - 1) {
      currentClassIndex = names.length / 2;
    } else if (currentClassIndex === names.length / 2) {
      currentClassIndex = 0;
    }

    setCustomClass(names[currentClassIndex]);
  };

  const toggleAltFacet = () => {
    setCustomClass(getFacetAltByName(customClass));
  };

  const renderCell = (data, style, skill) => {
    let tags = [];

    if (skill) {
      skill = getSkillByName(skill.name);
      tags = skill.tags.map(x => `${x.join(" ")}`);
    }

    const title = "Right-click to find the skill's table on the left.";

    return (
      <td style={style || {}} className={"SkillFrame CustomBuild-cell noselect"}
        title={title}
      >
        {skill && <div className="tags">
            {tags.map((x, i) => <div key={`skillframe-tag-${i}`} className="tag">{x}</div>)}
          </div>}
        {data}
      </td>
    );
  };

  const renderTableRow = (rowSkill, index, result) => {
    const cellColor = `linear-gradient(${rowSkill.color} -50%, #212c2f 60%, #212c2f 10%)`;
    const style = rowSkill.name === "" ? {} : { backgroundImage: cellColor };

    return (
      <tr
        key={`tr-${index}`}
        className={result ? "FacetResultTable-row" : "FacetTable-row"}
        onClick={() => editBuild(rowSkill)}
        onContextMenu={ev => {
          ev.preventDefault();
          const header = [...document.getElementsByClassName("SkillFrame-header")]
            .filter(x => x.innerText.toLowerCase() === rowSkill.facet.toLowerCase())[0];

          if (header) {
            header.scrollIntoView({ behavior: "smooth", block: "center" });
          }

          return false;
        }}
      >
        {renderCell(rowSkill.name + (rowSkill.innate ? " (Innate)" : ""), style)}
        {renderCell(rowSkill.description, {}, rowSkill)}
      </tr>
    );
  };

  const renderTable = tableSkills => {
    const headerColor = `linear-gradient(${customColor} -40%, #212c2f 80%, #212c2f 10%)`;

    const cycleTooltip =
      <div style={{ fontSize: "8px", textDecoration: "underline" }}>
        (Click to Cycle Facet | Right click to Toggle Type)
      </div>
    ;

    let guideRow = <tr>
      <td className="SkillFrame GuideRow" colSpan={2}>Add Skills from the Tables on the Left</td>
    </tr>;

    if (tableSkills.length > 0) {
      guideRow = <tr>
        <td className="SkillFrame GuideRow" colSpan={2}>Click on Added Skills Above to Remove Them</td>
      </tr>;
    }

    return (
      <table className={"FacetResultTable"}>
        <tbody className={"FacetResultTable-body"}>
          <tr
            className={"CustomBuild-header"}
            style={{ backgroundImage: headerColor }}
            onClick={() => cycleClass()}
            onContextMenu={e => {
              e.preventDefault();
              toggleAltFacet();
            }}
          >
            <th
              className={"SkillFrame-header CustomBuild-cell noselect"}
              colSpan={"2"}
            >
              Custom {customClass} {cycleTooltip}
            </th>
          </tr>
          {tableSkills.map((x, i) => renderTableRow(x, i, true))}
          {guideRow}
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ display: hide ? "none" : "" }}>
      {renderTable(skills)}
    </div>
  );
};

CustomBuild.propTypes = {
  changeClass: PropTypes.func,
  facetName: PropTypes.string,
  editBuild: PropTypes.func,
  hide: PropTypes.bool,
  skills: PropTypes.array
};

export default CustomBuild;
