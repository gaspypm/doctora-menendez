import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dra. María Fernanda Menendez | Médica Psiquiatra en Montevideo',
  description: 'Atención psiquiátrica profesional y humana para adolescentes, adultos y adultos mayores en Montevideo, Uruguay. Consultas presenciales y virtuales.',
  keywords: ['psiquiatra', 'montevideo', 'salud mental', 'psiquiatría', 'Uruguay', 'consulta psiquiátrica'],
  authors: [{ name: 'Dra. María Fernanda Menendez' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Dra. María Fernanda Menendez | Médica Psiquiatra',
    description: 'Un espacio profesional y humano para priorizar tu salud mental.',
    locale: 'es_UY',
    type: 'website',
    images: ["/og/default-og.jpg"],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. María Fernanda Menendez | Médica Psiquiatra',
    description: 'Un espacio profesional y humano para priorizar tu salud mental.',
    images: ['/og/default-og.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
