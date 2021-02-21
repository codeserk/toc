import { Storage } from '@capacitor/core'
import { computed, reactive, ref } from 'vue'
import { SavedCheck } from '../checks/check.interface'
import { SavedSection, Section } from './section.interface'

const state = {
  isEditing: ref<boolean>(false),

  sections: reactive<Record<string, SavedSection>>({}),
}

// Getters
export const isEditing = computed((): boolean => state.isEditing.value)

export const sections = computed(() => Object.values(state.sections))
export const sectionsSorted = computed((): SavedSection[] =>
  sections.value.sort((sectionA, sectionB) => sectionB.position - sectionA.position),
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

/**
 * Persists all the sections in storage.
 */
async function persist() {
  const data = JSON.stringify(state.sections)

  await Storage.set({ key: 'sections', value: data })
}
