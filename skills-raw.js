/*
    name,
    description,
    cost (skill points),
    color (blue/red),
    category (if alike exclude),
	innate (if true, class name),
	tags ["Pos.", "Alike Excl.", "Learn", "Max", "Always", "Equip", "Atk.",
		"In Battle", "KO", "Stack", "No Stack", "Def.", "Def. Pos."]
*/

var magiaMaid = [
	{
		name: "Donum Studies",
		description: "Gain donum attack power +15%, DP consumption +5%.  Does not activate while incapacitated.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Magia Maid",
		tags: [
			["Pos.", "Attacker"],
		],
	},
	{
		name: "Field Dynamics I",
		description: "Power Source increased by a fixed amount.  When you take damage, Power Source increases by 3x the normal amount.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Magia Maid",
		tags: [
			["Pos.", "Attacker"],
			["Def.", "Def. Pos."],
		],
	},
	{
		name: "Regen Technique",
		description: "Regen Technique restoring Donum.  Recovers 70% of MAX HP.  Can only be used in battle.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		],
	},
	{
		name: "Master Masochist",
		description: "Defense +15% whenever you are attacked.",
		cost: 43,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Max", "105%"],
		],
	},
	{
		name: "Peace of Mind",
		description: "Confusion Resistance +20.  Increases natural recovery of Confuse status.",
		cost: 13,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Fieldlamp Tactics",
		description: "Critical value +50% when attacked at weapon range.  +20% counter chance, 50% dmg.  1 hit.",
		cost: 44,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Lamp"],
			["Atk."],
		],
	},
	{
		name: "Magia Seal",
		description: "When defending, Flame, Mud and Fog Resistance +15.  Affiliated Coven is affected for the turn.",
		cost: 10,
		color: "red",
		category: "Magia Seal",
		innate: false,
		tags: [
			["Alike Excl."],
			["No Stack"],
		],
	},
	{
		name: "Hardening",
		description: "Hardening Donum.  Increases Defense.  Increases Defense by 1.35x.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		],
	},
	{
		name: "Eclipse Hit",
		description: "Ignores 25% of the target's Defense.",
		cost: 23,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Lamp"],
			["Atk."],
		],
	},
	{
		name: "Abyss Res. Up",
		description: "Abyss Resistance +25.  Enhances Resistance to Abyss.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Softening",
		description: "Softening Donum.  Decreases enemy Defense.  Decreases Defense by 0.75x.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"]
		],
	},
	{
		name: "Light of Life",
		description: "Heals 50% of attackers in your Coven's HP.  Does not include yourself.",
		cost: 56,
		color: "red",
		category: "Light of Life",
		innate: false,
		tags: [
			["Alike Excl."],
			["In Battle", 1],
			["KO"],
		],
	},
	{
		name: "Donum Master",
		description: "Increases Coven donum attack by +8%.",
		cost: 45,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Stack"],
		],
	},
	{
		name: "Donumist",
		description: "Coven's DP consumption -30%.  Attack -30% while attacking.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		],
	},
	{
		name: "Magia Seal II",
		description: "When defending, Flame, Mud, Fog Resistance +30.  Affiliated Coven is affected for the turn.",
		cost: 20,
		color: "red",
		category: "Magia Seal",
		innate: false,
		tags: [
			["Alike Excl."],
			["No Stack"],
		],
	},

];

var asterCrow = [
	{
		name: "Star Burst",
		description: "Adds 75% to Attack when sole attacker in brigade.  Does not include Support and those unable to fight as attackers.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Aster Crow",
		tags: [
			["In Battle"],
		],
	},
	{
		name: "Stubbornness",
		description: "Remain at 1 HP when you receive death damage.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Aster Crow",
		tags: [
			["In Battle", 1],
		],
	},
	{
		name: "War Spire",
		description: "Critical Value +50.",
		cost: 25,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Lance"],
			["Atk."],
		],
	},
	{
		name: "Lucky Star",
		description: "Greatly increases LUC.",
		cost: 25,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Startle Recovery",
		description: "Increases natural recovery speed from Startle status.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "High Gear I",
		description: "Slightly increases action speed.",
		cost: 12,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP>=", "50%"],
		],
	},
	{
		name: "Lucky Punch",
		description: "Damage +50% when counter is triggered.  Activates with counter skills.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Luc>=", "Fortune"],
		],
	},
	{
		name: "Shining Fortune",
		description: "Slightly increases LUC.  Resets when out of combat.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Attacker"],
			["Turn"],
			["Max", "Turn 33"],
		],
	},
	{
		name: "Pierce Res. Up",
		description: "Pierce Resistance +15.  Enhances Resistance to Pierce attacks.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "High Gear II",
		description: "Guard rate +5%.",
		cost: 14,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP>=", "50%"],
		],
	},
	{
		name: "Adrenaline Rush",
		description: "Stun value +2400.",
		cost: 13,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "1%"],
		],
	},
	{
		name: "Lance Master",
		description: "Improves lance proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Speedy Backwater",
		description: "Greatly increases action speed.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Vanguard"],
			["HP<=", "10%"],
		],
	},
	{
		name: "Hero",
		description: "Increases Rapport gained by 1.5x.",
		cost: 14,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
			["Equip", "Master S+ Weapon"],
		],
	},
	{
		name: "High Gear III",
		description: "HIT +10%",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP>=", "50%"],
		],
	}
];

var shinomashira = [
	{
		name: "Monkey Blunt",
		description: "Adds 25% chance to do two or three attacks.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Shinomashira",
		tags: [
			["Equip", "Master S Hammer"],
			["Atk."],
		],
	},
	{
		name: "Dual Blade Expert",
		description: "75% chance to attack with off hand.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Shinomashira",
		tags: [
			["Equip", "Master S+ Dual-wield 1h"],
			["Atk."],
		],
	},
	{
		name: "Rusty Purple Curse",
		description: "-20% ATK to enemy that incapacitates this puppet soldier for 3 turns.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
			["KO", "By Foe"],
			["Stack"],
		],
	},
	{
		name: "Curse Share",
		description: "When player suffers from a status effect, adds an additional status effect at 100 power.",
		cost: 16,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "HIT"],
		],
	},
	{
		name: "Monkey Mince",
		description: "Makes it extremely easy for an enemy to target you.",
		cost: 36,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "HIT"],
		],
	},
	{
		name: "Poison Know-How",
		description: "Poison Resistance +20.  Increases natural recovery speed from Poison status.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Poison Recovery",
		description: "Increases natural recovery speed from Poison status.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Hammer Master",
		description: "Improves hammer proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Body Modification",
		description: "CON (Core Strength) +50%.  Mainly affects Defense.",
		cost: 15,
		color: "blue",
		category: "Body Modification",
		innate: false,
		tags: [
			["Alike Excl."],
		],
	},
	{
		name: "Monkey Poison",
		description: "Increases Attack by 100% while under the Poison status.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		],
	},
	{
		name: "Poison Res. Up",
		description: "Poison Resistance +25.  Enhances Resistance to Poison.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Monkey Scream",
		description: "Slightly more likely to be targeted by enemies.",
		cost: 2,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		],
	},
	{
		name: "Blacksmith's Blow",
		description: "Attack +35%.",
		cost: 35,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		],
	},
	{
		name: "Valor's Superior",
		description: "When escaping, adds +20% escape success rate for Coven.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Stack"],
		],
	},
	{
		name: "First Flower Blade",
		description: "Next turn's Attack +100%.",
		cost: 40,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		],
	}
];

