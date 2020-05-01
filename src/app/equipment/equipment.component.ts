import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment';
import { SlotTypes } from './equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: 'equipment.component.html'
})

export class EquipmentComponent implements OnInit  {
  equipment: Equipment[];
  weaponTypes: string[];
  armorTypes: string[];
  filterList: string[];

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe((equipment) => (this.equipment = equipment));
    const armorFilters = ['Armor', 'Bracelet', 'Robe', 'Clothes', 'Hat', 'Helm', 'Shield', 'Accessory', 'Personal'];
    const weaponFilters = [   'Axe','Book', 'Boomerang', 'Bow', 'Claw', 'Crossbow', 'Dagger',
                              'Gun', 'Hammer', 'Instrument', 'Katana', 'Lance',
                              'KnightSword', 'MateriaBlade', 'NinjaSword', 'Pole', 'Rod', 'Staff',
                              'Sword', 'Whip'];
                              // tslint:disable-next-line: no-trailing-whitespace

    this.filterList = armorFilters.concat(weaponFilters);

    this.weaponTypes = this.buildArray();
    this.weaponTypes = this.weaponTypes.filter(item => weaponFilters.includes(item));

    this.armorTypes = this.buildArray();
    this.armorTypes = this.armorTypes.filter(item => armorFilters.includes(item));
  }

  asIsOrder(a, b) {
    return 1;
  }
  buildArray() {
    const keys = Object.keys(SlotTypes);
    keys.slice(keys.length / 2, keys.length - 1 );
    return keys.slice();
  }
  onClickFilterToggle(slotType) {
    if (this.filterList.includes(slotType)) {
      this.filterList = this.filterList.filter(item => item !== slotType);
    } else {
      this.filterList.push(slotType);
    }
  }
  isFiltered(slotType) {
    if (this.filterList.includes(slotType)) {
      return true;
    }
  }
}
