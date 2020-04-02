import { Component, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { SpeedwalkService } from './speedwalk.service';
import { Speedwalk } from './speedwalk';

@Component({
  selector: "app-speedwalks",
  templateUrl: "./speedwalks.component.html",
  styleUrls: ["./speedwalks.component.css"]
})

export class SpeedwalksComponent implements OnInit {
  faCopy = faCopy;
  speedwalks: Speedwalk[]

  staticAlertClosed = true;

  constructor(private _clipboardService: ClipboardService, private _speedwalkService: SpeedwalkService) {}

  ngOnInit(): void {
    this.getSpeedwalks();
  }

  onCopy(directions: string[]): void {
    let text = directions.join(";");
    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false
    setTimeout(() => this.staticAlertClosed = true, 2000);
  }

  getSpeedwalks(): void {
    this._speedwalkService.getSpeedWalks()
    .subscribe(speedwalks => this.speedwalks = speedwalks);
  }
}
