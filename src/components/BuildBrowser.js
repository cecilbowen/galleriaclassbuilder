import React, { useEffect, useState } from "react";
import { getFacetColor, generateBuildString, isJsonString } from "../utils";
import PropTypes from 'prop-types';
import DEFAULT_BUILDS from '../data/default-builds.json';

// name, facet, overwrite build, load build, delete build

const BuildBrowser = ({ currentFacet, currentSkills, currentSoulClarity, onCloseBrowser, onLoadBuild }) => {
  const [builds, setBuilds] = useState([]);
  const [editBuild, setEditBuild] = useState(undefined);
  const [editName, setEditName] = useState("");

  const loadBuildsFromLocalStorage = () => {
    let tempBuilds = DEFAULT_BUILDS;
    const buildObj = localStorage.getItem("builds");

    if (buildObj && isJsonString(buildObj)) {
        tempBuilds = JSON.parse(buildObj);
        console.log("tempBuilds", tempBuilds);
    }

    setBuilds(tempBuilds);
  };

  const updateBuildsToLocalStorage = update => {
    localStorage.setItem("builds", JSON.stringify(update || builds));
  };

  useEffect(() => {
    loadBuildsFromLocalStorage();
  }, []);

  useEffect(() => {
    if (builds && builds.length > 0) {
      updateBuildsToLocalStorage();
    }
  }, [builds]);

  useEffect(() => {
    if (editBuild) {
        setEditName(editBuild.name);
    }
  }, [editBuild]);

  const completeRename = () => {
    if (editName.length > 0) {
        editBuild.name = editName;
        const tempBuilds = builds.slice(0);
        for (const build of tempBuilds) {
            if (build.id === editBuild.id) {
                build.name = editBuild.name;
            }
        }
        setBuilds(tempBuilds);
    }

    setEditBuild(undefined);
  };

  const loadBuild = build => {
    onLoadBuild(build.build);
  };

  const overwriteBuild = build => {
    if (window.confirm(`Are you sure you want to overwrite '${build.name}' with your current skills?`)) {
        const tempBuilds = builds.slice(0);
        for (const b of tempBuilds) {
            if (b.id === build.id) {
                const newBuild = generateBuildString(currentFacet, currentSkills, currentSoulClarity);
                b.build = newBuild;
                b.facet = currentFacet;
            }
        }
        setBuilds(tempBuilds);
    }
  };

  const deleteBuild = build => {
    if (window.confirm(`Are you sure you want to delete '${build.name}' from your saved builds?`)) {
        const tempBuilds = builds.filter(x => x.id !== build.id);
        setBuilds(tempBuilds);
        if (tempBuilds.length === 0) {
            localStorage.setItem("builds", JSON.stringify([]));
        }
    }
  };

  const shareBuild = build => {
    const url = window.location.href.split("/");
    url.pop();
    window.prompt(`CTRL+C to Copy Link\n${build.build}`, `${url.join("/")}/?build=${build.build}`);
  };

  const saveSkillsAsNewBuild = () => {
    if (currentSkills.length === 0) { return; }

    const sortedBuilds = builds.slice(0).sort((a, b) => b.id - a.id);
    const id = ((sortedBuilds[0] || {}).id || -1) + 1;
    const build = generateBuildString(currentFacet, currentSkills, currentSoulClarity);
    const newBuild = {
        id,
        name: `Custom ${currentFacet}`,
        facet: currentFacet,
        build,
    };

    const tempBuilds = builds.slice(0);
    tempBuilds.push(newBuild);
    setBuilds(tempBuilds);
  };

  const renderTableRow = (build, index) => {
    const facet = build.facet;
    const color = getFacetColor(facet);
    const headerColor = `linear-gradient(${color} -40%, #212c2f 80%, #212c2f 10%)`;

    const idCompare = editBuild?.id || 'nintendo';

    return (
        <tr
          key={`tr-browser-${index}`}
          className={"BuildBrowser-row"}
          title={build.description || "Click to rename"}
        >
          <td className={"SkillFrame"} style={{ backgroundImage: headerColor }}>{build.facet}</td>
          <td className={"SkillFrame BuildFrame"} onClick={() => setEditBuild(build)}>
            {idCompare !== build.id && <div style={{ display: "flex", justifyContent: "center" }}>
                {build.name}
                <div className="editHover">📝</div>
            </div>}
            {idCompare === build.id && <input
                className="FilterBar"
                type="text"
                id="buildRename"
                name="buildRename"
                value={editName}
                onChange={ev => setEditName(ev.target.value)}
                onKeyUp={ev => {
                    if (ev.key === "Enter") {
                        completeRename();
                    }
                }}
                onBlur={() => completeRename()}
                placeholder="Enter new build name"
                autoFocus
            />}
          </td>
          <td className={"SkillFrame"} title="Share Build" onClick={() => shareBuild(build)}>🔗</td>
          <td className={"SkillFrame"} title="Overwrite Build" onClick={() => overwriteBuild(build)}>💾</td>
          <td className={"SkillFrame"} title="Load Build" onClick={() => loadBuild(build)}>📂</td>
          <td
            className={"SkillFrame"}
            title="Delete Build"
            onClick={() => deleteBuild(build)}
            style={{ backgroundImage: "linear-gradient(#c42b2b 2%, #3a2727 80%, #212c2f 10%)" }}>🗑️</td>
        </tr>
      );
  };

  const renderTable = tableBuilds => {
    return (
      <table className={"FacetTable"}>
        <tbody className={"FacetTable-body"}>
          <tr className={"FacetTable-header"}>
            <th
              className={"SkillFrame-header"}
              colSpan={6}
              style={{ backgroundImage: `linear-gradient(#000 -5%, rgb(92, 92, 92) 80%, rgb(94, 94, 94) 10%)` }}
            >Build Browser</th>
          </tr>
          {tableBuilds.map((build, i) => renderTableRow(build, i))}
          {currentSkills.length > 0 && <tr onClick={() => saveSkillsAsNewBuild()}>
            <th colSpan={6} className="SkillFrame AddRow" style={{ cursor: "pointer" }}>
                Save Current Skills as a New Build
            </th>
          </tr>}
          <tr onClick={() => onCloseBrowser()} onContextMenu={ev => {
            ev.preventDefault();
            if (window.confirm("Do you want to clear all your saved builds and restore the defaults?")) {
                localStorage.clear();
                setBuilds([]);
                onCloseBrowser();
            }
          }}>
            <th colSpan={1} className="SkillFrame">
                Close Browser {builds.length === 0 && "(Right-click to reset and restore defaults)"}
            </th>
          </tr>
        </tbody>
      </table>
    );
  };

  return renderTable(builds);
};

BuildBrowser.propTypes = {
    currentFacet: PropTypes.string,
    currentSkills: PropTypes.array,
    currentSoulClarity: PropTypes.number,
    onCloseBrowser: PropTypes.func,
    onLoadBuild: PropTypes.func,
};

export default BuildBrowser;
