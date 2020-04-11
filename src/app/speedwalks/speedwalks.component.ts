import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { SpeedwalkService } from './speedwalk.service';
import { Speedwalk } from './speedwalk';

@Component({
  selector: 'app-speedwalks',
  templateUrl: './speedwalks.component.html',
  styleUrls: ['./speedwalks.component.css'],
})
export class SpeedwalksComponent implements OnInit {
  faCopy = faCopy;
  faFileCode = faFileCode;
  speedwalks: Speedwalk[];
  delimiter = ';';

  staticAlertClosed = true;

  constructor(
    private clipboardService: ClipboardService,
    private speedwalkService: SpeedwalkService
  ) {}

  ngOnInit(): void {
    this.getSpeedwalks();
  }

  onChangeSearch(search: string): void {
    this.getSpeedwalks();

    if (search === '') {
      return;
    }

    search = search.toLocaleLowerCase();

    this.speedwalks = this.speedwalks.filter(speedwalk =>  {
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
    const text = directions.join(this.delimiter);
    this.clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onCopyMudletAlias(speedwalk: Speedwalk): void {
    const directions = speedwalk.directions.join(this.delimiter);
    const text = `function createAlias()
  if exists("${speedwalk.name}", "alias") == 0 then
    permAlias("${speedwalk.name}", "Speedwalks", "^${speedwalk.name}$", [[send ("${directions}")]])
  end
end`;
    this.clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onCopyCmudAlias(speedwalk: Speedwalk): void {
    const directions = speedwalk.directions.join(this.delimiter);
    const text = `#ALIAS ${speedwalk.name} {${directions}}`;
    this.clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onCmudAliasCreationScript(): void {
    let text = '';
    this.speedwalks.forEach((speedwalk) => {
      const directions = speedwalk.directions.join(this.delimiter);
      text = text.concat(`#ALIAS ${speedwalk.name} {${directions}}`, '\n');
    });

    this.clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onMudletAliasCreationScript(): void {
    let text = 'function createAlias()\n';
    this.speedwalks.forEach((speedwalk) => {
      const directions = speedwalk.directions.join(this.delimiter);
      const createAliasScript = `if exists("${speedwalk.name}", "alias") == 0 then
  permAlias("${speedwalk.name}", "Speedwalks", "^${speedwalk.name}$", [[send ("${directions}")]])
end`;
      text = text.concat(createAliasScript, '\n');
    });
    text = text.concat('end');

    this.clipboardService.copyFromContent(text);
    this.staticAlertClosed = false;
    setTimeout(() => (this.staticAlertClosed = true), 2000);
  }

  onChangeDelimiter(delimiter: string) {
    this.delimiter = delimiter;
  }

  getSpeedwalks(): void {
    this.speedwalkService
      .getSpeedWalks()
      .subscribe((speedwalks) => (this.speedwalks = speedwalks));
  }
}