var theatricalStar = [
	{
		name: "Therapeutic Dance",
		description: "Heal 15% HP per turn and 3% HP to adjacent soldiers if attacker.  If supporter, 1% HP to Coven attackers.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Theatrical Star",
		tags: [
			["Equip", "Bell"],
			["Stack"],
		],
	},
	{
		name: "Victory Cheer",
		description: "Puppet Soldiers gain +50% AVD while adjacent.  Critical chance +25.  Adjacent affects other Covens.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Theatrical Star",
		tags: [
			["Equip", "Bell"],
		],
	},
	{
		name: "Dancer's Will",
		description: "ATK and HIT +50%.  Resets after attack hits.",
		cost: 48,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Miss"],
			["Max", "400%"],
		],
	},
	{
		name: "Body Touch",
		description: "Gain 25% chance to add Confusion.",
		cost: 14,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
			["Atk.", "HIT"],
		],
	},
	{
		name: "Red Faced",
		description: "Attack +100%.  Resets when an attack hits.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Miss"],
			["Max", "100%"],
		],
	},
	{
		name: "Love, Hate, Love",
		description: "Increases amount of Rapport value by 2x.  Amount varies to others by 0.5x.",
		cost: 20,
		color: "red",
		category: "Love, Hate, Love",
		innate: false,
		tags: [
			["Alike Excl."],
			["In Battle"],
		],
	},
	{
		name: "Battle Cheer Dance",
		description: "Batle Cheer Dance Donum.  Increases Attack.  Multiplies Attack by 1.5x.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		],
	},
	{
		name: "Suave Smile",
		description: "Slightly less likely to be targeted by enemies.",
		cost: 2,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		],
	},
	{
		name: "Illusion Recovery",
		description: "Increases natural recovery speed from Illusion status.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Dancer's Decorum",
		description: "+20 resist to Illusion, Confusion, Stench, Startle.",
		cost: 36,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Bell Master",
		description: "Improves bell proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Narcissist",
		description: "Restores 10% of HP.",
		cost: 19,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Bell"],
			["End Battle"],
		],
	},
	{
		name: "Charmer",
		description: "CHM (Charm) +15%.  Mostly affects selected enemy target.",
		cost: 5,
		color: "blue",
		category: "Charmer",
		innate: false,
		tags: [
			["Alike Excl."],
		],
	},
	{
		name: "Flower Dance Music",
		description: "CHM +30%.  Resets when attacked.",
		cost: 13,
		color: "red",
		category: "Charmer",
		innate: false,
		tags: [
			["Alike Excl."],
			["Evade"],
			["Max", "400%"],
		],
	},
	{
		name: "Curtain Call",
		description: "Remain at 1 HP when you receive death damage.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle", 1],
		],
	}
];

var gothicCoppelia = [
	{
		name: "Double Strike",
		description: "Adds 50% chance to attack twice.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Gothic Coppelia",
		tags: [
			["Equip", "Master S+ 2h"],
			["Atk."],
		],
	},
	{
		name: "Iron Arm Spin",
		description: "Increases critical damage by 50%.  However, greatly reduces Rapport with adjacent puppet soldiers.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Gothic Coppelia",
		tags: [
			["Pos.", "Vanguard"],
			["Equip", "Master S+ Weapon"],
			["Atk."],
		],
	},
	{
		name: "Maverick",
		description: "Number of causal factors affects amount of critical hits.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		],
	},
	{
		name: "Self-Destruct",
		description: "Self-destructs, dealing Stun damage to all enemies.  All parts will be lost.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["KO", "By Foe"],
		],
	},
	{
		name: "Dismemberer",
		description: "When a critical hits, 80% chance of small increase in Gore rate.",
		cost: 23,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Critical"],
		],
	},
	{
		name: "Hypnotic Eye",
		description: "+50% chance for an attack to gain Illusion effect.",
		cost: 40,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "HIT"],
		],
	},
	{
		name: "Full Recovery",
		description: "Slightly increases recovery speed of all status effects.",
		cost: 12,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Font of Power",
		description: "Next turn attack +25%, Stun +1600.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		],
	},
	{
		name: "Tenacious Strength",
		description: "STR +35%. Affects Attack.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		],
	},
	{
		name: "Merciless Blow",
		description: "Critical value +100.",
		cost: 20,
		color: "red",
		category: "Merciless Blow",
		innate: false,
		tags: [
			["Alike Excl."],
			["Atk.", "Stunned Foe"],
		],
	},
	{
		name: "Super Strength",
		description: "+5% counter chance when attacked in weapon range.  -Counter HIT, +Gore rate on crits.  1 hit.",
		cost: 6,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ 2h"],
			["Atk."],
		],
	},
	{
		name: "Hoarder's Strike",
		description: "Slight increase in Gore rate on critical hits.",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "30%"],
		],
	},
	{
		name: "Anti-Donum Heresy",
		description: "Attack +20%.  Increases a Coven's DP consumption by +25%.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		],
	},
	{
		name: "Analyst",
		description: "Adds +40% learning chance when attacked.",
		cost: 20,
		color: "red",
		category: "Analyst",
		innate: false,
		tags: [
			["Alike Excl."],
		],
	},
	{
		name: "Shock Wave",
		description: "Ignores 25% of target's Defense.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
			["Atk."],
		],
	}
];

var fableTricker = [
	{
		name: "Happy Dance",
		description: "Revelation increase +50%.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Fable Tricker",
		tags: [
			["Pos.", "Attacker"],
			["HP", "100%"],
			["No Stack"],
		]
	},
	{
		name: "Follow-Up",
		description: "Target enemy will no longer be enraged.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Fable Tricker",
		tags: [
			["Atk."],
		]
	},
	{
		name: "Clown's Spectacle",
		description: "Clown's Spectacle Donum.  Inflicts abnormal status conditions on enemies.  Performs mesmerizing spectacle that removes enemy's rage.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Magic Trick",
		description: "Magic Trick Donum.  Removes status effects.  Removes status effects caused by enemies.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Friendship Token",
		description: "Significantly increases Resonance rate.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "1%"],
			["Atk."],
		]
	},
	{
		name: "Pain, Go Away ♪",
		description: "Pain, Go Away ♪ Healing Donum.  Restores 30% of MAX HP.  Can only be used in battle.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Novice Jitterbug",
		description: "Adds +50% to HP recovered when using a revive item.",
		cost: 37,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Pharmaceutics I",
		description: "Triples recovery effect when using a recovery item.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Maintenance",
		description: "Doubles the number of turns Mira Machina occurs in front Coven.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Attacker"],
			["No Stack"],
		]
	},
	{
		name: "Class II",
		description: "Enhances a front Coven's Mira Machina.  Increases ability by 1.5x.",
		cost: 18,
		color: "red",
		category: "Class II",
		innate: false,
		tags: [
			["Alike Excl."],
			["Pos.", "Attacker"],
			["No Stack"],
		]
	},
	{
		name: "Panic Circus",
		description: "Panic Circus Donum.  Inflicts status effects on enemies.  A Technique that tosses you about.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Pursuing Strike",
		description: "Pursuit rate +20%.",
		cost: 7,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Pos.", "Pursuit Quota"],
			["HP", "100%"]
		]
	},
	{
		name: "Mob-ified",
		description: "Less likely to be targeted by enemies.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "30%"],
		]
	},
	{
		name: "Advanced Jitterbug",
		description: "Adds +75% HP restored when using a recovery item.",
		cost: 56,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Class III",
		description: "Enhances a Coven's Mira Machina.  Doubles all stats.",
		cost: 25,
		color: "red",
		category: "Class II",
		innate: false,
		tags: [
			["Alike Excl."],
			["Pos.", "Attacker"],
			["No Stack"]
		]
	}
];

