import type { Metadata } from 'next'

const title = 'Reservar Turno'
const description =
  'Reservá tu turno de psiquiatría online. Consultá la agenda disponible y coordiná tu cita presencial o virtual en Montevideo.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/turnos',
  },
  openGraph: {
    title: `${title} | Dra. María Fernanda Menéndez`,
    description: 'Reservá tu turno de psiquiatría online. Consultas presenciales y virtuales.',
    url: '/turnos',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dra. María Fernanda Menéndez - Médica Psiquiatra en Montevideo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Dra. María Fernanda Menéndez`,
    description: 'Reservá tu turno de psiquiatría online. Consultas presenciales y virtuales.',
    images: ['/images/og-image.png'],
  },
}

export default function TurnosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
