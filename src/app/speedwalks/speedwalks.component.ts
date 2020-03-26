import { Component, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

import { SPEEDWALKS } from "./mock-speedwalks";

@Component({
  selector: "app-speedwalks",
  templateUrl: "./speedwalks.component.html",
  styleUrls: ["./speedwalks.component.css"]
})

export class SpeedwalksComponent implements OnInit {
  faCopy = faCopy;
  speedwalks = SPEEDWALKS;

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {}

  onCopy(directions: string[]): void {
    let text = directions.join(";");
    this._clipboardService.copyFromContent(text);
  }
}
