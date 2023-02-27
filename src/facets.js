import { getFacetColor, getSkillLevel } from "./utils";
import SKILLS from "./data/skills.json";

export const names = [
  "Magia Maid",
  "Aster Crow",
  "Shinomashira",
  "Theatrical Star",
  "Gothic Coppelia",
  "Fable Tricker",
  "Am Alchymia",
  "Prima Reaper",
  "Peer Fortress",
  "Wonder Corsair",
  "Rapid Venator",
  "Famyu Seeker",
  "Magia Concieri",
  "Aster Ashe",
  "Shinobushi",
  "Theatrical Dolce",
  "Gothic Gratonia",
  "Fable Eclipse",
  "Am Altea",
  "Prima Cupido",
  "Peer Chariot",
  "Wonder Viande",
  "Rapid Raptor",
  "Famyu Chaser"
];

export const colors = [
  "salmon",
  "lightblue",
  "tan",
  "silver",
  "gold",
  "lightgreen",
  "hotpink",
  "violet",
  "yellow",
  "blue",
  "brown",
  "maroon",
  "green",
  "orange",
  "grey",
  "firebrick",
  "fuchsia",
  "honeydew",
  "khaki",
  "lavender",
  "orchid",
  "olive",
  "navy",
  "sienna"
];

export const initSkills = () => {
  for (const skill of SKILLS) {
    skill.color = getFacetColor(skill.facet);
    skill.level = getSkillLevel(skill);
  }
};

export const getAllFacets = () => {
  let allFacets = {};
  var facetName;
  for (const skill of SKILLS) {
    if (!facetName || facetName !== skill.facet) {
      facetName = skill.facet;
    }
    allFacets[facetName] = allFacets[facetName] || [];
    allFacets[facetName].push(skill);
  }

  return allFacets;
};
