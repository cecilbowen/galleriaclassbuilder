import * as Facets from "./facets";
import SKILLS from "./data/skills.json";

export const SKILL_LEARN_LEVELS = [
  0, 0, 4, 8, 12, 17, 22, 28, 34, 41, 48, 56, 63, 72, 81
];

export const TAG_DESCRIPTIONS = {
	"Pos.": "Position: Skill only active when in certain battle positions",
	"Def.": "Defense: Skill involves defense in battle",
	"Learn": "Skill is a donum useable in battle",
	"Max": "Skill has a stat or turn limit",
	"Always": "Skill always active",
	"Equip": "Skill only active when meeting certain equipment criteria",
	"Atk.": "Attack: Involves an outgoing attack",
	"Alike Excl.": "Alike Exclude: Only 1 skill from this skill's category can be active at a time",
	"No Stack": "Skill effect doesn't stack",
	"In Battle": "Skill only active in battle",
	"KO": "Skill activates on a KO",
	"Stack": "Skill effect stacks",
	"HP>=": "HP must be >= a certain value for skill to take affect",
	"Luc>=": "Luc must be >= a certain value for skill to take affect",
	"Turn": "Skill activates every turn",
	"HP<=": "HP must be <= a certain value for skill to take affect",
	"HP": "HP must be at a certain value for skill to take affect",
	"End Battle": "Skill activates on battle end",
	"Evade": "Skill activates when player evades an attack",
	"Turn End": "Skill activates on turn end",
	"LUC": "LUC must be at a certain value for skill to take affect",
};

const CLARITY_STOPS = [
  22, 31, 38, 44, 49, 54, 59, 63, 67, 70, 74, 77, 80, 83, 86, 89, 92, 94, 97, 99
];

export const DISCOUNTS = {
  unique: "-100%",
  initial: "-75%",
  class: "-66%",
};

export const DISCOUNT_COLORS = {
  unique: "#ff8dc6",
  initial: "#83f183",
  class: "#fce3d7",
};

const getSoulClarityIncreaseFromLevel = level => {
  if (level > 99) {
    console.warn("Level > 99 passed to getSoulClarityIncreaseFromLevel()");
  }

  for (let i = CLARITY_STOPS.length - 1; i >= 0; i--) {
    const currentStop = CLARITY_STOPS[i];
    if (level > currentStop) {
      return i + 1;
    } else if (level === currentStop) {
      return i;
    }
  }

  return 0;
};

export const getFacetByNumber = number => {
  return Facets.names[number];
};

export const getFacetNumber = facetName => {
  return Facets.names.indexOf(facetName);
};

export const getSkillNumberByName = name => {
  for (const skill of SKILLS) {
    const number = skill.id;

    if (skill.name === name) {
      return number;
    }
  }

  console.warn("getSkillNumberByName() - error", name);
  return -1;
};

export const getSkillByName = name => {
  return SKILLS.filter(x => x.name === name)[0];
};

export const getSkillByNumber = number => {
  number = parseInt(number, 10);
  return SKILLS.filter(x => x.id === number)[0];
};

const getLevelForSkillTransfer = skills => {
  let highest = 0;
  for (const skill of skills) {
    if (skill.innate) {
      return 99;
    }

    highest = Math.max(highest, skill.level);
  }

  return highest;
};

