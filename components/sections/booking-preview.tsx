import Link from "next/link"
import { Button } from "@/components/ui/button"

const mockSchedule = [
  { day: "Lun", date: "24", slots: [{ time: "09:00", available: true }, { time: "11:00", available: false }, { time: "15:00", available: true }] },
  { day: "Mar", date: "25", slots: [{ time: "10:00", available: true }, { time: "14:00", available: true }, { time: "16:00", available: false }] },
  { day: "Mié", date: "26", slots: [{ time: "09:00", available: false }, { time: "11:00", available: true }, { time: "17:00", available: true }] },
  { day: "Jue", date: "27", slots: [{ time: "10:00", available: true }, { time: "12:00", available: false }, { time: "15:00", available: true }] },
  { day: "Vie", date: "28", slots: [{ time: "09:00", available: true }, { time: "11:00", available: true }, { time: "14:00", available: false }] },
]

export function BookingPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Agenda online
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
              Encontrá el horario que mejor se adapte a vos
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Accedé a la agenda actualizada, elegí entre los horarios disponibles y reservá tu turno en pocos minutos.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="px-8">
                <Link href="/turnos">Ver agenda y reservar</Link>
              </Button>
            </div>
          </div>

          {/* Mock Calendar */}
          <div className="bg-muted/30 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-foreground">Marzo 2026</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  Disponible
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-border" />
                  Ocupado
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {mockSchedule.map((day, dayIndex) => (
                <div key={dayIndex} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
                  <div className="text-lg font-medium text-foreground mb-3">{day.date}</div>
                  <div className="space-y-2">
                    {day.slots.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className={`text-xs py-1.5 px-2 rounded-md transition-colors ${
                          slot.available
                            ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                            : "bg-border/50 text-muted-foreground"
                        }`}
                      >
                        {slot.time}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
