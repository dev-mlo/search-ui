import {Component, Input} from '@angular/core';
import {SearchOption} from "../search";

@Component({
  selector: 'app-search-option',
  templateUrl: './search-option.component.html',
  styleUrls: ['./search-option.component.scss']
})
export class SearchOptionComponent {

  _searchOption!: SearchOption;
  @Input() set searchOption(value: SearchOption){
    this._searchOption = value;
  }
}
