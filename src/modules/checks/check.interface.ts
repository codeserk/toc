export interface Check {
  name: string
  position: number
}

export interface SavedCheck extends Check {
  id: string
}

export enum CheckEvent {
  Done = 'done',
  Undone = 'undone',
  PhotoAdded = 'photo-added',
}

export interface CheckLogItem {
  date: Date
  event: CheckEvent
}
