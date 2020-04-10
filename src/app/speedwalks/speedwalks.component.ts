import { Component, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { SpeedwalkService } from './speedwalk.service';
import { Speedwalk } from './speedwalk';

@Component({
  selector: "app-speedwalks",
  templateUrl: "./speedwalks.component.html",
  styleUrls: ["./speedwalks.component.css"]
})

export class SpeedwalksComponent implements OnInit {
  faCopy = faCopy;
  faFileCode = faFileCode;
  speedwalks: Speedwalk[]
  delimiter = ";"

  staticAlertClosed = true;

  constructor(private _clipboardService: ClipboardService, private _speedwalkService: SpeedwalkService) {}

  ngOnInit(): void {
    this.getSpeedwalks();
  }

  onCopy(directions: string[]): void {
    let text = directions.join(this.delimiter);
    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlertClosed = true, 2000);
  }

  onCopyMudletAlias(speedwalk: Speedwalk): void {
    let directions = speedwalk.directions.join(this.delimiter);
    let lua =
`function createAlias()
  if exists("${speedwalk.name}", "alias") == 0 then
    permAlias("${speedwalk.name}", "Speedwalks", "^${speedwalk.name}$", [[send ("${directions}")]])
  end
end`;
    this._clipboardService.copyFromContent(lua);
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlertClosed = true, 2000);
  }

  onChangeDelimiter(delimiter: string) {
    this.delimiter = delimiter;
  }

  getSpeedwalks(): void {
    this._speedwalkService.getSpeedWalks()
    .subscribe(speedwalks => this.speedwalks = speedwalks);
  }
}
