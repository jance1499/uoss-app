import { Component, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { SpeedwalkService } from "./speedwalk.service";
import { Speedwalk } from "./speedwalk";

@Component({
  selector: "app-speedwalks",
  templateUrl: "./speedwalks.component.html",
  styleUrls: ["./speedwalks.component.css"],
})
export class SpeedwalksComponent implements OnInit {
  faCopy = faCopy;
  faFileCode = faFileCode;
  speedwalks: Speedwalk[];
  delimiter = ";";

  staticAlertClosed = true;

  constructor(
    private _clipboardService: ClipboardService,
    private _speedwalkService: SpeedwalkService
  ) {}

  ngOnInit(): void {
    this.getSpeedwalks();
  }

  onChangeSearch(search: string): void {
    this.getSpeedwalks();

    if (search === "") {
      return;
    }

    search = search.toLocaleLowerCase();

    this.speedwalks = this.speedwalks.filter(function(speedwalk) {
      if (speedwalk.category.toLocaleLowerCase().includes(search)) {
        return true;
      }

      if (speedwalk.description.toLocaleLowerCase().includes(search)) {
        return true;
      }

      if (speedwalk.name.toLocaleLowerCase().includes(search)) {
        return true;
      }

      return false;
    });
  }

  onCopy(directions: string[]): void {
    let text = directions.join(this.delimiter);
    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onCopyMudletAlias(speedwalk: Speedwalk): void {
    let directions = speedwalk.directions.join(this.delimiter);
    let text = `function createAlias()
  if exists("${speedwalk.name}", "alias") == 0 then
    permAlias("${speedwalk.name}", "Speedwalks", "^${speedwalk.name}$", [[send ("${directions}")]])
  end
end`;
    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onCopyCmudAlias(speedwalk: Speedwalk): void {
    let directions = speedwalk.directions.join(this.delimiter);
    let text = `#ALIAS ${speedwalk.name} {${directions}}`
    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onCmudAliasCreationScript(): void {
    let text = "";
    this.speedwalks.forEach((speedwalk) => {
      let directions = speedwalk.directions.join(this.delimiter);
      text = text.concat(`#ALIAS ${speedwalk.name} {${directions}}`, "\n");
    });

    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onMudletAliasCreationScript(): void {
    let text = "function createAlias()\n";
    this.speedwalks.forEach((speedwalk) => {
      let directions = speedwalk.directions.join(this.delimiter);
      let createAliasScript = `if exists("${speedwalk.name}", "alias") == 0 then
  permAlias("${speedwalk.name}", "Speedwalks", "^${speedwalk.name}$", [[send ("${directions}")]])
end`;
      text = text.concat(createAliasScript, "\n");
    });
    text = text.concat("end");

    this._clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onChangeDelimiter(delimiter: string) {
    this.delimiter = delimiter;
  }

  getSpeedwalks(): void {
    this._speedwalkService
      .getSpeedWalks()
      .subscribe((speedwalks) => (this.speedwalks = speedwalks));
  }
}
