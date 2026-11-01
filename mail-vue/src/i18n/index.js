import { createI18n } from 'vue-i18n';
import en from './en.js'
import zh from './zh.js'
import zhTW from './tw.js'
const i18n = createI18n({
    legacy: false,
    messages: {
        zh,
        zhTW,
        en
    },
});

export default i18n;
