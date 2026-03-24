import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservar Turno | Dra. María Fernanda Menendez',
  description: 'Reservá tu turno de psiquiatría online. Consultá la agenda disponible y coordiná tu cita presencial o virtual en Montevideo.',
  openGraph: {
    title: 'Reservar Turno | Dra. María Fernanda Menendez',
    description: 'Reservá tu turno de psiquiatría online. Consultas presenciales y virtuales.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dra. María Fernanda Menendez - Médica Psiquiatra en Montevideo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reservar Turno | Dra. María Fernanda Menendez',
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
