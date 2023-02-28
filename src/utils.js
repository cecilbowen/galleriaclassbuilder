import * as Facets from "./facets";
import SKILLS from "./data/skills.json";

/*
Skill {
  name: string,
  description: string,
  innate: bool,
  color: string,
}
*/

export const SKILL_LEARN_LEVELS = [
  0, 0, 4, 8, 12, 17, 22, 28, 34, 41, 48, 56, 63, 72, 81
];

const CLARITY_STOPS = [
  22,
  31,
  38,
  44,
  49,
  54,
  59,
  63,
  67,
  70,
  74,
  77,
  80,
  83,
  86,
  89,
  92,
  94,
  97,
  99
];

export const DISCOUNTS = {
  "unique": "-100%",
  "initial": "-75%",
  "class": "-66%",
};

export const DISCOUNT_COLORS = {
  "unique": "#ff8dc6",
  "initial": "#83f183",
  "class": "#fce3d7",
}

const getSoulClarityIncreaseFromLevel = (level) => {
  if (level > 99) {
    console.warn("Level > 99 passed to getSoulClarityIncreaseFromLevel()");
  }

  for (let i = CLARITY_STOPS.length - 1; i >= 0; i--) {
    let currentStop = CLARITY_STOPS[i];
    if (level > currentStop) {
      return i + 1;
    } else if (level === currentStop) {
      return i;
    }
  }

  return 0;
};

export const getFacetByNumber = (number) => {
  return Facets.names[number];
};

export const getFacetNumber = (facetName) => {
  return Facets.names.indexOf(facetName);
};

export const getSkillNumberByName = (name) => {
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
  number = parseInt(number);
  return SKILLS.filter(x => x.id === number)[0];
};

