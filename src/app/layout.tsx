import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const title = "Мобільний шиномонтаж 24/7 у Хмельницькому та області — TSK mobile";
const description =
  "Мобільний шиномонтаж TSK mobile у Хмельницькому та області: ремонт, заміна шин, зварювання та рихтування дисків. Приїзд за 30–60 хв, цілодобово 24/7.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "мобільний шиномонтаж Хмельницький",
    "шиномонтаж 24/7 Хмельницький",
    "виїзний шиномонтаж Хмельницький",
    "мобільний шиномонтаж Хмельницька область",
    "ремонт шин з виїздом",
    "шиномонтаж цілодобово Хмельницький",
    "рихтування дисків Хмельницький",
    "зварювання дисків на виїзді",
    "продаж б/у гуми Хмельницький",
    "б/у диски Хмельницький",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/hero-banner.jpg", width: 2976, height: 1440, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground pb-14 lg:pb-0">
        {children}
      </body>
    </html>
  );
}
