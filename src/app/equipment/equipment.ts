export class Equipment {
  id: number;
  name: string;
  slot: Slots;
  slotType: SlotTypes;
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

enum SlotTypes {
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
  Clothing,
  Armor,
  Shield
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

class StatModifiers {
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

class AbilityModifiers {
  pAttack: boolean;
  mAttack: boolean;
  defense: boolean;
  mDefense: boolean;
  evade: boolean;
  pEvade: boolean;
  mEvade: boolean;
  critical: boolean;
  mpCritical: boolean;
}

class EmpowerElements{
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

class ElementalDefenses {
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

class Autos {
  // SOS
  sosProtect: boolean;
  sosShell: boolean;
  sosConvalescence: boolean;
  counterForce: boolean;
  // Auto
  autoVeil: boolean;
  autoBerserk: boolean;
  autoProtect: boolean;
  autoShell: boolean;
  autoHaste: boolean;
  autoRegen: boolean;
  autoZombie: boolean;
  autoRefresh: boolean;
  autoReflect: boolean;
  autoFloat: boolean;
  autoEther: boolean;
}

class StatusImmunities {
  petrify: boolean;
  dontAct: boolean;
  dontMove: boolean;
  slow: boolean;
  blind: boolean;
  gravity: boolean;
  zombie: boolean;
  curse: boolean;
  sleep: boolean;
  berserk: boolean;
  poison: boolean;
  imp: boolean;
  mini: boolean;
  silence: boolean;
}

class Killers {
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
class TouchStrikes {
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
