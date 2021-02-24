export interface PeriodConfig {
  isDisabled?: boolean
}

export interface Period extends PeriodConfig {
  key: string
  date: Date
  localized: string
}
