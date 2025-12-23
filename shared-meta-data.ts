
import { Metadata } from "next";

const title = 'Mehmet Han Ozansoy';
const description = 'Personel portfolio of Mehmet Han Ozansoy, a software developer specializing in IT constultant.';

export const sharedMetaData: Metadata = {
  title,
  description,
    keywords: ["portfolio", "developer", "projects", "skills"],
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    openGraph: {
        title,
        description,
        url: "https://mehmethanozansoy.dev",
        siteName: "Mehmet Han Ozansoy Portfolio",
        images: [
            {
                url: "https://mehmethanozansoy.dev/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mehmet Han Ozansoy Portfolio Open Graph Image",
            },  
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        title,
        description,
        creator: "@MrNeo759734",
        site: "@MrNeo759734",
        card: "summary_large_image",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};