var amAlchymia = [
	{
		name: "Shadow's Flower",
		description: "If your character is the last to act, increases chance of last character to be targeted.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Am Alchymia",
		tags: [
			["Atk.", "HIT"]
		]
	},
	{
		name: "Sword Dance",
		description: "35% chance of triggering group attack.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Am Alchymia",
		tags: [
			["Equip", "Master S+ Sword"],
			["HP>=", "80%"],
			["Atk."]
		]
	},
	{
		name: "Cubelia",
		description: "80% chance to counter with 300% damage when in weapon range up to 5x.",
		cost: 54,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ 1h"],
			["Evade", "Phys. Atk."]
		]
	},
	{
		name: "Rose Rogue",
		description: "Target's HP remains at 1 when dealing death damage.  If the target's HP is 1, dealing damage will defeat it.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		]
	},
	{
		name: "Tenacious Speed",
		description: "AGI +35%.  Affects evasion rate and turn order.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Absolute Evasion",
		description: "Absolute Evasion Donum.  Enhances AVD.  Increases AVD +100%.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Pickoff",
		description: "Adds 25% chance to give target -50% to AVD or HIT.  Effect lasts for 3 turns.",
		cost: 36,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "HIT"],
			["No Stack"]
		]
	},
	{
		name: "Evil Gaze",
		description: "10% counter chance to attackers in your Coven.  Counter up to 2 times.  Activates with counter skills.",
		cost: 12,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["No Stack"]
		]
	},
	{
		name: "Cast Off",
		description: "Increases action speed, but maximum HP is reduced by 50%.  Occurs even out of combat.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Thin Ice",
		description: "Adds +5 to Critical value.  Resets when attacked.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Evade"],
			["Max", 25]
		]
	},
	{
		name: "Standout Sword",
		description: "Critical value +100 when Resonance occurs.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "5%"],
		]
	},
	{
		name: "Draw Sword",
		description: "Increases action speed.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Sword"],
			["Equip", "1h Unavailable"]
		]
	},
	{
		name: "First Twinkle",
		description: "Critical hit will always occur if first action of all characters.",
		cost: 25,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Revolution's Chance",
		description: "Attack +75%.  Resets after being attacked.",
		cost: 30,
		color: "red",
		category: "Revolution's Chance",
		innate: false,
		tags: [
			["Alike Excl."],
			["Evade"],
			["Max", "225%"]
		]
	},
	{
		name: "Bloody Pleasures",
		description: "Restores 25% of HP.",
		cost: 56,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Defeat Foe"],
		]
	}
];

var primaReaper = [
	{
		name: "Scythe Dancer",
		description: "Grants a 12% chance to attack 4 additional times.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Prima Reaper",
		tags: [
			["Equip", "Scythe"],
			["Atk."]
		]
	},
	{
		name: "Blood-Wind Dance",
		description: "Attack and AVD +100%, Defense and HIT -50%.  In addition, adds +35% chance of activating Star Storm Dance.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Prima Reaper",
		tags: [
			["HP<=", "5%"],
		]
	},
	{
		name: "Wickerman",
		description: "Increases Attack by 100% for each lost part.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Wiccards",
		description: "Grants ATK based on Coven casualties.  For every Attack casualty +50%, for every Support casualty +20%.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Abyss's Child",
		description: "Your AVD is tripled while under the Abyss Status.",
		cost: 45,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Alluring Cry",
		description: "Increases Power Source +10% when attacked.",
		cost: 5,
		color: "red",
		category: "Alluring Cry",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Blood Zone",
		description: "15% to counter against Flame, Mud or Fog attacks in range.  Damage taken during enemy turn will increase counter damage.  Max 1 counter.",
		cost: 37,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Evil in Bloom",
		description: "Brigade's karma value is used to determine LUC.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Hawk Eyes",
		description: "Pursuit rate +30%.",
		cost: 13,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Pos.", "Pursuit Quota"]
		]
	},
	{
		name: "Black Blade",
		description: "Critical value +50.",
		cost: 30,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "30%"],
		]
	},
	{
		name: "Rusty Blood Curse",
		description: "-20% DEF to enemies that KO this unit.  Effect persists for 3 turns.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle", 1],
			["KO", "By Foe"]
		]
	},
	{
		name: "Vampirism",
		description: "Regenerates 10% of damage dealt.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Critical"],
		]
	},
	{
		name: "Animus Snatch",
		description: "Animus Snatch Donum.  Increases attack.  1.75x Attack.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Approximation Art",
		description: "HIT +35%.  Makes it easier for your attacks to hit enemies.",
		cost: 18,
		color: "blue",
		category: "Approximation Art",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Butler's High",
		description: "Critical value +50.  Resets when attacked.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Evade"],
			["Max", "1 Turn"]
		]
	}
];

var peerFortress = [
	{
		name: "Protective Heart",
		description: "When attacker in brigade is attacked, 10% chance to be covered, +8% per katar equipped.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Peer Fortress",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Mega-High Bash",
		description: "Increases stun value by # times attacked in defensive formation x800 for next attack.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Peer Fortress",
		tags: [
			["Equip", "Katar"],
			["Def.", "Def. Pos."]
		]
	},
	{
		name: "Siege Shield",
		description: "Restores 5% of HP.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Tortoise Shell",
		description: "Increases DEF when using Fortify Coven.  +5% DEF for each subsequent turn.",
		cost: 12,
		color: "red",
		category: "Tortoise Shell",
		innate: false,
		tags: [
			["Alike Excl."],
			["Def.", "Def. Pos."],
			["Max", "150%"]
		]
	},
	{
		name: "Unbreakable",
		description: "Guard Rate +10%.  Makes it easier to guard against enemy attacks.",
		cost: 30,
		color: "red",
		category: "Unbreakable",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Tenacious Stamina",
		description: "CON +35%.  Affects Defense.",
		cost: 10,
		color: "blue",
		category: "Body Modification",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Gatekeeper's Proof",
		description: "Gatekeeper's Proof Donum.  Provokes enemies.  Adds 80% chance to provoke, 75% damage.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Contra-Bash",
		description: "75% to stun attacker when guarding in weapon range.  Stun value +2600, 50% to counter damage.",
		cost: 38,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ Katar"],
			["Def.", "Def. Pos."]
		]
	},
	{
		name: "Bulwark",
		description: "Guard Rate +15%.  Makes it easier to guard against enemy attacks.",
		cost: 45,
		color: "red",
		category: "Unbreakable",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Slash Res. Up",
		description: "Slash Resistance +15.  Enhances Resistance to Slash attacks.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Stench Res. Up",
		description: "Stench Resistance +25.  Enhances Resistance to Stench.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Solidify",
		description: "Defense +10%.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP>=", "80%"],
		]
	},
	{
		name: "Katar Master",
		description: "Improves katar proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Rear",
		description: "Last to act in a brigade.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Hidden Star",
		description: "Increases Rapport gain and loss by 1.5x.",
		cost: 15,
		color: "red",
		category: "Love, Hate, Love",
		innate: false,
		tags: [
			["Alike Excl."],
			["In Battle"]
		]
	}
];

