import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

export function getTranslationProviders(): Promise<Object[]> {
    // Get the locale id from the global
    // const locale = localStorage['locale'] as string;
    const locale = localStorage['localeId'];
    // return no providers if fail to get translation file for locale
    const noProviders: Object[] = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en-US') {
        return Promise.resolve(noProviders);
    }
    // Ex: 'locale/messages.es.xlf`
    return getTranslationFilesWithWebpack(locale)
        .then( (translations ) => [
                { provide: TRANSLATIONS, useValue: translations },
                { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
                { provide: LOCALE_ID, useValue: locale }
            ])
        .catch(() => noProviders); // ignore if file not found
}

declare var System;

function getTranslationFilesWithWebpack(locale) {
    return System.import('../assets/locale/messages.' + locale + '.xlf');
};
