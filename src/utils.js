import * as Classes from "./classes";

/*
Skill {
  name: string,
  description: string,
  innate: bool,
  color: string,
}
*/

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

export const getClassByNumber = (number) => {
  return Classes.names[number];
};

export const getClassNumber = (className) => {
  return Classes.names.indexOf(className);
};

export const getSkillNumberByName = (name) => {
  for (const s of Object.entries(Classes.SKILL_MAP)) {
    let number = s[0];
    let skill = s[1];

    if (skill.name === name) {
      return number;
    }
  }

  console.warn("getSkillNumberByName() - error", name);
  return 0;
};

export const getSkillByName = (name) => {
  let potentialSkill = Object.entries(Classes.SKILL_MAP).filter(
    (x) => x[1].name === name
  )[0];
  if (potentialSkill) {
    return potentialSkill[1];
  }

  return undefined;
};

export const getSkillByNumber = (number) => {
  return Classes.SKILL_MAP[number];
};

export const getClassFromSkillName = (name) => {
  let potentialSkill = getSkillByName(name);
  if (potentialSkill) {
    return potentialSkill.className;
  }

  console.warn("couldn't get class from skill with name", name);
  return "";
};

export const getClassOrder = (build) => {
  /*
    orders 1 - 100
    ---------------
    single, non-innate skills: 20
    multi, non-innate skills: 21 - 98
    skills including innate: 99
    target class skills: 100
  */

  //first categorize skills by class name
  let classes = {};
  for (const s of build.skills.filter((x) => x.name)) {
    let clsName = getClassFromSkillName(s.name);
    if (!classes[clsName]) {
      classes[clsName] = {
        skills: []
      };
    }

    classes[clsName].skills.push(s);
  }

  //sort skills of each class in factory default order
  for (const obj of Object.entries(classes)) {
    //let key = obj[0];
    let value = obj[1];
    value.skills.sort((a, b) => {
      return a.level - b.level;
    });
  }

  //now sort out easy order checks
  for (const k of Object.keys(classes)) {
    let cls = classes[k];
    if (cls.skills.length === 1) {
      //single skill in class
      if (cls.skills[0].innate) {
        cls.order = 99;
      } else {
        cls.order = 20;
      }
    } else {
      //multiple skills in class
      let next = false;
      let highestSkillLvl = cls.skills[cls.skills.length - 1].level;

      for (const skill of cls.skills) {
        if (!next) {
          if (skill.innate) {
            cls.order = 99;
            next = true;
          } else {
            let skLevel = skill.level;
            if (skLevel === highestSkillLvl) {
              //don't increase order, since this skill is "free"
            } else {
              cls.order = Math.max(cls.order || 20, skLevel);
            }
          }
        }
      }
    }
  }

  let acc = [...Object.entries(classes)].sort((a, b) => {
    if (a[1].order === b[1].order) {
      return a[1].skills.length - b[1].skills.length;
    }

    return a[1].order - b[1].order;
  });

  let classesByOrder = new Map([
    ...acc.filter((elem) => elem[0] !== build.className),
    ...acc.filter((elem) => elem[0] === build.className)
  ]);

  let finalSteps = {
    /*
    className: {
      order: x,
      skills: [{
        name: "",
        level: xx,
      }]
    }
    */
  };

  let skillCount = 0;
  let totalLevel = 0;
  let soulClarity = build.soulClarity;
  for (const c of classesByOrder.entries()) {
    let clsName = c[0];
    let obj = c[1];
    finalSteps[clsName] = finalSteps[clsName] || {
      skills: []
    };

    let skills = [];
    for (const sk of obj.skills) {
      skillCount++;
      let learnedLevel = sk.level;
      let reqLevel = learnedLevel;
      if (obj.order === 20) {
        reqLevel = Math.min(reqLevel, 20);
      }
      skills.push({
        name: sk.name,
        description: sk.description,
        innate: sk.innate,
        color: sk.color,
        level: reqLevel
      });
    }

    let highestLevelSkill = skills[skills.length - 1];
    let conditionalSkills = skills.filter(
      (x) => !x.innate && x.name !== highestLevelSkill.name
    );
    let normSkillLevel = obj.order;
    if (conditionalSkills.length > 0) {
      normSkillLevel = conditionalSkills[conditionalSkills.length - 1].level;
    }

    let transferLevel = Math.max(
      getLevelForSkillTransfer(skillCount),
      normSkillLevel,
      obj.order
    );

    transferLevel = Math.min(99, transferLevel);
    totalLevel += transferLevel;

    //at this point, we need to sort the skills in a specific order
    //we get 1 free skill on transfer, so ideally, this would be highest level one
    //so order should be: [highest level as free skill][rest of list in asc order]

    skills.sort((a, b) => {
      return a.level - b.level;
    });

    skills = [
      ...[highestLevelSkill],
      ...skills.filter((x) => x.name !== highestLevelSkill.name)
    ];

    finalSteps[clsName] = {
      order: obj.order,
      skills,
      transferLevel,
      totalLevel,
      soulClarity
    };

    soulClarity += getSoulClarityIncreaseFromLevel(transferLevel);
    soulClarity = Math.min(99, soulClarity);
  }

  let finalStepsPreSorted = [...Object.entries(finalSteps)].sort((a, b) => {
    return a[1].transferLevel - b[1].transferLevel;
  });

  let finalStepsSorted = new Map([
    ...finalStepsPreSorted.filter((elem) => elem[0] !== build.className),
    ...finalStepsPreSorted.filter((elem) => elem[0] === build.className)
  ]);

  return finalStepsSorted;
};

export const getClassSkillsFromBuild = (build, className) => {
  let allSkills = Classes.getAllClasses()[className];
  let knownSkills = build.skills.map((x) => x.name); //just the names
  let classSkills = allSkills.filter((x) => knownSkills.indexOf(x.name) !== -1);

  return classSkills;
};

export const getSkillLevel = (skill) => {
  if (!skill.className) {
    return 0;
  }

  let className = skill.className;
  let clsSkills = Classes.getAllClasses()[className];
  let index = 0;
  for (let i = 0; i < clsSkills.length; i++) {
    if (clsSkills[i].name === skill.name) {
      index = i;
      break;
    }
  }

  let level = Math.max(0, index - 1) * 8;

  return level;
};

export const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};

const getLevelForSkillTransfer = (numOfSkills) => {
  return 20 + (numOfSkills - 1) * 8;
};

export const getClassColor = (className) => {
  return Classes.colors[Classes.names.indexOf(className)] || "white";
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

export const newBuild = (name) => {
  return {
    name,
    skills: [
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill(),
      Skill()
    ],
    soulClarity: 0,
    className: Classes.names[0]
  };
};
