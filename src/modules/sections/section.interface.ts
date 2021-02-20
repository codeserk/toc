import { SavedCheck } from '../checks/check.interface'

export interface Section {
  name: string
  position: number
  checks: Record<string, SavedCheck>
}

export interface SavedSection extends Section {
  id: string
}