var wonderCorsair = [
	{
		name: "Merc's Law",
		description: "Swap places with an attacker when incapacitated.  Only activates during combat.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Wonder Corsair",
		tags: [
			["Pos.", "Supporter"],
		]
	},
	{
		name: "Ally's Pledge",
		description: "# of attacks depends on # of unavailable attackers.  The # of attacks is randomly increased, each attack consumes 3% HP.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Wonder Corsair",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Merc Guild Oath",
		description: "When attacked in a brigade, 20% chance attacker will be covered.",
		cost: 11,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Turn", "1 Turn"],
		]
	},
	{
		name: "Divine Revelation",
		description: "When attacked, -30% to enemy's Attack power.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Master Class",
		description: "Increases all 10 Weapon Masteries by 2 levels.",
		cost: 38,
		color: "blue",
		category: "Master Class",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Heart of Courage",
		description: "Heart of Courage Donum.  Protects allies.  Rushes to cover against physical attacks.  50% damage.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Merc's Wisdom",
		description: "Restores 15% of HP.",
		cost: 22,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
			["HP<=", "10%"],
			["Turn End"]
		]
	},
	{
		name: "Tactical Defense",
		description: "When attacker from affiliated Coven is attacked, adds 16% chance to swap places.",
		cost: 30,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Katar/Shield"],
		]
	},
	{
		name: "Super Prankster",
		description: "Stun value +1200.  Makes it easier to stun enemies.",
		cost: 31,
		color: "red",
		category: "Prankster",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Lone Ranger",
		description: "Increases Attack, Defense, AVD and HIT by +25% while the same facet is not an attacker in the same brigade (ignoring gender differences).",
		cost: 29,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "All-Rounder",
		description: "Increases all Weapon Masteries by 3 levels.",
		cost: 58,
		color: "blue",
		category: "Master Class",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Hold Up",
		description: "Stun Resistance +2400.",
		cost: 15,
		color: "red",
		category: "Hold Up",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Casualty (Off.)",
		description: "Adds 1% chance to become a critical hit.  Also increases chance of Critical Gore if target is lower rank.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		]
	},
	{
		name: "Honey Pot",
		description: "35% counter chance when attacked in weapon range.  Greatly reduces counter HIT.  Max three counters.",
		cost: 17,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ 2h"],
		]
	},
	{
		name: "Sadistic",
		description: "Heals 5% of damage dealt to your HP.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Critical"],
		]
	}
];

var rapidVenator = [
	{
		name: "Resuscitation",
		description: "When an attacker in affiliated Coven is incapacitated, it revives.  This consumes a resurrection item.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Rapid Venator",
		tags: [
			["In Battle", 1],
			["Pos.", "Supporter"]
		]
	},
	{
		name: "Sen no Sen",
		description: "One character's action order occurs earlier.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Rapid Venator",
		tags: [
			["Always"],
		]
	},
	{
		name: "Hunter's Wisdom",
		description: "Increases target's meat drop chance by +10%.  Is not activated by Donum attacks.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Defeat Foe"],
		]
	},
	{
		name: "Disappear",
		description: "Become less likely to be targeted by enemies.",
		cost: 3,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
			["Turn End"]
		]
	},
	{
		name: "Crossbow Sniper",
		description: "Increases action speed.  Hit +25%.",
		cost: 14,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Crossbow"],
		]
	},
	{
		name: "Rapid Boost",
		description: "Rapid Boost Donum.  Increases action speed.  Slightly increases action speed.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Confuse Recovery",
		description: "Increases natural recovery speed from Confuse status.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Signal Flare",
		description: "Greatly increases Resonance rate.",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "30%"],
			["Atk."]
		]
	},
	{
		name: "Miracle Guard",
		description: "Guard +15%.",
		cost: 14,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["LUC", "Fortune Lvl"],
		]
	},
	{
		name: "Eagle Eye",
		description: "Eagle Eye Donum.  Increases HIT.  Increases HIT by 20%.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Go no Sen",
		description: "When attacked, +30% counter chance.  Activates with counter skills.",
		cost: 9,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Natural Healing",
		description: "Restores 5% of HP.",
		cost: 65,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Turn End"]
		]
	},
	{
		name: "Sex Appeal",
		description: "Dramatically increases chance to be targeted.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
			["Turn"],
			["Max", "Turn 16"]
		]
	},
	{
		name: "Confuse Res. Up",
		description: "Confusion Resistance +25.  Enhances Resistance to Confuse.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Crossbow Master",
		description: "Improves crossbow proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	}
];

var famyuSeeker = [
	{
		name: "Meow Bells",
		description: "Makes it difficult for target to become engraged.  No effect on enraged targets.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Famyu Seeker",
		tags: [
			["Atk.", "HIT"],
		]
	},
	{
		name: "Humblebrag",
		description: "AVD +75%, HIT -75%",
		cost: 50,
		color: "red",
		category: false,
		innate: "Famyu Seeker",
		tags: [
			["HP<=", "5%"],
		]
	},
	{
		name: "Wild Observer",
		description: "Learning chance when attacked +50%.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "15%"],
		]
	},
	{
		name: "Wild Vitality",
		description: "Gain +50% HP recovered when revived by revive item.  Does not activate when revived by anything besides a revive item.",
		cost: 56,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "People Watcher",
		description: "Increases or decreases Rapport by 1.75x.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Rehearsal",
		description: "Restores 1% of HP.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Cat Rush",
		description: "Adds 20% chance to attack 2 to 5 times.  Single-target attacks only.  Target enrages faster.",
		cost: 63,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ 1h Slash"],
			["Atk.", "Idle Foe"]
		]
	},
	{
		name: "Catty Tricks",
		description: "Adds 50% chance that an attack adds a Startle effect.  Activates only once per target.",
		cost: 16,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Idle Foe"],
		]
	},
	{
		name: "Let's Go, Phoresis",
		description: "Pursuit rate +20%.",
		cost: 9,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Pos.", "Pursuit Quota"]
		]
	},
	{
		name: "Wild Behavior",
		description: "Improves scroll proficiency by 2-3 levels.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Treasure Seeker",
		description: "Treasure Seeker Donum.  Increases drop rate.  Increases target's item drop rate.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Healing Power",
		description: "Restores a small amount of HP to your Coven.  Attacker recovers 1%, Supporter 3%.",
		cost: 39,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Turn End"]
		]
	},
	{
		name: "Increase Speed",
		description: "Increases action speed of attackers in Coven.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Attacker"],
			["No Stack"]
		]
	},
	{
		name: "Wild Bearing",
		description: "Increases AVD by 6.  Excludes Relics.  Does not include lost parts status.",
		cost: 45,
		color: "red",
		category: "Wild Bearing",
		innate: false,
		tags: [
			["Alike Excl."],
			["Equip", "No Armor/Shield"],
			["HP", "100%"]
		]
	},
	{
		name: "Sharpened Nail",
		description: "Pursuit damage +10%.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Pos.", "Pursuit Quota"]
		]
	}
];

