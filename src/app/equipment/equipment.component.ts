import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: 'equipment.component.html'
})

export class EquipmentComponent implements OnInit  {
  equipment: Equipment[];

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe((equipment) => (this.equipment = equipment));
  }

  asIsOrder(a, b) {
    return 1;
  }
}
