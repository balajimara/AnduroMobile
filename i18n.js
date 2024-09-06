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


// import 'intl-pluralrules';
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
// import { CachedDataTypes} from "./src/model/AnduroStorageModel"
// import { getCachedData } from "./src/Utility/AndurocommonUtils"
// import * as RNLocalize from 'react-native-localize';  // Import react-native-localize

// const cachedata = async ()=> {
//   const userdata = await getCachedData(CachedDataTypes.userdata)
//   return userdata
// }

// const languages = ['en', 'es'];
// const userdata = cachedata()
// const detectedLanguage = RNLocalize.getLocales()[0].languageCode;  // Get device language
// console.log("detcjedddlanguageee====",detectedLanguage)
// const language = userdata?.selectedLanguage ? userdata?.selectedLanguage : detectedLanguage;
// console.log('languageeeee======', language);

// i18n
//   .use(RNLanguageDetector)
//   .use(initReactI18next)
//   .init(
//     {
//       lng: language,
//       fallbackLng: "en",
//       debug: false,
//       supportedLngs: languages,
//     },
//     () => {},
//   )

//   export default i18n