var magiaConcieri = [
	{
		name: "Field Dynamics II",
		description: "Increases Power Source by +5%.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Magia Concieri",
		tags: [
			["Pos.", "Supporter"],
			["HP", "100%"],
			["Stack"]
		]
	},
	{
		name: "Donum Efficiency",
		description: "Decreases DP spent by affiliated Coven by -25%.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Magia Concieri",
		tags: [
			["Stack"],
		]
	},
	{
		name: "Takeover",
		description: "Increases target's item drop rate.",
		cost: 30,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Defeat Foe"],
		]
	},
	{
		name: "Pharmaceutics",
		description: "Doubles recovery effect when using recovery items.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Analysis",
		description: "When attacked, +30% learning chance.",
		cost: 15,
		color: "red",
		category: "Analyst",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Magia Tempest",
		description: "Magia Tempest Donum.  Inflicts abnormalities on enemies.  A Technique that strikes with a torrent of mana.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Law: Dizzying Mist",
		description: "Donum that lowers enemy HIT.  HIT -20%.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Devil-Sealed Spell",
		description: "Flame, Mud and Fog Resistance +15.",
		cost: 24,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Law: Weak Adhesion",
		description: "Weak Adhesion Donum.  Lowers enemy movement speed.  Reduces action speed.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Abyssal Studies",
		description: "Abyss Resistance +20.  Increases natural recovery of Abyss status.",
		cost: 13,
		color: "blue",
		category: "Abyssal Studies", //?
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Abyss Recovery",
		description: "Increases natural recovery speed from Abyss status.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Logic Loaded",
		description: "When attacked, reduces damage by logical calculation.",
		cost: 21,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Tenacious Donum",
		description: "DMP +35%.  Affects Donum power.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Law: Weak Attack",
		description: "Weak Attack Donum.  Lowers enemy Attack.  Reduces Attack by 0.85x.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Casualty (Demon)",
		description: "1% chance DP is not consumed on Donum use.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	}
];

var asterAshe = [
	{
		name: "Blunt Lamp",
		description: "Doubles Attack for Lamps.  Does not affect DMP or other non-Attack stats.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Aster Ashe",
		tags: [
			["Equip", "Lamp"],
		]
	},
	{
		name: "Firm Mind",
		description: "Restores HP by 5%.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Aster Ashe",
		tags: [
			["Turn"],
		]
	},
	{
		name: "Heavy Smash",
		description: "Adds +1000 to stun value.  Slightly reduces action speed.",
		cost: 13,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Lamp"],
		]
	},
	{
		name: "Personal Grudge",
		description: "Inflicts Abyss on enemies that KO this unit.  Using it will result in the loss of your head.",
		cost: 24,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["KO"],
		]
	},
	{
		name: "Emergency Regen",
		description: "Emergency Regen Donum.  Restores 55% MAX HP and cures Stun.  Only in battle.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Stars' Will",
		description: "Startle Resistance +35 when surprised.  +20 Startle Resistance and Startle recovery speed.",
		cost: 23,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Star Spirit",
		description: "Startle Resistance +50 when surprised.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Lamp Master",
		description: "Improves lamp proficieny by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Ironclad Hushmoney",
		description: "Guard +15%.",
		cost: 27,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Luc>=", "Fortune"],
		]
	},
	{
		name: "Grapplamp Theorum",
		description: "Ignores 30% of opponent's Defense.",
		cost: 26,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Lamp"],
			["Atk."]
		]
	},
	{
		name: "Hot Pursuit Smarts",
		description: "Pursuit rate +10%, Pursuit damage +20%",
		cost: 12,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Pos.", "Pursuit Quota"]
		]
	},
	{
		name: "Blunt Res. Up",
		description: "Blunt Resistance +15.  Enhances resistance to Blunt attacks.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Stargazer",
		description: "Greatly increases action speed.",
		cost: 70,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Armor-piercing",
		description: "Ignores 15% of the target's Defense.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		]
	},
	{
		name: "Startle Res. Up",
		description: "Startle Resistance +25.  Enhances Resistance to Startle.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	}
];

var shinobushi = [
	{
		name: "Dark Remnants",
		description: "+50% chance of special evasion when attacked.  If evasion fails, 3.5x damage taken.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Shinobushi",
		tags: [
			["Pos.", "Vanguard"],
			["HP", "100%"]
		]
	},
	{
		name: "Dual Flowers EX",
		description: "Attacks with off-hand weapon.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Shinobushi",
		tags: [
			["Equip", "Master S+ Dual-wield 1h"],
			["HP>=", "75%"],
			["Atk."]
		]
	},
	{
		name: "Undress",
		description: "Increases AVD by 5x.  Excludes Relics.  Does not include lost parts status.",
		cost: 38,
		color: "red",
		category: "Wild Bearing",
		innate: false,
		tags: [
			["Alike Excl."],
			["In Battle"],
			["Equip"]
		]
	},
	{
		name: "Swordsmanship",
		description: "Increases Gore rate on critical hits.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "10%"],
			["Atk.", "Lower Rank"]
		]
	},
	{
		name: "Shadow Dodge",
		description: "Shadow Dodge Donum.  Increases AVD.  Increases AVD by 30%.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Shadowstep",
		description: "Less likely to be targeted by enemies.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Underhand Strike",
		description: "Critical value +75.",
		cost: 15,
		color: "red",
		category: "Merciless Blow",
		innate: false,
		tags: [
			["Alike Excl."],
			["Atk.", "Stunned Foe"]
		]
	},
	{
		name: "Good Escape Route",
		description: "Adds 5% escape success chance when a Coven escapes.  The total number is counted regardless if they are Attack or Support.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Stack"],
		]
	},
	{
		name: "Field Aiki",
		description: "20% counter chance when attacked.  Activates with counter skills.",
		cost: 6,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Dark Sword",
		description: "Makes it difficult to increase the odds of being targeted by enemies.",
		cost: 12,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
			["Atk."]
		]
	},
	{
		name: "Blade Deflection",
		description: "When attacked, -20% to enemy's Attack power.",
		cost: 13,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Shadow Avatar",
		description: "Shadow Avatar Donum.  Makes you more vulnerable to enemies.  Easier to be targeted by enemies.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Shadow Cowardice",
		description: "Become very difficult for enemies to target.",
		cost: 6,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "10%"],
		]
	},
	{
		name: "Single Flower",
		description: "Adds 50% chance to attack 2 or 3 times.  Single-target attacks only.  Will not enrage easily.",
		cost: 63,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ 1h Slash"],
			["Atk.", "Idle Foe"]
		]
	},
	{
		name: "Sword Master",
		description: "Improves sword proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	}
];

