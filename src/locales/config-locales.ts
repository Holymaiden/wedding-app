export const fallbackLng = 'en';
export const languages = ['hi', 'en'];
export const defaultNS = 'common';
export const cookieName = 'i18next';

// ----------------------------------------------------------------------

export function i18nOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    lng,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: languages,
  };
}

// ----------------------------------------------------------------------

export const changeLangMessages = {
  hi: {
    success: 'भाषा बदल दी गई है!',
    error: 'भाषा बदलने में त्रुटि!',
    loading: 'प्रतीक्षा करें...',
  },
  en: {
    success: 'Language has been changed!',
    error: 'Error changing language!',
    loading: 'Loading...',
  },
};
