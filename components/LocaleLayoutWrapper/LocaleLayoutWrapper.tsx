import { NextIntlClientProvider } from "next-intl";
import { useMessages, useLocale } from "next-intl";
import { ReactNode } from "react";

export default function LocaleLayoutWrapper({ children }: { children: ReactNode }) {
    const messages = useMessages();
    const locale = useLocale();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