var theatricalDolce = [
	{
		name: "Healing Chime",
		description: "Regain 3% HP at end of turn.  Also regain 20% HP when battle ends.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Theatrical Dolce",
		tags: [
			["Equip", "Bell"],
		]
	},
	{
		name: "Charm",
		description: "Attacks use CHM.  Won't enrage easily by attacking unless enemy is malignant.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Theatrical Dolce",
		tags: [
			["Pos.", "Attacker"],
			["HP", "100%"]
		]
	},
	{
		name: "Alluring Cheer",
		description: "Slightly increases action speed of adjacent puppet soldiers.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Kissy Cheer",
		description: "Restores 3% of attackers in your Coven's HP.",
		cost: 39,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Turn End"],
			["Stack"]
		]
	},
	{
		name: "Overproduction",
		description: "Power increased by +50% when attacked.",
		cost: 20,
		color: "red",
		category: "Alluring Cry",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Love, Hate",
		description: "Increases amount of Rapport value by 2x.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Ready-to-Eat Dolce",
		description: "A donum that increases Attack and Stun.  Increases Attack by 1.25x and Stun by +1000.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Funny Smile",
		description: "Become more easily targeted by enemies once targeted by an enemy.",
		cost: 6,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Illusion Res. Up",
		description: "Illusion Resistance +25.  Enhances Resistance to Illusion.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Sweet Charge",
		description: "Sweet Charge Donum.  Restores stun value.  Recovers 50% of stun value.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Tenacious Charm",
		description: "CHM +35%.  Affects enemy target selection.",
		cost: 10,
		color: "blue",
		category: "Charmer",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Cursed Chime",
		description: "Increases Resonance rate, making it easier for enemies to target you.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Bell"],
		]
	},
	{
		name: "Fog Res. Up",
		description: "Fog Resistance +15.  Enhances Resistance to Fog attacks.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Nipple Slip",
		description: "CHM +50%.  Resets when attacked.",
		cost: 20,
		color: "red",
		category: "Nipple Slip",
		innate: false,
		tags: [
			["Alike Excl."],
			["Evade"],
			["Max", "150%"]
		]
	},
	{
		name: "Rose Dolce",
		description: "CHM +100%.  Resets after attacked.",
		cost: 40,
		color: "red",
		category: "Nipple Slip",
		innate: false,
		tags: [
			["Alike Excl."],
			["Evade"],
			["Max", "300%"]
		]
	}
];

var gothicGratonia = [
	{
		name: "Grand Glutton",
		description: "Attack +5%.  HIT +50%.  Stun +700.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Gothic Gratonia",
		tags: [
			["Equip", "Cannon or Master S+ Weapon"],
			["HP>=", "80%"]
		]
	},
	{
		name: "All-Mighty Strike",
		description: "Attack +50%.  Each attack consumes 5% HP.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Gothic Gratonia",
		tags: [
			["Equip", "Master S+ Weapon"],
			["Atk."]
		]
	},
	{
		name: "Fortitude",
		description: "Stun resistance +1200.",
		cost: 10,
		color: "red",
		category: "Hold Up",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Prankster",
		description: "Stun value +600.  Makes it easier to stun enemies.",
		cost: 16,
		color: "red",
		category: "Prankster",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Improved Bloodflow",
		description: "Attack +25%.",
		cost: 25,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk."],
		]
	},
	{
		name: "Heavy Blow",
		description: "Stun +1600.  Action speed is always decreased.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "After Foe Action"],
		]
	},
	{
		name: "Gunnery Master",
		description: "Improves cannon proficiency by 5 levels.",
		cost: 19,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Hardening Reflex",
		description: "Defense +25% when attacked.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Final Attack",
		description: "Activates on brigade's last action.  Stun value +3200, attacks 2-3 times.",
		cost: 56,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Cannon or Master S+ 2h"],
			["HP", "100%"],
			["Atk."]
		]
	},
	{
		name: "Deactivate Limiter",
		description: "Deactivate Limiter Donum.  Enhances combat abilities.  Attack, AVD and Stun are significantly improved.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Immortal Sin",
		description: "Adds Confusion effect.  Confusion's power is determined by a brigade's karma value.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "30%"],
			["Atk.", "HIT"]
		]
	},
	{
		name: "Pinch Force",
		description: "Stun +3800.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Foe Abducting"],
		]
	},
	{
		name: "Forsaken Fortune",
		description: "AVD +35%",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["LUC", "Despair Lvl"],
		]
	},
	{
		name: "Restart",
		description: "Restores 75% of HP.",
		cost: 56,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle", 1],
			["HP<=", "1%"],
			["Turn End"]
		]
	},
	{
		name: "High-Impact Gun",
		description: "Stun value +1200.",
		cost: 16,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Cannon or Master S+ Equip"],
			["HP", "100%"]
		]
	}
];

var fableEclipse = [
	{
		name: "Black Biotope",
		description: "+ATK, DEF, HIT for each incapacitated member.  Increases AVD, but halves each initial value.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Fable Eclipse",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Ender",
		description: "Attack increases 100% while sole attacker in brigade.  Critical value +100, but -75% for DEF, HIT and AVD.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Fable Eclipse",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Puppeteer's Teasing",
		description: "Target enemies more likely to be enraged and target soldier.",
		cost: 3,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "HIT"],
		]
	},
	{
		name: "Quickfire Art",
		description: "Adds 25% chance to attack twice.  However, HIT -20% during battle.",
		cost: 27,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Cannon"],
			["Atk."]
		]
	},
	{
		name: "Everyone's Happy ♪",
		description: "Everyone's Happy, So Happy ♪ Donum.  Heals Stun accumulation.  Restores 30% of Stun accumulation.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Unobserved Fire",
		description: "Pursuit rate +50%.  Pursuit damage +25%, HIT 0.5x.",
		cost: 16,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Pos.", "Pursuit Limit"],
			["Equip", "Cannon"]
		]
	},
	{
		name: "Unsteady Resistance",
		description: "Flame, Mud and Fog Resistance +5%.  Slash, Blunt and Pierce Resistance -5%.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Eclipse Light",
		description: "Eclipse Light Donum.  Increases resistance to abnormalities.  Increases abnormal condition resistance +100.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Galloping Horse",
		description: "Learning chance +75% when attacked.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP>=", "3%"],
			["HP<=", "8%"]
		]
	},
	{
		name: "Racy Busking",
		description: "Restores the HP of attackers in your Coven.  Restores 5% of HP.",
		cost: 7,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["HP<=", "25%"],
			["Turn End"]
		]
	},
	{
		name: "Lunar Eclipse",
		description: "Lunar Eclipse Donum.  Inflicts abnormal condition on enemies.  A Technique that manipulates the moon's mana.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Hipfire Art",
		description: "Stun Resistance +800%.  HIT +50%, but AVD -50%.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Cannon or Master S+ 2h"]
		]
	},
	{
		name: "Magical Theater",
		description: "Greatly increases action speed.  Your action turn will occur earlier.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Golden Blessing",
		description: "Gold Ring's Divine Protection Donum.  Counters magical attacks.  Damage taken multiplier 100%.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Eclipse",
		description: "If facet is unique in brigade, +30% to ATK, DEF, AVD and HIT, but chance of Rapport gain -25%.",
		cost: 70,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	}
];

