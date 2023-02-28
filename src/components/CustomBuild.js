import React, { useEffect, useState } from "react";
import { colors, names } from "../facets";
import { getFacetColor } from "../utils";
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
    currentClassIndex++;
    if (currentClassIndex > names.length - 1) {
      currentClassIndex = 0;
    }

    setCustomClass(names[currentClassIndex]);
  };

  const renderCell = (data, style) => {
    return (
      <td style={style || {}} className={"SkillFrame CustomBuild-cell noselect"}>
        {data}
      </td>
    );
  };

  const renderTableRow = (rowData, index, result) => {
    const cellColor = `linear-gradient(${rowData.color} -50%, #212c2f 60%, #212c2f 10%)`;
    const style = rowData.name === "" ? {} : { backgroundImage: cellColor };

    return (
      <tr
        key={`tr-${index}`}
        className={result ? "FacetResultTable-row" : "FacetTable-row"}
        onClick={() => editBuild(rowData)}
      >
        {renderCell(rowData.name + (rowData.innate ? " (Innate)" : ""), style)}
        {renderCell(rowData.description, style)}
      </tr>
    );
  };

  const renderTable = tableData => {
    const headerColor = `linear-gradient(${customColor} -40%, #212c2f 80%, #212c2f 10%)`;

    const cycleTooltip =
      <div style={{ fontSize: "8px", textDecoration: "underline" }}>
        (Click to Cycle Class)
      </div>
    ;

    return (
      <table className={"FacetResultTable"}>
        <tbody className={"FacetResultTable-body"}>
          <tr
            className={"CustomBuild-header"}
            style={{ backgroundImage: headerColor }}
            onClick={() => cycleClass()}
          >
            <th
              className={"SkillFrame-header CustomBuild-cell noselect"}
              colSpan={"2"}
            >
              Custom {customClass} {cycleTooltip}
            </th>
          </tr>
          {tableData.map((x, i) => renderTableRow(x, i, true))}
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
