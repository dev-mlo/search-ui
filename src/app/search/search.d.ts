
export type SearchConfig = {
  searchOptionGroups: SearchOptionGroup[]
}

export type SearchOptionGroup = {
  style: 'multi-select' | 'single-select' |  'single-input',
  parameter?: string,
  display: string,
  options: SearchOption[],
  ngStyle?: {[klass: string]: any} | undefined | null,
}

export type SearchOption = {
  key?: string,
  parameter?: string,
  display: string,
  value: any,
  ngStyle?: {[klass: string]: any} | undefined | null,
}