var amAltea = [
	{
		name: "Empress",
		description: "Increases damage by 1.5x.  Adds 50% chance to end enemy's rage.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Am Altea",
		tags: [
			["HP", "100%"],
			["Atk.", "Raged Foe"]
		]
	},
	{
		name: "Flirty Boast",
		description: "CHM +35%.  High rate of being targeted at battle start.",
		cost: 10,
		color: "red",
		category: false,
		innate: "Am Altea",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Blind Spot Passage",
		description: "Slightly less likely to be targeted by enemies.",
		cost: 3,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Vanguard"],
			["Turn"]
		]
	},
	{
		name: "Once-in-a-Lifetime",
		description: "Attack +100%.  Resets when attacked.",
		cost: 30,
		color: "red",
		category: "Revolution's Chance",
		innate: false,
		tags: [
			["Alike Excl."],
			["Evade"],
			["Max", "200%"]
		]
	},
	{
		name: "Joint Secrets",
		description: "Ignores 25% of the target's Defense.",
		cost: 23,
		color: "red",
		category: "Gouge",
		innate: false,
		tags: [
			["Alike Excl."],
			["Equip", "Scroll"],
			["Atk."]
		]
	},
	{
		name: "Quick Step",
		description: "Quick Step Donum.  Increases action speed.  Increases action speed.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Field Combat",
		description: "Critical value +100.",
		cost: 40,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Scroll"],
			["Equip", "Sword"],
			["Atk.", "Stunned Foe"]
		]
	},
	{
		name: "Worn-Out Beast",
		description: "Attack +50% when you have a lost part.",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Martial King",
		description: "Increases Rapport gain and loss by 1.25x.  Using [Equip Master S+ Lightning Technique] increases up to 1.75x.",
		cost: 9,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
			["Equip", "Scroll"]
		]
	},
	{
		name: "Death Zone",
		description: "Guard +15%, AVD +50%.",
		cost: 25,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "25%"],
		]
	},
	{
		name: "Endorphin",
		description: "Restores 10% of damage dealt to your HP.",
		cost: 19,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "In Gore"],
		]
	},
	{
		name: "Lightning Tackle",
		description: "Stun valu +1400, but Critical value -20.",
		cost: 13,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Scroll"],
		]
	},
	{
		name: "High-speed Pace",
		description: "Greatly increases action speed.  Increases time to turn order.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "No Leg Equip"],
		]
	},
	{
		name: "Bloodshot Eyes",
		description: "Adds +30% learning chance to non-hit actions.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
		]
	},
	{
		name: "Fascinate",
		description: "50% chance attacks gain illusion effect.  Does not work on stronger enemies.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master S+ Scroll"],
			["HP", "100%"]
		]
	}
];

var primaCupido = [
	{
		name: "Cupid",
		description: "Increases Rapport gain by 1.5x.  In addition, Rapport level will not decrease.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Prima Cupido",
		tags: [
			["In Battle"],
			["No Stack"]
		]
	},
	{
		name: "High Heels",
		description: "Recovery effects of recovery Donum +25%.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Prima Cupido",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Slippery",
		description: "AVD +20%.  Makes it easier to avoid enemy attacks.",
		cost: 15,
		color: "blue",
		category: "Slippery",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Zone",
		description: "HIT +50%.",
		cost: 35,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Blooming Goodness",
		description: "If brigade's karma is 0, increases Coven's Revelation by +25%.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "White Blade",
		description: "Critical value +30.  Increases chance for critical hits against enemies.",
		cost: 33,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Prima Reborn",
		description: "Prima Reborn healing Donum.  Restores 80% of MAX HP.  Can only be used in battle.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Quick Transmission",
		description: "Greatly increases action speed.",
		cost: 35,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Power Drop",
		description: "Increases Power Source gained by performing actions by 50%.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
			["Max", "300%"]
		]
	},
	{
		name: "Scythe Master",
		description: "Improves scythe proficiency by 4 levels.",
		cost: 15,
		color: "blue",
		category: "Scythe Master",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Battle Prepared",
		description: "HIT +10%.",
		cost: 9,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP>=", "30%"],
		]
	},
	{
		name: "Repel",
		description: "When attacked, -25% to enemy Attack power.",
		cost: 30,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Enlightening Eyes",
		description: "AVD +35%.  Makes it easier to avoid enemy attacks.",
		cost: 26,
		color: "blue",
		category: "Slippery",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Mental Unity",
		description: "HIT +20%.  Makes it easier for your attacks to hit enemies.",
		cost: 10,
		color: "blue",
		category: "Approximation Art",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Tenacious Fingers",
		description: "DEX +35%.  Affects HIT and critical rate.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	}
];

var peerChariot = [
	{
		name: "Protective Spirit",
		description: "10% chance to swap with a Coven attacker.  Increases chance +15% per katar equipped.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Peer Chariot",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Reckless Charge",
		description: "Adds +125% to critical chance for next turn.  Will counter when attacked for 60% damage.  Limited to one counter.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Peer Chariot",
		tags: [
			["Pos.", "Vanguard"],
			["Def.", "Def. Pos."]
		]
	},
	{
		name: "Iron Stance",
		description: "Increases Defense when using Fortify Coven.  Increase 30% Defense for every consecutive turn spent in defense formation.",
		cost: 43,
		color: "red",
		category: "Tortoise Shell",
		innate: false,
		tags: [
			["Alike Excl."],
			["Def.", "Def. Pos."],
			["Max", "200%"]
		]
	},
	{
		name: "Contra-Attack",
		description: "25% chance to counter when physically attacked.  Critical +50, 100% counter damage, 1x.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Master A+ Lance + Master A+ Katar"],
			["Def.", "Def. Pos."]
		]
	},
	{
		name: "Stench Recovery",
		description: "Increases natural recovery speed from Stench status.",
		cost: 5,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Masochistic",
		description: "Defense +35% when attacked.",
		cost: 21,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Killing Blow",
		description: "During next turn's attack, if target is dying and low rank, any critical will become Critical Gore.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Big Horn",
		description: "Big Horn Donum.  An attack that easily stuns enemies.  Delivers stunning blows.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Flame Res. Up",
		description: "Flame Resistance +15.  Enhances Resistance to Flame attacks.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Passive Flush",
		description: "Damage taken -50% when covering.",
		cost: 18,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Absolute Defense",
		description: "Guard rate +20%.",
		cost: 42,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP", "100%"],
		]
	},
	{
		name: "Unfulfilled Dream",
		description: "Heals 10% HP for every attacker in your Coven.  Does not include yourself.",
		cost: 11,
		color: "red",
		category: "Light of Life",
		innate: false,
		tags: [
			["Alike Excl."],
			["In Battle", 1],
			["KO"]
		]
	},
	{
		name: "Muscle Spasm",
		description: "MAX HP +50% in/out of combat, reduces action speed.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Battle Maniac",
		description: "5% chance of special evasion when attacked.  If evasion fails, -20% damage taken.",
		cost: 25,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Vanguard"],
			["HP>=", "80%"]
		]
	},
	{
		name: "Mega Bash",
		description: "After being attacked, +800 to stun value for next turn.",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Katar"],
			["Def.", "Def. Pos."]
		]
	}
];