export const getFacetOrder = build => {
  //first categorize skills by facet name
  let facets = {};
  // facets[build.facet] = { skills: [] }
  for (const skill of build.skills) {
    const facetName = skill.facet;
    facets[facetName] = facets[facetName] || {
      skills: []
    };
    facets[facetName].skills.push(skill);
    console.log(`adding ${skill.name} to ${facetName}`);
  }

  console.log("facets", facets);

  //sort skills of each facet in factory default order
  for (const [, facet] of Object.entries(facets)) {
    facet.skills.sort((a, b) => {
      return a.level - b.level;
    });
  }

  // fast-method ordering =====================================

  // first, set target facet as last
  if (facets[build.facet]) {
    facets[build.facet].order = 999;
  }

  // next, we want to look at the last learned skill in each facet
  // and sort the facets by the level this skill is learned in ascending order
  const ascLevel = [...Object.entries(facets)].sort((a, b) => {
    const facetA = a[1];
    const facetB = b[1];

    const facetALastSkillLevel = facetA.skills[facetA.skills.length - 1].level;
    const facetBLastSkillLevel = facetB.skills[facetB.skills.length - 1].level;

    return facetALastSkillLevel - facetBLastSkillLevel;
  });

  let hasTargetFacetSkills = false;
  for (let i = 0; i < ascLevel.length; i++) {
    const mapEntry = ascLevel[i];
    const facetName = mapEntry[0];
    const facet = mapEntry[1];
    if (facetName !== build.facet) {
      facet.order = i + 360;
      console.log(`\t${facetName} order ${i}`);
    } else {
      hasTargetFacetSkills = true;
    }
  }

  // add empty target facet at end if doesn't exist
  if (!hasTargetFacetSkills) {
    ascLevel.push([build.facet, { skills: [] }]);
  }

  console.log("ascLevel", ascLevel);

  // make highest costing skill in target facet be unique chosen skill (free)
  const targetFacet = ascLevel.filter(x => x[0] === build.facet)[0];
  const moneySkill = targetFacet[1]?.skills.slice(0).filter(x => !x.innate).sort((a, b) => {
    return b.cost - a.cost;
  })[0];
  if (moneySkill) {
    // moneySkill.learn = true;
    targetFacet[1].skills = [{...moneySkill, learn: true, level: 0}, ...targetFacet[1].skills.sort((a, b) => {
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
      mostExpensiveFacet = mostExpensiveFacet[0];

      for (const mapEntry of ascLevel) {
        const facetName = mapEntry[0];
        const facet = mapEntry[1];
        let facetCostSum = 0;
        for (const sk of facet.skills) {
          if (facetName === targetFacet[0]) {
            if (sk.innate || sk.learn) { continue; }
          }
          facetCostSum += sk.cost;
        }

        // console.log(`${facetName} total cost, pre discount: ${facetCostSum}`);
        if (facetCostSum > mostCost) {
          secondMostCost = mostCost;
          mostCost = facetCostSum;
          secondMostExpensiveFacet = mostExpensiveFacet;
          mostExpensiveFacet = facetName;
        }
      }

      console.log(`${mostExpensiveFacet} is the most expensive at ${mostCost}.`);
      console.log(`${secondMostExpensiveFacet} is next expensive at ${secondMostCost}.`);

      if (mostExpensiveFacet === targetFacet[0]) {
        const noClassDiscount = mostCost - Math.floor(mostCost * .75) + secondMostCost;
        const classDiscount = (mostCost - Math.floor(mostCost * .66)) + (secondMostCost - Math.floor(secondMostCost * .75));

        if (classDiscount < noClassDiscount) {
          console.log("more efficient to get both CLASS and INITIAL discounts");
          mostExpensiveFacet = secondMostExpensiveFacet;
        }
      }

      // put most expensive facet at beginning for the INITIAL discount
      const moneyFacet = ascLevel.filter(x => x[0] === mostExpensiveFacet)[0];
      const uniques = moneyFacet[1].skills.filter(x => x.innate || x.learn);
      moneyFacet[1].skills = moneyFacet[1].skills.filter(x => (!x.innate || x.facet !== targetFacet[0]) && !x.learn).sort((a, b) => {
        return a.level - b.level;
      });
      moneyFacet[1].order = 350;
      reOrdered = [moneyFacet, ...ascLevel.filter(x => x[0] !== mostExpensiveFacet)];

      if (mostExpensiveFacet === targetFacet[0]) {
        // so now we need a split of the target facet
        // one at the beginning to get the INITIAL discount, and one at the end
        // the one at the end will just have any unique skills to be learned, if any, since they're free
        appendFacet = {
          //totalLevel, transferLevel, soulClarity
          facet: targetFacet[0],
          skills: uniques.sort((a, b) => {
            return a.level - b.level;
          }),
          order: 999
        }
      }
    }
  }

  reOrdered.sort((a, b) => {
    return a[1].order - b[1].order;
  });

  let facetsByOrder = new Map([
    ...reOrdered.filter((elem) => elem[0] !== build.facet),
    ...reOrdered.filter((elem) => elem[0] === build.facet)
  ]);

  console.log("facetsByOrder", facetsByOrder);

  const steps = [];
  for (const [facetName, s] of facetsByOrder.entries()) {
    s.facet = facetName;
    steps.push(s);
  }
  steps.sort((a, b) => {
    return a.order - b.order;
  });

  if (appendFacet) {
    steps.push(appendFacet);
  }

  let finalSteps = [
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

  console.log("daSteps", steps);
  let totalLevel = 0;
  let soulClarity = build.soulClarity;
  const initialFacet = steps[0].facet;
  const lastFacet = steps[steps.length - 1].facet;
  for (const step of steps) {
    let skills = [];
    for (const skill of step.skills) {
      if (!skill) continue;

      let discount;
      if (skill.facet === lastFacet) {
        discount = "class";
      }
      if (skill.facet === initialFacet) {
        discount = "initial";
      }
      if ((skill.innate || skill.learn) && skill.facet === targetFacet[0]) {
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
    totalLevel += transferLevel;

    finalSteps.push({
      facet: step.facet,
      order: step.order,
      skills,
      transferLevel,
      totalLevel,
      soulClarity
    });

    soulClarity += getSoulClarityIncreaseFromLevel(transferLevel);
    soulClarity = Math.min(99, soulClarity);
  }

  let finalStepsPreSorted = finalSteps.sort((a, b) => {
    return a.order - b.order;
  });

  for (const step of finalStepsPreSorted) {
    step.skills.sort((a, b) => {
      return a.level - b.level;
    });
  }

  console.log("finalSteps", finalStepsPreSorted);
  return finalStepsPreSorted;
};

export const getFacetSkillsFromBuild = (build, facetName) => {
  let allSkills = Facets.getAllFacets()[facetName];
  let knownSkills = build.skills.map((x) => x.name); //just the names
  let facetSkills = allSkills.filter((x) => knownSkills.indexOf(x.name) !== -1);

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

export const isJsonString = (str) => {
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
  console.log("skillA cat, skillB cat", skillA.category, skillB.category);
  return skillA.category && skillA.category === skillB.category;
};

export const getSkillDiscountedCost = skill => {
  let discount = 0;
  switch (skill.discount) {
    case "unique": discount = 1; break;
    case "initial": discount = .75; break;
    case "class": discount = .66; break;
    default: discount = 0; break;
  }

  return skill.cost - Math.floor(discount * skill.cost);
};

export const getSkillPointsAddedFromSoulClarity = soulClarity => {
  if (soulClarity <= 99) {
    return soulClarity - 1;
  }

  return Math.floor(soulClarity / 10) - 9 + 98;
}

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

export const getFacetColor = (facetName) => {
  return Facets.colors[Facets.names.indexOf(facetName)] || "white";
};

export const Skill = (name, description, innate, color) => {
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
