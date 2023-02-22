import React, { useEffect, useState } from "react";
import * as Classes from "../classes";
import { getClassColor, getClassSkillsFromBuild } from "../utils";

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
    setCustomColor(getClassColor(customClass));
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

  const renderTableRow = (rowData, index) => {
    let cellColor = `linear-gradient(${rowData.color} -50%, #212c2f 60%, #212c2f 10%)`;
    let style = rowData.name === "" ? {} : { backgroundImage: cellColor };

    return (
      <tr
        key={`tr-${index}`}
        className={"ClassTable-row"}
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
      <table className={"ClassTable"}>
        <tbody className={"ClassTable-body"}>
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
          {tableData.map((x, i) => renderTableRow(x, i))}
        </tbody>
      </table>
    );
  };

  let warningText = `Note: Must choose a minimum of 4 ${customClass} skills!`;
  let notEnoughTargetClassSkills = false;
  let emptySlots = props.skills.filter((x) => x.name === "").length;
  if (emptySlots < 4) {
    let targetClassSkills = getClassSkillsFromBuild(
      { skills: props.skills },
      customClass
    );
    if (targetClassSkills.length + emptySlots < 4) {
      notEnoughTargetClassSkills = true;
    }
  }

  return (
    <div style={{ display: props.hide ? "none" : "" }}>
      {renderTable(props.skills)}
      {notEnoughTargetClassSkills && (
        <div className="SkillFrame Warning-box">{warningText}</div>
      )}
    </div>
  );
};

export default CustomBuild;