var wonderViande = [
	{
		name: "Last Stand",
		description: "Increases critical value depending on # of attackers out of combat.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Wonder Viande",
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Iron Flip-Flops",
		description: "Gain 15% more experience, but reduces Action Speed.",
		cost: 50,
		color: "red",
		category: "Iron Flip-Flops",
		innate: "Wonder Viande",
		tags: [
			["Alike Excl."],
			["End Battle"]
		]
	},
	{
		name: "Critical Thrust",
		description: "Adds 70% chance to instant death if possible.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Scroll"],
			["Atk."]
		]
	},
	{
		name: "Gouge",
		description: "Ignores 10% of target's Defense.",
		cost: 11,
		color: "red",
		category: "Gouge",
		innate: false,
		tags: [
			["Alike Excl."],
			["Equip", "Scroll"],
			["Atk."]
		]
	},
	{
		name: "Super Core",
		description: "Stun value +1600.  Adds +800 to Stun Resistance.",
		cost: 29,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Attacker"],
			["HP>=", "70%"],
			["Atk."]
		]
	},
	{
		name: "Takedown",
		description: "Stun value +1200.",
		cost: 19,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Vanguard"],
			["Equip", "Master S+ Scroll"],
			["Atk.", "Readying Foe"]
		]
	},
	{
		name: "Warmup",
		description: "Slightly increases action speed.",
		cost: 8,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Vanguard"],
			["HP<=", "80%"]
		]
	},
	{
		name: "Omoplata",
		description: "Performs an attack twice.",
		cost: 59,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Stunned Foe"],
		]
	},
	{
		name: "Beating Rush",
		description: "Adds 15% chance to attack 5-8 times.",
		cost: 41,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Stunned Foe"],
		]
	},
	{
		name: "Pump Up",
		description: "Defense +25% whenever attacked.  Increases to a maximum of 75%.",
		cost: 36,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Counter Elegy",
		description: "Power Source increases by +25% when attacked.",
		cost: 10,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Self-Trained",
		description: "EXP +20%.  Always significantly reduces action speed.",
		cost: 51,
		color: "red",
		category: "Iron Flip-Flops",
		innate: false,
		tags: [
			["Alike Excl."],
			["End Battle"]
		]
	},
	{
		name: "Lightning Master",
		description: "Improves scroll proficiency by 2-3 levels.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Super-Heal",
		description: "Gain +30% HP recovery when you are revived.",
		cost: 56,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	},
	{
		name: "Asceticism",
		description: "EXP +25%.  Always significantly reduces action speed.",
		cost: 53,
		color: "red",
		category: "Iron Flip-Flops",
		innate: false,
		tags: [
			["Alike Excl."],
			["End Battle"]
		]
	}
];

var rapidRaptor = [
	{
		name: "Fancy Footwork",
		description: "Attack +50%.  Resets when an attack hits.",
		cost: 50,
		color: "red",
		category: "Revolution's Chance",
		innate: "Rapid Raptor",
		tags: [
			["Alike Excl."],
			["Evade"],
			["Max", "500%"]
		]
	},
	{
		name: "Crossbow Salvo",
		description: "Adds 3% chance to attack 10 times.  However, attacks target enemy group.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Rapid Raptor",
		tags: [
			["Pos.", "Rearguard"],
			["Equip", "Crossbow"],
			["Atk."]
		]
	},
	{
		name: "High Zone",
		description: "HIT +10%.  Critical value +5.  Maximum critical and HIT +300%.  Resets after attack.",
		cost: 27,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
			["Turn"]
		]
	},
	{
		name: "Instant Attack",
		description: "Greatly increases action speed.  Order of actions will occur faster.",
		cost: 30,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Hunter's Eye",
		description: "HIT +30%.",
		cost: 12,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
			["HP>=", "30%"]
		]
	},
	{
		name: "Steady Aim",
		description: "Critical value +100, HIT +100% to next turn.",
		cost: 60,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Good Cook",
		description: "Target's meat drop chance +20%.  Is not activated by Donum attacks.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Atk.", "Defeat Foe"],
		]
	},
	{
		name: "Stealth",
		description: "Less likely to be targeted by enemies.",
		cost: 5,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Turn End"],
			["Max", "Turn 10"]
		]
	},
	{
		name: "Best Position",
		description: "15% counter chance when attacked in weapon range.  Counter +100% damage.  Occurs up to 2 times.",
		cost: 7,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
			["Def.", "Def. Pos."]
		]
	},
	{
		name: "Sniper",
		description: "25% chance to counter along with Coven attacks +50 ATK.",
		cost: 27,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
			["Equip", "Crossbow"],
			["Atk."]
		]
	},
	{
		name: "Mode Change",
		description: "Mode Change Donum.  Enhances combat abilities.  Decreases speed, multiplies Attack and Defense by 1.75x.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Double Wide",
		description: "30% chance to trigger two group attacks.",
		cost: 53,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Equip", "Crossbow"],
			["Atk."]
		]
	},
	{
		name: "Heat Haze Dance",
		description: "Critical value +50.  Resets after turn.",
		cost: 40,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Evade"],
			["Max", "250%"]
		]
	},
	{
		name: "Mud Res. Up",
		description: "Mud Resistance +15.  Enhances Resistance to Mud attacks.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Always"],
		]
	},
	{
		name: "Gifted",
		description: "Adds +55% learning chance when attacked.",
		cost: 28,
		color: "red",
		category: "Analyst",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	}
];

var famyuChaser = [
	{
		name: "Cat's Eye",
		description: "Adds +30% learning chance to non-hit actions.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Famyu Chaser",
		tags: [
			["LUC", "Fortune"],
		]
	},
	{
		name: "Lucky Eyes",
		description: "Increases item drop rate while still alive.",
		cost: 50,
		color: "red",
		category: false,
		innate: "Famyu Chaser",
		tags: [
			["Pos.", "Attacker"],
			["End Battle"],
			["No Stack"]
		]
	},
	{
		name: "Support Attack",
		description: "Increases Resonance rate.",
		cost: 17,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Attacker"],
			["HP>=", "75%"]
		]
	},
	{
		name: "Aerial Recon",
		description: "Adds +10% HIT to attackers in your Coven.",
		cost: 36,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Supporter"],
		]
	},
	{
		name: "New Breath",
		description: "Restores 1% of HP.",
		cost: 7,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "75%"],
			["Turn End"]
		]
	},
	{
		name: "Lucky Shine",
		description: "Increases attackers' LUC in a brigade.",
		cost: 50,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Attacker"],
			["Stack"]
		]
	},
	{
		name: "Surrogate",
		description: "When a fellow attacker is killed by instant death, it sacrifices itself to revive the ally.",
		cost: 20,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle", 1],
			["Pos.", "Supporter"]
		]
	},
	{
		name: "Superb Focus",
		description: "HIT +300% for next turn.",
		cost: 80,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Def.", "Def. Pos."],
		]
	},
	{
		name: "Wild Escape",
		description: "Wild Escape Donum.  Allows you to flee.  When activated, significantly increases chance to escape.",
		cost: 10,
		color: "blue",
		category: false,
		innate: false,
		tags: [
			["Learn"],
		]
	},
	{
		name: "Hunter's Talons",
		description: "Improves scythe proficiency by 6 levels.",
		cost: 23,
		color: "blue",
		category: "Scythe Master",
		innate: false,
		tags: [
			["Alike Excl."],
		]
	},
	{
		name: "Thrust",
		description: "AVD +50%, Critical value +10.",
		cost: 24,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Luc>=", "Fortune"],
		]
	},
	{
		name: "Cornered Rat Power",
		description: "AVD -80%, HIT +150%.",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["HP<=", "10%"],
		]
	},
	{
		name: "Intuitive Guard",
		description: "Guard rate +5%.",
		cost: 9,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Luc>=", "Fortune"],
		]
	},
	{
		name: "Wild Scent Removal",
		description: "Less likely to be targeted by enemies.",
		cost: 4,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["Pos.", "Rearguard"],
			["Turn End"]
		]
	},
	{
		name: "Lonely Fighter",
		description: "Increases AVD by +25% while the same facet is not an attacker in the same brigade (ignoring gender differences).",
		cost: 15,
		color: "red",
		category: false,
		innate: false,
		tags: [
			["In Battle"],
		]
	}
];

