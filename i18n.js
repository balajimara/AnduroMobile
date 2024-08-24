import 'intl-pluralrules';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import enTranslation from './languages/en/translation.json';
import esTranslation from './languages/es/translation.json';

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: esTranslation,
      },
    },
  });

  export default i18n 