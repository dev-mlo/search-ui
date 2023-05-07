import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchOptionGroup} from "../search";

@Component({
  selector: 'search-option-group',
  templateUrl: './search-option-group.component.html',
  styleUrls: ['./search-option-group.component.scss']
})
export class SearchOptionGroupComponent {
  _displayName?: string;
  @Input() set displayName(value: string | undefined){this._displayName = value;}
  get displayName(): string | undefined{return this._displayName;}

  _searchOptionGroup!: SearchOptionGroup;
  @Input() set searchOptionGroup(value: SearchOptionGroup){
    this._searchOptionGroup = value;
  }
  get searchOptionGroup(){
    return this._searchOptionGroup;
  }
  @Output() searchOptionGroupChange = new EventEmitter<SearchOptionGroup>

  _filterText: string = '';
  @Input() set filterText(value: string){
    this._filterText = value;
  }
  get filterText(){
    return this._filterText;
  }
}
