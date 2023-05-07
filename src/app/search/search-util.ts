import {SearchConfig} from "./search";

export function toRequestParameters(config: SearchConfig){
  const params: string[] = [];
  const groups = config.searchOptionGroups;
  for (let group of groups) {
    const options = group.options.filter(o => o.value);
    if(options.length > 0){
      const groupParams = options.map(o => o.parameter??group.parameter + "=" + o.value).join("&");
      params.push(groupParams);
    }
  }
  return params.join("&");
}
