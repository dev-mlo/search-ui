import { Component } from '@angular/core';
import {SearchConfig} from "./search/search";
import {toRequestParameters} from "./search/search-util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search';

  _config: SearchConfig =  {
    searchOptionGroups: [
      {parameter: 'input', display: "Group Input", style: "single-input", ngStyle: {width: "100%"}, options:[
          {display: "Search term", value: "", ngStyle: {width: "100%"}}
        ]},
      {parameter: 'multi-1', display: "Multi select 1", style: "multi-select", options: [
          {display: "Multi 1", value: false},
          {display: "Multi 2", value: false},
          {display: "Multi 3", value: false},
          {display: "Multi 4", value: false},
          {display: "Multi 5", value: false},
        ]},
      {parameter: 'single-1', display: "Single select", style: "single-select", options: [
          {display: "Single 1", value: false},
          {display: "Single 2", value: false},
          {display: "Single 3", value: false},
        ]},
      {parameter: 'multi-2', display: "Multi select 2", style: "multi-select", options: [
          {display: "Multi 1", value: false},
          {display: "Multi 2", value: false},
          {display: "Multi 3", value: false},
          {display: "Multi 4", value: false},
          {display: "Multi 5", value: false},
        ]},
    ]
  }

  set config(value: SearchConfig){
    this._config = value;
  }

  get config(): SearchConfig{
    return this._config;
  }

  _requestParams: string = '';
  set requestParams(value: string){
    this._requestParams = value;
  }

  get requestParams(){
    return this._requestParams;
  }

  search(searchConfig: SearchConfig) {
    this.requestParams = toRequestParameters(searchConfig);
  }
}
