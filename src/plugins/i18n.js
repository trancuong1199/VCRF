import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import vi from '../locales/vi.json';
const storedLang = localStorage.getItem('lang');

const i18n = createI18n({
  legacy: false,
  locale: storedLang || import.meta.VITE_I18N_LOCALE || 'vi',
  fallbackLocale: import.meta.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en,
    vi,
  },
});

export default i18n;
