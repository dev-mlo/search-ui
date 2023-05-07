import {Component} from '@angular/core';
import {
  SearchOptionSelectionGroupComponent
} from "../search-option-selection-group/search-option-selection-group.component";
import {SearchOption} from "../search";

@Component({
  selector: 'app-search-option-single-selection-group',
  templateUrl: './search-option-single-selection-group.component.html',
  styleUrls: ['./search-option-single-selection-group.component.scss']
})
export class SearchOptionSingleSelectionGroupComponent extends SearchOptionSelectionGroupComponent{

  override commit(option: SearchOption, value: any) {
    super.commit(option, value);
  }
}
