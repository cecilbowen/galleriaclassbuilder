import { getClassColor, getSkillLevel } from "./utils";

export const SKILL_MAP = {
  "0": {
    name: "War Spire",
    description: "[Lance] Crit Rate +50",
    className: "Aster Knight",
    innate: true
  },
  "1": {
    name: "Stubbornness",
    description: "Survive fatal damage with 1 HP, once per battle",
    className: "Aster Knight",
    innate: true
  },
  "2": {
    name: "Startle Recovery",
    description: "Recover faster from Startle Status",
    className: "Aster Knight",
    innate: false
  },
  "3": {
    name: "Star Spirit",
    description: "Enemy ambushes inflict Startle less often",
    className: "Aster Knight",
    innate: false
  },
  "4": {
    name: "Pierce Res. Up",
    description: "Improve Pierce resistance",
    className: "Aster Knight",
    innate: false
  },
  "5": {
    name: "Tenacious Strength",
    description: "Improve Strength. Affects Attack power",
    className: "Aster Knight",
    innate: false
  },
  "6": {
    name: "Lucky Star",
    description: "Greatly increases Luck",
    className: "Aster Knight",
    innate: false
  },
  "7": {
    name: "Lance Master",
    description: "Improve lance proficiency",
    className: "Aster Knight",
    innate: false
  },
  "8": {
    name: "Startle Res. Up",
    description: "Improve Startle resistance",
    className: "Aster Knight",
    innate: false
  },
  "9": {
    name: "Armor-Piercing",
    description: "Ignore 15% of enemy's defense when attacking",
    className: "Aster Knight",
    innate: false
  },
  "10": {
    name: "Adrenaline Rush",
    description: "Stun Chance +25 when HP < 1%",
    className: "Aster Knight",
    innate: false
  },
  "11": {
    name: "Iron-Clad Fortune",
    description: "Guard Rate +15%, only if Fortunate",
    className: "Aster Knight",
    innate: false
  },
  "12": {
    name: "Donum Master",
    description:
      "Increase Donum damage 20%, (nerfed to 13% on JP update, display error?)",
    className: "Marginal Maze",
    innate: true
  },
  "13": {
    name: "Knockout",
    description:
      "25% chance to perform 2-5 additional attacks against stunned enemies",
    className: "Marginal Maze",
    innate: true
  },
  "14": {
    name: "Abyss Recovery",
    description: "Recover faster from Abyss status",
    className: "Marginal Maze",
    innate: false
  },
  "15": {
    name: "Donum Efficiency",
    description: "Reduces Coven's DP consumption by 25%",
    className: "Marginal Maze",
    innate: false
  },
  "16": {
    name: "Flame Res. Up",
    description: "Improve Flame resistance",
    className: "Marginal Maze",
    innate: false
  },
  "17": {
    name: "Tenacious Donum",
    description: "Improve DMP. Affects Donum power",
    className: "Marginal Maze",
    innate: false
  },
  "18": {
    name: "Eclipse",
    description: "[Lamp] Ignore 25% of enemy's defense when attacking",
    className: "Marginal Maze",
    innate: false
  },
  "19": {
    name: "Lamp Master",
    description: "Improve lamp proficiency",
    className: "Marginal Maze",
    innate: false
  },
  "20": {
    name: "Abyss Res. Up",
    description: "Improve Abyss resistance",
    className: "Marginal Maze",
    innate: false
  },
  "21": {
    name: "Squishy Body",
    description: "All incoming damage is mitigated when HP is full",
    className: "Marginal Maze",
    innate: false
  },
  "22": {
    name: "Master Masochist",
    description: "DEF +15% each time you're hit (Caps at DEF+105%)",
    className: "Marginal Maze",
    innate: false
  },
  "23": {
    name: "Body Touch",
    description: "25% chance to confuse enemy attacker when HP is full",
    className: "Marginal Maze",
    innate: false
  },
  "24": {
    name: "Dual Blade Expert",
    description:
      "50% chance to strike with both weapons. (S+ proficiency req.)",
    className: "Shinobushi",
    innate: true
  },
  "25": {
    name: "Shadowstep",
    description: "Enemy attacks more likely to miss you",
    className: "Shinobushi",
    innate: true
  },
  "26": {
    name: "Poison Recovery",
    description: "Recover faster from Poison Status",
    className: "Shinobushi",
    innate: false
  },
  "27": {
    name: "Underhanded Strike",
    description: "Crit +75 when attacking a stunned enemy",
    className: "Shinobushi",
    innate: false
  },
  "28": {
    name: "Blunt Res. Up",
    description: "Improve Blunt resistance",
    className: "Shinobushi",
    innate: false
  },
  "29": {
    name: "Tenacious Fingers",
    description: "Improve Dex. Affects Hit and Crit",
    className: "Shinobushi",
    innate: false
  },
  "30": {
    name: "Curse Share",
    description: "When affected by status, attacks deal an extra 100 damage",
    className: "Shinobushi",
    innate: false
  },
  "31": {
    name: "Sword Master",
    description: "Improve sword proficiency",
    className: "Shinobushi",
    innate: false
  },
  "32": {
    name: "Poison Res. Up",
    description: "Improve Poison resistance",
    className: "Shinobushi",
    innate: false
  },
  "33": {
    name: "Shadow Cowardice",
    description: "Enemies less likely to target you when HP < 10%",
    className: "Shinobushi",
    innate: false
  },
  "34": {
    name: "Bypass Armor",
    description: "Your attacks ignore 25% of enemy's Defense when HP is full",
    className: "Shinobushi",
    innate: false
  },
  "35": {
    name: "Blade Deflection",
    description: "When attacked, decrease enemy Attack by 20% when HP is full",
    className: "Shinobushi",
    innate: false
  },
  "36": {
    name: "Siege Shield",
    description: "Recover 5% max HP when using Defend/Fortify Coven",
    className: "Peer Fortress",
    innate: true
  },
  "37": {
    name: "Guardian's Soul",
    description:
      "Base 10% chance to intercept attacks. Increases 15% for each katar",
    className: "Peer Fortress",
    innate: true
  },
  "38": {
    name: "Stench Recovery",
    description: "Recover faster from Stench status",
    className: "Peer Fortress",
    innate: false
  },
  "39": {
    name: "Tortoise Shell",
    description:
      "Increase potency of Defend/Fortify Coven by 5% per consecutive use",
    className: "Peer Fortress",
    innate: false
  },
  "40": {
    name: "Slash Res. Up",
    description: "Improve Slash resistance",
    className: "Peer Fortress",
    innate: false
  },
  "41": {
    name: "Tenacious Stamina",
    description: "Improve Constitution. Affects Defense power",
    className: "Peer Fortress",
    innate: false
  },
  "42": {
    name: "Mega Bash",
    description:
      "[Katar] +Stun chance next turn when damaged after Defend/Fortify",
    className: "Peer Fortress",
    innate: false
  },
  "43": {
    name: "Katar Master",
    description: "Improve katar proficiency",
    className: "Peer Fortress",
    innate: false
  },
  "44": {
    name: "Stench Res. Up",
    description: "Improve Stench resistance",
    className: "Peer Fortress",
    innate: false
  },
  "45": {
    name: "Unbreakable",
    description: "Guard rate +10%",
    className: "Peer Fortress",
    innate: false
  },
  "46": {
    name: "Iron Wall",
    description: "Guard rate +20% when HP is full",
    className: "Peer Fortress",
    innate: false
  },
  "47": {
    name: "Heavy Smasher",
    description: "[Hammer] Stun chance +25, but Action speed slightly reduced",
    className: "Peer Fortress",
    innate: false
  },
  "48": {
    name: "Love, Hate, Love",
    description: "Doubles all Rapport gains and losses",
    className: "Theatrical Star",
    innate: true
  },
  "49": {
    name: "Healing Chime",
    description: "[Bell] Recover 3% max HP each turn and 20% when battle ends",
    className: "Theatrical Star",
    innate: true
  },
  "50": {
    name: "Illusion Recovery",
    description: "Recover faster from Illusion status",
    className: "Theatrical Star",
    innate: false
  },
  "51": {
    name: "Cursed Chime",
    description:
      "[Bell] Increase Resonance chance and slightly draw enemy attention",
    className: "Theatrical Star",
    innate: false
  },
  "52": {
    name: "Fog Res. Up",
    description: "Improve Fog resistance",
    className: "Theatrical Star",
    innate: false
  },
  "53": {
    name: "Tenacious Charm",
    description: "Improve Charm. Affects likelikhood of being targeted",
    className: "Theatrical Star",
    innate: false
  },
  "54": {
    name: "Actor's Tenacity",
    description:
      "Attack +50% for each attack that misses until you hit (Caps at 500%)",
    className: "Theatrical Star",
    innate: false
  },
  "55": {
    name: "Bell Master",
    description: "[Bell] Improve Bell proficiency",
    className: "Theatrical Star",
    innate: false
  },
  "56": {
    name: "Illusion Res. Up",
    description: "Improve Illusion resistance",
    className: "Theatrical Star",
    innate: false
  },
  "57": {
    name: "Signal Flare",
    description: "Greatly increase Resonance rate when HP < 30%",
    className: "Theatrical Star",
    innate: false
  },
  "58": {
    name: "Forsaken Fortune",
    description: "Avoid +35%, but only if you're in the depths of despair",
    className: "Theatrical Star",
    innate: false
  },
  "59": {
    name: "Anti-Donum Heresy",
    description: "Coven DP consumption +25%, but your attacks deal more damage",
    className: "Theatrical Star",
    innate: false
  },
  "60": {
    name: "Fancy Footwork",
    description:
      "Attack +50% for each attack you avoid until you are hit (Caps at 500%)",
    className: "Mad Raptor",
    innate: true
  },
  "61": {
    name: "Crossbow Sniper",
    description: "[Crossbow] Action speed +75% / Hit + 25%",
    className: "Mad Raptor",
    innate: true
  },
  "62": {
    name: "Confuse Recovery",
    description: "Recover faster from Confuse status",
    className: "Mad Raptor",
    innate: false
  },
  "63": {
    name: "Stealth",
    description: "Each round of battle lowers your chance of being targeted",
    className: "Mad Raptor",
    innate: false
  },
  "64": {
    name: "Mud Res. Up",
    description: "Improve Mud resistance",
    className: "Mad Raptor",
    innate: false
  },
  "65": {
    name: "Tenacious Speed",
    description: "Improve Agility. Affects Avoid and Action speed",
    className: "Mad Raptor",
    innate: false
  },
  "66": {
    name: "Steady Aim",
    description:
      "Crit rate +100 / Hit + 100% next turn after using Defend/Fortify Coven",
    className: "Mad Raptor",
    innate: false
  },
  "67": {
    name: "Crossbow Master",
    description: "Improve crossbow proficiency",
    className: "Mad Raptor",
    innate: false
  },
  "68": {
    name: "Confuse Res. Up",
    description: "Improve Confuse resistance",
    className: "Mad Raptor",
    innate: false
  },
  "69": {
    name: "Swiftness",
    description: "Moderately increase Action speed",
    className: "Mad Raptor",
    innate: false
  },
  "70": {
    name: "Thin Ice",
    description:
      "Crit rate +5 when you avoid an attack (Caps at crit rate +25)",
    className: "Mad Raptor",
    innate: false
  },
  "71": {
    name: "Crossbow Salvo",
    description: "[Crossbow] 3% chance to attack enemy group 10 times",
    className: "Mad Raptor",
    innate: false
  },
  "72": {
    name: "Dismemberer",
    description: "Increased chance of inflicting a Critical Gore",
    className: "Gothic Copellia",
    innate: true
  },
  "73": {
    name: "Reckless Blows",
    description:
      "Increase crit damage with S+ proficiency weapons, but Rapport suffers",
    className: "Gothic Copellia",
    innate: true
  },
  "74": {
    name: "Total Recovery",
    description: "Recover faster from all negative statuses",
    className: "Gothic Copellia",
    innate: false
  },
  "75": {
    name: "Evil Eye",
    description: "50% chance to apply Illusion status on hit",
    className: "Gothic Copellia",
    innate: false
  },
  "76": {
    name: "Improved Bloodflow",
    description: "Attack +25% when attacking",
    className: "Gothic Copellia",
    innate: false
  },
  "77": {
    name: "Prankster",
    description: "Stun chance +10%",
    className: "Gothic Copellia",
    innate: false
  },
  "78": {
    name: "Maverick",
    description: "Inflict and receive critical hits based on your Lucky Number",
    className: "Gothic Copellia",
    innate: false
  },
  "79": {
    name: "Hammer Master",
    description: "Improve hammer proficiency",
    className: "Gothic Copellia",
    innate: false
  },
  "80": {
    name: "Fortitude",
    description: "Stun resistance +20",
    className: "Gothic Copellia",
    innate: false
  },
  "81": {
    name: "Reflexive Hardening",
    description: "When attacked, your Defense temporarily increases by 25%",
    className: "Gothic Copellia",
    innate: false
  },
  "82": {
    name: "Font of Power",
    description:
      "Attack +25%/ Stun chance +25 next turn following Defend/Fortify Coven",
    className: "Gothic Copellia",
    innate: false
  },
  "83": {
    name: "Immortal Sin",
    description:
      "Attacks may confuse when HP < 30%. More effective at higher karma",
    className: "Gothic Copellia",
    innate: false
  },
  "84": {
    name: "Scythe Dancer",
    description: "[Scythe] 12% chance to attack enemy group 4 times",
    className: "Demon Reaper",
    innate: true
  },
  "85": {
    name: "Wickerman",
    description: "Increase attack by 'missing puppet parts x1'",
    className: "Demon Reaper",
    innate: true
  },
  "86": {
    name: "Mental Unity",
    description: "Hit +20%",
    className: "Demon Reaper",
    innate: false
  },
  "87": {
    name: "Evil in Bloom",
    description: "During battle, Tractie's karma replaces your Luck stat",
    className: "Demon Reaper",
    innate: false
  },
  "88": {
    name: "Repel",
    description: "When attacked, enemy's Attack reduced by 25%",
    className: "Demon Reaper",
    innate: false
  },
  "89": {
    name: "Heroic Stance",
    description: "Crit +50",
    className: "Demon Reaper",
    innate: false
  },
  "90": {
    name: "Vampirism",
    description:
      "On critical hit, recover 10% of the damage inflicted as health",
    className: "Demon Reaper",
    innate: false
  },
  "91": {
    name: "Scythe Master",
    description: "Improve Scythe Proficiency",
    className: "Demon Reaper",
    innate: false
  },
  "92": {
    name: "Slippery",
    description: "Avoid +20%",
    className: "Demon Reaper",
    innate: false
  },
  "93": {
    name: "Instant Transmission",
    description: "Greatly increase Action speed when HP is full",
    className: "Demon Reaper",
    innate: false
  },
  "94": {
    name: "Zone",
    description: "Hit +50% when HP is full",
    className: "Demon Reaper",
    innate: false
  },
  "95": {
    name: "Humblebrag",
    description: "Avoid +70% / Hit -75% when HP < 5%",
    className: "Demon Reaper",
    innate: false
  }
};

export const names = [
  "Aster Knight",
  "Marginal Maze",
  "Shinobushi",
  "Peer Fortress",
  "Theatrical Star",
  "Mad Raptor",
  "Gothic Copellia",
  "Demon Reaper"
];
export const colors = [
  "salmon",
  "lightblue",
  "tan",
  "silver",
  "gold",
  "lightgreen",
  "hotpink",
  "violet"
];

export const initSkills = () => {
  for (const skillObj of Object.entries(SKILL_MAP)) {
    skillObj[1].color = getClassColor(skillObj[1].className);
    skillObj[1].level = getSkillLevel(skillObj[1]);
  }
};

export const getAllClasses = () => {
  let allClasses = {};
  var clsName;
  for (const skillObj of Object.entries(SKILL_MAP)) {
    //let skillNumber = skillObj[0];
    let skill = skillObj[1];
    if (!clsName || clsName !== skill.className) {
      clsName = skill.className;
    }
    allClasses[clsName] = allClasses[clsName] || [];
    allClasses[clsName].push(skill);
  }

  return allClasses;
};
