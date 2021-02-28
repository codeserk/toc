import { Storage } from '@capacitor/core'
import { computed, reactive, ref } from 'vue'
import { SavedCheck } from '../checks/check.interface'
import { isCheckCompleted } from '../checks/check.store'
import { getRandomSticker } from '../stickers/sticker.store'
import { periodKey } from '../time/time.store'
import { SavedSection, Section } from './section.interface'

const state = {
  isEditing: ref<boolean>(false),

  sections: reactive<Record<string, SavedSection>>({}),
}

// Getters
export const isEditing = computed((): boolean => state.isEditing.value)

export const sections = computed(() => Object.values(state.sections))
export const sectionsSorted = computed((): SavedSection[] =>
  sections.value.sort((sectionA, sectionB) => sectionA.position - sectionB.position),
)

export const nextSectionPosition = computed(() => {
  if (sectionsSorted.value.length === 0) {
    return 0
  }

  return sectionsSorted.value[sectionsSorted.value.length - 1].position + 1
})

export function getSectionById(id: string): SavedSection | undefined {
  return state.sections[id]
}

export function getSectionSortedChecks(section: Section): SavedCheck[] {
  return Object.values(section.checks).sort((checkA, checkB) => checkA.position - checkB.position)
}

export function isSectionCompleted(id: string): boolean {
  const section = getSectionById(id)
  if (!section) {
    return false
  }

  const checks = Object.keys(section.checks)
  return checks.length > 0 && checks.every(checkId => isCheckCompleted(checkId))
}

export function getStickerAssigned(id: string): string | undefined {
  const section = getSectionById(id)
  if (!section) {
    return
  }

  return section.stickers[periodKey.value]
}

export function getNextCheckPosition(id: string): number {
  const section = getSectionById(id)!
  if (!section) {
    return 0
  }
  const checks = getSectionSortedChecks(section)
  if (checks.length === 0) {
    return 0
  }

  return checks[checks.length - 1].position + 1
}

// Mutations
const mutations = {
  setEditing(isEditing: boolean) {
    state.isEditing.value = isEditing
  },

  setSection(section: SavedSection) {
    state.sections[section.id] = section
  },

  removeSection(id: string) {
    delete state.sections[id]
  },
}

// Actions
export async function loadSections() {
  try {
    const data = await Storage.get({ key: 'sections' })
    if (data?.value) {
      const sections = JSON.parse(data?.value)

      for (const id in sections) {
        mutations.setSection(sections[id])
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export function startEditing() {
  mutations.setEditing(true)
}
export function stopEditing() {
  mutations.setEditing(false)
}

export async function addSection(name: string): Promise<SavedSection> {
  const id = new Date().getTime().toString()
  const savedSection: SavedSection = {
    id,
    name,
    position: nextSectionPosition.value,
    checks: {},
    stickers: {},
  }

  mutations.setSection(savedSection)
  await persist()

  return savedSection
}

export async function addCheck(sectionId: string, name: string) {
  const section = getSectionById(sectionId)
  if (!section) {
    return
  }

  const id = new Date().getTime().toString()
  const savedCheck: SavedCheck = {
    id,
    name,
    position: getNextCheckPosition(sectionId),
  }

  section.checks[id] = savedCheck
  mutations.setSection(section)

  await persist()
}

export async function updateSection(section: SavedSection) {
  mutations.setSection(section)

  await persist()
}

export async function assignSticker(sectionId: string) {
  const section = getSectionById(sectionId)
  if (!section) {
    return
  }
  if (section.stickers[periodKey.value]) {
    return
  }

  const sticker = getRandomSticker()
  section.stickers[periodKey.value] = sticker

  await persist()
}

export async function removeSection(id: string) {
  const section = getSectionById(id)
  if (!section) {
    return
  }

  mutations.removeSection(section.id)
  await persist()
}

/**
 * Persists all the sections in storage.
 */
async function persist() {
  const data = JSON.stringify(state.sections)

  await Storage.set({ key: 'sections', value: data })
}
