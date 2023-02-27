import React, { useEffect, useState } from "react";
import * as Classes from "../facets";
import { getFacetColor, getFacetSkillsFromBuild } from "../utils";

/*
props:
  customClass - build class name
  editBuild - add/remove skill func
  changeClass - change class func
  skills - build skills
  hide - whether or not to show
*/

const CustomBuild = (props) => {
  const [customClass, setCustomClass] = useState(Classes.names[0]);
  const [customColor, setCustomColor] = useState(Classes.colors[0]);

  useEffect(() => {
    if (customClass !== props.customClass) {
      setCustomClass(props.customClass);
    }
  }, [props.customClass]);

  useEffect(() => {
    setCustomColor(getFacetColor(customClass));
    props.changeClass(customClass);
  }, [customClass]);

  const cycleClass = () => {
    let currentClassIndex = Classes.names.indexOf(customClass);
    currentClassIndex++;
    if (currentClassIndex > Classes.names.length - 1) {
      currentClassIndex = 0;
    }

    setCustomClass(Classes.names[currentClassIndex]);
  };

  const renderCell = (data, style) => {
    return (
      <td style={style || {}} className={"SkillFrame CustomBuild-cell"}>
        {data}
      </td>
    );
  };

  const renderTableRow = (rowData, index, result) => {
    let cellColor = `linear-gradient(${rowData.color} -50%, #212c2f 60%, #212c2f 10%)`;
    let style = rowData.name === "" ? {} : { backgroundImage: cellColor };

    return (
      <tr
        key={`tr-${index}`}
        className={result ? "FacetResultTable-row" : "FacetTable-row"}
        onClick={() => props.editBuild(rowData)}
      >
        {renderCell(rowData.name + (rowData.innate ? " (Innate)" : ""), style)}
        {renderCell(rowData.description, style)}
      </tr>
    );
  };

  const renderTable = (tableData) => {
    let headerColor = `linear-gradient(${customColor} -40%, #212c2f 80%, #212c2f 10%)`;

    let cycleTooltip = (
      <div style={{ fontSize: "8px", textDecoration: "underline" }}>
        (Click to Cycle Class)
      </div>
    );

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
    <div style={{ display: props.hide ? "none" : "" }}>
      {renderTable(props.skills)}
    </div>
  );
};

export default CustomBuild;
