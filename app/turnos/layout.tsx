import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservar turno",
  description: "Agenda online para consultas presenciales en Montevideo o virtuales. Elegí fecha y horario, y reservá tu turno.",
};

export default function TurnosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
