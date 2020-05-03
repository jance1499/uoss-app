import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment';
import { SlotTypes } from './equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: 'equipment.component.html',
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment[];
  weaponTypes: string[];
  weaponTypes2: string[];
  armorTypes: string[];
  filterList: string[];
  isAllWeapons: boolean;
  isAllArmor: boolean;
  isAllEquipment: boolean;
  strengthFilter: number;
  agilityFilter: number;
  vitalityFilter: number;
  wisdomFilter: number;
  willFilter: number;
  levelFilter: number;

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit() {
    this.equipmentService
      .getEquipment()
      .subscribe((equipment) => (this.equipment = equipment));
    const armorFilters = [
      'Armor',
      'Bracelet',
      'Robe',
      'Clothes',
      'Hat',
      'Helm',
      'Shield',
      'Accessory',
      'Personal',
    ];
    const weaponFilters = [
      'Axe',
      'Book',
      'Boomerang',
      'Bow',
      'Claw',
      'Crossbow',
      'Dagger',
      'Gun',
      'Hammer',
      'Instrument',
    ];
    const weaponFilters2 = [
      'Katana',
      'Lance',
      'KnightSword',
      'MateriaBlade',
      'NinjaSword',
      'Pole',
      'Rod',
      'Staff',
      'Sword',
      'Whip',
    ];
    // tslint:disable-next-line: no-trailing-whitespace
    this.isAllWeapons = false;
    this.isAllArmor = false;
    this.isAllEquipment = false;

    this.filterList = armorFilters.concat(weaponFilters);
    this.filterList = this.filterList.concat(weaponFilters2);

    this.weaponTypes = this.buildArray();
    this.weaponTypes = this.weaponTypes.filter((item) =>
      weaponFilters.includes(item)
    );

    this.weaponTypes2 = this.buildArray();
    this.weaponTypes2 = this.weaponTypes2.filter((item) =>
      weaponFilters2.includes(item)
    );

    this.armorTypes = this.buildArray();
    this.armorTypes = this.armorTypes.filter((item) =>
      armorFilters.includes(item)
    );
  }

  asIsOrder(a, b) {
    return 1;
  }
  buildArray() {
    const keys = Object.keys(SlotTypes);
    keys.slice(keys.length / 2, keys.length - 1);
    return keys.slice();
  }
  onClickFilterToggle(slotType) {
    if (this.filterList.includes(slotType)) {
      this.filterList = this.filterList.filter((item) => item !== slotType);
    } else {
      this.filterList.push(slotType);
    }

    if (
      this.armorTypes.every((element) => !this.filterList.includes(element))
    ) {
      this.isAllArmor = true;
    } else {
      this.isAllArmor = false;
    }

    if (
      this.weaponTypes
        .concat(this.weaponTypes2)
        .every((element) => !this.filterList.includes(element))
    ) {
      this.isAllWeapons = true;
    } else {
      this.isAllWeapons = false;
    }

    if (
      this.armorTypes
        .concat(this.weaponTypes2)
        .concat(this.weaponTypes)
        .every((element) => !this.filterList.includes(element))
    ) {
      this.isAllEquipment = true;
    } else {
      this.isAllEquipment = false;
    }
  }
  isFiltered(slotType) {
    if (this.filterList.includes(slotType)) {
      return true;
    }
  }
  toggleAllWeapons() {
    this.isAllWeapons = !this.isAllWeapons;
    if (this.isAllWeapons) {
      if (this.isAllArmor) {
        this.isAllEquipment = true;
      }
      this.filterList = this.filterList.filter(
        (x) => !this.weaponTypes.concat(this.weaponTypes2).includes(x)
      );
    } else {
      this.filterList = this.filterList.concat(
        this.weaponTypes.concat(this.weaponTypes2)
      );
    }
    if (
      this.armorTypes
        .concat(this.weaponTypes2)
        .concat(this.weaponTypes)
        .every((element) => !this.filterList.includes(element))
    ) {
      this.isAllEquipment = true;
    } else {
      this.isAllEquipment = false;
    }
  }

  toggleAllArmor() {
    this.isAllArmor = !this.isAllArmor;
    if (this.isAllArmor) {
      if (this.isAllWeapons) {
        this.isAllEquipment = true;
      }
      this.filterList = this.filterList.filter(
        (x) => !this.armorTypes.includes(x)
      );
    } else {
      this.filterList = this.filterList.concat(this.armorTypes);
    }
    if (
      this.armorTypes
        .concat(this.weaponTypes2)
        .concat(this.weaponTypes)
        .every((element) => !this.filterList.includes(element))
    ) {
      this.isAllEquipment = true;
    } else {
      this.isAllEquipment = false;
    }
  }

  toggleAllEquipment() {
    this.isAllEquipment = !this.isAllEquipment;
    if (this.isAllEquipment) {
      this.isAllWeapons = true;
      this.isAllArmor = true;
      this.filterList = this.filterList.filter(
        (x) =>
          !this.armorTypes
            .concat(this.weaponTypes2)
            .concat(this.weaponTypes)
            .includes(x)
      );
    } else {
      this.isAllWeapons = false;
      this.isAllArmor = false;
      this.filterList = this.filterList.concat(
        this.armorTypes.concat(this.weaponTypes2).concat(this.weaponTypes)
      );
    }
  }
  onChangeStrengthFilter(strengthFilter: string) {
    this.strengthFilter = parseInt(strengthFilter, 10);
  }
  onChangeAgilityFilter(agilityFilter: string) {
    this.agilityFilter = parseInt(agilityFilter, 10);
  }
  onChangeVitalityFilter(vitalityFilter: string) {
    this.vitalityFilter = parseInt(vitalityFilter, 10);
  }
  onChangeWisdomFilter(wisdomFilter: string) {
    this.wisdomFilter = parseInt(wisdomFilter, 10);
  }
  onChangeWillFilter(willFilter: string) {
    this.willFilter = parseInt(willFilter, 10);
  }
  onChangeLevelFilter(levelFilter: string) {
    this.levelFilter = parseInt(levelFilter, 10);
  }
  meetsRequirements(equip: Equipment) {
    if (
      (this.strengthFilter == null || this.strengthFilter === 0 || isNaN(this.strengthFilter)) &&
      (this.agilityFilter == null || this.agilityFilter === 0 || isNaN(this.agilityFilter)) &&
      (this.vitalityFilter == null || this.vitalityFilter === 0 || isNaN(this.vitalityFilter)) &&
      (this.wisdomFilter == null || this.wisdomFilter === 0 || isNaN(this.wisdomFilter)) &&
      (this.willFilter == null || this.willFilter === 0 || isNaN(this.willFilter)) &&
      (this.levelFilter == null || this.levelFilter === 0 || isNaN(this.levelFilter))) {
        return true;
    }

    if (equip.requirements &&
      (this.filterPasses(equip.requirements.strength, this.strengthFilter) &&
      this.filterPasses(equip.requirements.agility, this.agilityFilter) &&
      this.filterPasses(equip.requirements.vitality, this.vitalityFilter) &&
      this.filterPasses(equip.requirements.wisdom, this.wisdomFilter) &&
      this.filterPasses(equip.requirements.will, this.willFilter) &&
      this.filterPasses(equip.requirements.level, this.levelFilter))) {
          return true;
      }
    if (!equip.requirements) {
        return true;
      }

    return false;
  }

  filterPasses(requirement: any, amount: number): boolean {
    if (!requirement) {
      return true;
    }

    if (amount >= requirement) {
      return true;
    }

    return false;
  }
}
