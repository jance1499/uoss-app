import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Speedwalk } from '../speedwalk';

@Component({
  selector: 'app-speedwalk-add',
  templateUrl: './speedwalk-add.component.html',
  styleUrls: ['./speedwalk-add.component.css']
})
export class SpeedwalkAddComponent implements OnInit {

  name: string;
  description: string;
  category: string;
  directions: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addSpeedwalk() {
    if (this.name && this.description && this.category && this.directions) {
      const directionsSplit = this.directions.split(';').map(item => item.trim());
      const speedwalk: Speedwalk = { name: this.name, description: this.description, category: this.category, directions: directionsSplit };
      this.activeModal.close(speedwalk);
    }
  }
}
