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
    skill.description = skill.correctedDescription || skill.description;
  }

  const tags = [];
  for (const skill of SKILLS) {
    for (const tag of skill.tags) {
      tags.push(tag[0]);
    }
  }
  tags.sort((a, b) => a - b);
  console.log('tags', Array.from(new Set(tags)));
};

export const getAllFacets = () => {
  const allFacets = {};
  let facetName;
  for (const skill of SKILLS) {
    if (!facetName || facetName !== skill.facet) {
      facetName = skill.facet;
    }
    allFacets[facetName] = allFacets[facetName] || [];
    allFacets[facetName].push(skill);
  }

  return allFacets;
};
