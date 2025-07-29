import "./globals.css";
import "modern-normalize";
import LocaleLayoutWrapper from "@/components/LocaleLayoutWrapper/LocaleLayoutWrapper";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
    subsets: ["latin", "cyrillic"],
    weight: ["200", "400", "700"],
    variable: "--roboto",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.variable}>
                <LocaleLayoutWrapper>{children}</LocaleLayoutWrapper>
            </body>
        </html>
    );
}
