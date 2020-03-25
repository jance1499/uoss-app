import { Component, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-speedwalks',
  templateUrl: './speedwalks.component.html',
  styleUrls: ['./speedwalks.component.css']
})
export class SpeedwalksComponent implements OnInit {
  faCopy = faCopy;
  constructor() { }

  ngOnInit(): void {
  }

}
