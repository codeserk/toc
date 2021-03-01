import { createI18n } from 'vue-i18n'
import es from './es'

export const locale = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es,
  },
})
