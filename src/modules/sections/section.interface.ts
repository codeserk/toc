import { SavedCheck } from '../checks/check.interface'

export interface Section {
  name: string
  position: number
  checks: Record<string, SavedCheck>
  stickers: Record<string, string>
}

export interface SavedSection extends Section {
  id: string
}
