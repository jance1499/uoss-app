export class Equipment {
  id: number;
  name: string;
  slot: Slots;
  slotType: string;
  requirements: Requirements;
  elementalDefenses: ElementalDefenses;
  statusImmunities: StatusImmunities;
  statModifiers: StatModifiers;
  abilityModifiers: AbilityModifiers;
  autos: Autos;
  touchStrikes: TouchStrikes;
  empowerElements: EmpowerElements;
  killers: Killers;
  unique: string;
  location: string;
}

enum Slots {
  Weapon,
  Shield,
  Bracelet,
  Head,
  Chest,
  Accessory,
  Personal
}

export enum SlotTypes {
  Axe,
  Book,
  Boomerang,
  Bow,
  Claw,
  Crossbow,
  Dagger,
  Gun,
  Hammer,
  Instrument,
  Katana,
  Lance,
  KnightSword,
  MateriaBlade,
  NinjaSword,
  Pole,
  Rod,
  Staff,
  Sword,
  Whip,
  Hat,
  Helm,
  Robe,
  Clothes,
  Armor,
  Bracelet,
  Shield,
  Accessory,
  Personal
}

class Requirements {
  strength = 0;
  agility = 0;
  vitality = 0;
  wisdom = 0;
  will = 0;
  level = 0;
  cyborgLevel = 0;
  job = '';
  jobLevel = '0';
}

export class StatModifiers {
  strength: number;
  agility: number;
  vitality: number;
  wisdom: number;
  will: number;
  cyborgStrength: number;
  cyborgAgility: number;
  cyborgVitality: number;
  cyborgWisdom: number;
  cyborgWill: number;
  level: number;
  weaponPower: number;
  magicAttack: number;
  defense: number;
  mdefense: number;
  healthPercent: number;
  manaPercent: number;
}

export class AbilityModifiers {
  pAttack = false;
  mAttack = false;
  defense = false;
  mDefense = false;
  evade = false;
  pEvade = false;
  mEvade = false;
  critical = false;
  mpCritical = false;
}

export class EmpowerElements {
  fire: boolean;
  ice: boolean;
  lightning: boolean;
  water: boolean;
  wind: boolean;
  earth: boolean;
  holy: boolean;
  dark: boolean;
  poison: boolean;
}

export class ElementalDefenses {
  fire: number;
  ice: number;
  lightning: number;
  water: number;
  wind: number;
  earth: number;
  holy: number;
  dark: number;
  poison: number;
  drain: number;
  spDrain: number;
}

export class Autos {
  // SOS
  sosProtect = false;
  sosShell = false;
  sosConvalescence = false;
  counterForce = false;
  // Auto
  autoVeil = false;
  autoBerserk = false;
  autoProtect = false;
  autoShell = false;
  autoHaste = false;
  autoRegen = false;
  autoZombie = false;
  autoRefresh = false;
  autoReflect = false;
  autoFloat = false;
  autoEther = false;
}

export class StatusImmunities {
  petrify = false;
  dontAct = false;
  dontMove = false;
  slow = false;
  blind = false;
  gravity = false;
  zombie = false;
  curse = false;
  sleep = false;
  berserk = false;
  poison = false;
  imp = false;
  mini = false;
  silence = false;
}

export class Killers {
  lizard: boolean;
  slime: boolean;
  insect: boolean;
  demon: boolean;
  undead: boolean;
  beast: boolean;
  dragon: boolean;
  humanoid: boolean;
  machine: boolean;
}
export class TouchStrikes {
  // Statuses
  blindTouch: boolean;
  blindStrike: boolean;
  slowTouch: boolean;
  slowStrike: boolean;
  stoneTouch: boolean;
  stoneStrike: boolean;
  sleepTouch: boolean;
  sleepStrike: boolean;
  silenceTouch: boolean;
  silenceStrike: boolean;
  impTouch: boolean;
  impStrike: boolean;
  paralyzeTouch: boolean;
  paralyzeStrike: boolean;
  // Elements
  fireStrike: boolean;
  iceStrike: boolean;
  lightningStrike: boolean;
  waterStrike: boolean;
  windStrike: boolean;
  earthStrike: boolean;
  holyStrike: boolean;
  darkStrike: boolean;
  poisonStrike: boolean;
  nuclearStrike: boolean;
  drainStrike: boolean;
}