export const getFacetOrder = build => {
  // first categorize skills by facet name
  const facetsMap = {};
  // facets[build.facet] = { skills: [] }
  for (const skill of build.skills) {
    const facetName = skill.facet;
    facetsMap[facetName] = facetsMap[facetName] || {
      skills: [],
      facet: facetName
    };
    facetsMap[facetName].skills.push(skill);
    console.log(`adding ${skill.name} to ${facetName}`);
  }

  console.log("facetsMap", facetsMap);

  // first, set target facet as last
  if (facetsMap[build.facet]) {
    facetsMap[build.facet].order = 999;
  }

  // convert map to array, since end result can have multiple of same facet
  const facets = [];
  for (const [, facet] of Object.entries(facetsMap)) {
    facets.push(facet);
  }

  // sort skills of each facet by level learned
  for (const facet of facets) {
    facet.skills.sort((a, b) => {
      return a.level - b.level;
    });
  }

  // fast-method ordering =====================================

  // next, we want to look at the last learned skill in each facet
  // and sort the facets by the level this skill is learned in ascending order
  const ascLevel = facets.sort((a, b) => {
    const facetALastSkillLevel = a.skills[a.skills.length - 1].level;
    const facetBLastSkillLevel = b.skills[b.skills.length - 1].level;

    return facetALastSkillLevel - facetBLastSkillLevel;
  });

  let hasTargetFacetSkills = false;
  for (let i = 0; i < ascLevel.length; i++) {
    const facet = ascLevel[i];
    const facetName = facet.facet;
    if (facetName !== build.facet) {
      facet.order = i + 360;
      console.log(`\t${facetName} order ${i}`);
    } else {
      hasTargetFacetSkills = true;
    }
  }

  // add empty target facet at end if doesn't exist
  if (!hasTargetFacetSkills) {
    ascLevel.push({
      facet: build.facet,
      skills: [],
    });
  }

  console.log("ascLevel", ascLevel);

  // make highest costing skill in target facet be unique chosen skill (free)
  const targetFacet = ascLevel.filter(x => x.facet === build.facet)[0];
  let moneySkill;
  if (targetFacet) {
    moneySkill = targetFacet.skills.slice(0).filter(x => !x.innate).sort((a, b) => {
      return b.cost - a.cost;
    })[0];
  }
  if (moneySkill) {
    targetFacet.skills = [{
      ...moneySkill,
      learn: true,
      level: 0
    }, ...targetFacet.skills.sort((a, b) => {
      return b.cost - a.cost;
    }).filter(x => x.name !== moneySkill.name)];
  }

  // handle efficient route if active
  let reOrdered = ascLevel.slice(0);
  let appendFacet;
  console.log("build", build);
  if (build.efficient && reOrdered.length > 1) {
    let mostExpensiveFacet = ascLevel[0];
    let secondMostExpensiveFacet;
    let mostCost = 0;
    let secondMostCost = 0;
    if (mostExpensiveFacet) {
      mostExpensiveFacet = mostExpensiveFacet.facet;

      for (const facet of ascLevel) {
        const facetName = facet.facet;
        let facetCostSum = 0;
        for (const sk of facet.skills) {
          if (facetName === targetFacet.facet) {
            if (sk.innate || sk.learn) {
              continue;
            }
          }
          facetCostSum = facetCostSum + sk.cost;
        }

        if (facetCostSum > mostCost) {
          secondMostCost = mostCost;
          mostCost = facetCostSum;
          secondMostExpensiveFacet = mostExpensiveFacet;
          mostExpensiveFacet = facetName;
        }
      }

      console.log(`${mostExpensiveFacet} is the most expensive at ${mostCost}.`);
      console.log(`${secondMostExpensiveFacet} is next expensive at ${secondMostCost}.`);

      if (mostExpensiveFacet === targetFacet.facet) {
        const noClassDiscount = mostCost - Math.floor(mostCost * 0.75) + secondMostCost;
        const classDiscount = mostCost - Math.floor(mostCost * 0.66) + (secondMostCost - Math.floor(secondMostCost * 0.75));

        if (classDiscount < noClassDiscount) {
          console.log("more efficient to get both CLASS and INITIAL discounts");
          mostExpensiveFacet = secondMostExpensiveFacet;
        }
      }

      // put most expensive facet at beginning for the INITIAL discount
      const moneyFacet = ascLevel.filter(x => x.facet === mostExpensiveFacet)[0];
      const uniques = moneyFacet.skills.filter(x => x.innate || x.learn);
      moneyFacet.skills = moneyFacet.skills
        .filter(x => (!x.innate || x.facet !== targetFacet.facet) && !x.learn)
        .sort((a, b) => a.level - b.level);
      moneyFacet.order = 350;
      reOrdered = [moneyFacet, ...ascLevel.filter(x => x.facet !== mostExpensiveFacet)];

      if (mostExpensiveFacet === targetFacet.facet) {
        // so now we need a split of the target facet
        // one at the beginning to get the INITIAL discount, and one at the end
        // the one at the end will just have any unique skills to be learned, if any, since they're free
        appendFacet = {
          // totalLevel, transferLevel, soulClarity
          facet: targetFacet.facet,
          skills: uniques.sort((a, b) => {
            return a.level - b.level;
          }),
          order: 999
        };
      }
    }
  }

  reOrdered.sort((a, b) => {
    return a.order - b.order;
  });

  const steps = [
    ...reOrdered.filter(x => x.facet !== build.facet),
    ...reOrdered.filter(x => x.facet === build.facet)
  ];

  steps.sort((a, b) => {
    return a.order - b.order;
  });

  if (appendFacet) {
    steps.push(appendFacet);
  }

  const finalSteps = [

    /*
    {
      facet: facetName,
      order: x,
      skills: [{
        name: "",
        level: xx,
      }]
    }
    */
  ];

  let totalLevel = 0;
  let soulClarity = build.soulClarity;
  const initialFacet = steps[0].facet;
  const lastFacet = steps[steps.length - 1].facet;
  for (const step of steps) {
    if (!step.facet) { continue; }
    const skills = [];
    for (const skill of step.skills) {
      if (!skill) {
        continue;
      }

      let discount;
      if (skill.facet === lastFacet) {
        discount = "class";
      }
      if (skill.facet === initialFacet) {
        discount = "initial";
      }
      if ((skill.innate || skill.learn) && skill.facet === targetFacet.facet) {
        discount = "unique";
      }

      skills.push({
        name: skill.name,
        description: skill.description,
        facet: skill.facet,
        innate: skill.innate,
        color: skill.color,
        level: skill.level,
        cost: skill.cost,
        learn: skill.learn,
        discount,
      });
    }

    let transferLevel = getLevelForSkillTransfer(skills);

    transferLevel = Math.min(99, transferLevel);
    totalLevel = totalLevel + transferLevel;

    finalSteps.push({
      facet: step.facet,
      order: step.order,
      skills: skills,
      transferLevel: transferLevel,
      totalLevel: totalLevel,
      soulClarity: soulClarity
    });

    soulClarity = soulClarity + getSoulClarityIncreaseFromLevel(transferLevel);
    soulClarity = Math.min(999, soulClarity);
  }

  finalSteps.sort((a, b) => {
    return a.order - b.order;
  });

  for (const step of finalSteps) {
    step.skills.sort((a, b) => {
      return a.level - b.level;
    });
  }

  console.log("finalSteps", finalSteps);
  return finalSteps;
};

