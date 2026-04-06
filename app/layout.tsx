import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/json-ld";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-serif",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
};

export const metadata: Metadata = {
	metadataBase: new URL(getSiteUrl()),
	title: {
		default: siteConfig.defaultTitle,
		template: siteConfig.titleTemplate,
	},
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	authors: [{ name: siteConfig.name, url: getSiteUrl() }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
		title: "Menendez",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical: "/",
		languages: {
			"es-UY": "/",
		},
	},
	category: "health",
	icons: {
		icon: "/favicon.png",
		apple: "/favicon.png",
	},
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: "/",
		siteName: siteConfig.name,
		title: siteConfig.defaultTitle,
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: `${siteConfig.name} — Médica Psiquiatra en Montevideo`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.defaultTitle,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className="bg-background">
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<meta name="apple-mobile-web-app-title" content="Menendez" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body
				className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
			>
				<JsonLd />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
