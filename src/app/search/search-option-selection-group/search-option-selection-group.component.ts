import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchOption, SearchOptionGroup} from "../search";
import {ulid} from "ulid";

@Component({
  template: '',
})
export class SearchOptionSelectionGroupComponent {
  _searchOptionGroup!: SearchOptionGroup;
  @Input() set searchOptionGroup(value: SearchOptionGroup){
    const updatedOptions = value.options.map(o => {
      if(!o.key){
        return{...o, key: ulid()}
      }
      return o
    })

    this._searchOptionGroup = {...value, options: updatedOptions};
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



  public filterOptions(){
    return this.searchOptionGroup.options.filter(o => {
      return this._filterText.trim().length === 0 || o.display.includes(this._filterText.trim());
    })
  }

  commit(option: SearchOption, value: any) {
    const updatedOptions = this._searchOptionGroup.options.map(o =>{
      if(o.key === option.key){
        return {...o, value: value}
      }
      return o;
    })
    this.searchOptionGroup = {...this.searchOptionGroup, options: updatedOptions}
    this.searchOptionGroupChange.emit(this.searchOptionGroup)
  }
}