export const getFacetSkillsFromBuild = (build, facetName) => {
  const allSkills = Facets.getAllFacets()[facetName];
  const knownSkills = build.skills.map(x => x.name); // just the names
  const facetSkills = allSkills.filter(x => knownSkills.indexOf(x.name) !== -1);

  return facetSkills;
};

export const getSkillLevel = skill => {
  const facetName = skill.facet;
  const facetSkills = Facets.getAllFacets()[facetName];
  let index = 0;
  for (let i = 0; i < facetSkills.length; i++) {
    if (facetSkills[i].name === skill.name) {
      index = i;
      break;
    }
  }

  return SKILL_LEARN_LEVELS[index];
};

export const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};

export const isInExclusiveCategory = (skillAA, skillBB) => {
  const skillA = getSkillByName(skillAA.name);
  const skillB = getSkillByName(skillBB.name);
  return skillA.category && skillA.category === skillB.category;
};

export const getSkillDiscountedCost = skill => {
  let discount = 0;
  switch (skill.discount) {
    case "unique":
      discount = 1;
      break;
    case "initial":
      discount = 0.75;
      break;
    case "class":
      discount = 0.66;
      break;
    default:
      discount = 0;
      break;
  }

  return skill.cost - Math.floor(discount * skill.cost);
};

export const getSkillPointsAddedFromSoulClarity = soulClarity => {
  if (soulClarity <= 99) {
    return soulClarity - 1;
  }

  return Math.floor(soulClarity / 10) - 9 + 98;
};

export const getSoulClarityToHitSkillPoints = (skillPointsTarget, numPetitions) => {
  const withoutWitchPetitions = (skillPointsTarget - 40 - 99) * 10 + 109;
  const with1WitchPetition = (skillPointsTarget - 50 - 99) * 10 + 109;
  const with2WitchPetitions = (skillPointsTarget - 80 - 99) * 10 + 109;

  if (numPetitions === 1) {
    return with1WitchPetition;
  } else if (numPetitions === 2) {
    return with2WitchPetitions;
  }

  return withoutWitchPetitions;
};

export const getFacetColor = facetName => {
  return Facets.colors[Facets.names.indexOf(facetName)] || "white";
};

export const newSkill = (name, description, innate, color) => {
  return {
    name: name || "",
    description: description || "",
    innate: innate || false,
    color: color || "white",
    level: 0
  };
};

export const newBuild = (name, efficient) => {
  return {
    name,
    skills: [],
    soulClarity: 0,
    facet: Facets.names[0],
    efficient
  };
};