import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchConfig, SearchOption, SearchOptionGroup} from "./search";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  _searchConfig!: SearchConfig;
  @Input() set searchConfig(value: SearchConfig){
    this._searchConfig = value;
    this.onSearchTermChanged(this._searchConfig)
  }

  get searchConfig(){
    return this._searchConfig;
  }

  @Output() searchConfigChange = new EventEmitter<SearchConfig>

  _selectedSearchTerms: SearchOption[] = [];
  set selectedSearchTerms(value: SearchOption[]){
    this._selectedSearchTerms = value;
  }

  get selectedSearchTerms(){
    return this._selectedSearchTerms
  }

  _filterText: string = '';
  set filterText(value: string){
    this._filterText = value;
  }

  get filterText(){
    return this._filterText;
  }

  _hideOptions = true;
  set hideOptions(value: boolean){
    this._hideOptions = value;
  }

  get hideOptions(){
    return this._hideOptions;
  }

  @Output() search = new EventEmitter<SearchConfig>()

  updateSearchConfig($event: SearchOptionGroup) {
    const updatedGroups = this.searchConfig.searchOptionGroups.map(og => {
      if( og.display === $event.display){
        return $event
      }
      return og;
    })
    this.searchConfig = {...this.searchConfig, searchOptionGroups: updatedGroups}
    this.searchConfigChange.emit(this.searchConfig)
  }

  remove(term: SearchOption) {
    this.selectedSearchTerms = this.selectedSearchTerms.filter(o => o.key !== term.key);
    const groups = this.searchConfig.searchOptionGroups;
    for (let group of groups) {
      const updateOptions = group.options.map(o => {
        if(o.key === term.key){
          o.value = undefined;
        }
        return o;
      });
      group.options = [...updateOptions];
    }
    this.searchConfig = {...this.searchConfig, searchOptionGroups: groups}
  }

  onSearchTermChanged($event: SearchConfig) {
    this.selectedSearchTerms = $event.searchOptionGroups
      .flatMap(o => o.options)
      .filter(o => o.value);
  }
}
