import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
    internationalization: {
        locales: [Locales.ENGLISH, Locales.UKRAINIAN],
        defaultLocale: Locales.UKRAINIAN,
    },
};

export default config;
