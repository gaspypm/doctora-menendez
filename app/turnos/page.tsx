"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingCalendar } from "@/components/booking-calendar"
import { BookingForm } from "@/components/booking-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Las consultas pueden ser virtuales?",
    answer: "Sí, ofrezco consultas tanto presenciales en Malvín, Montevideo, como virtuales por videollamada. Podés elegir la modalidad que mejor se adapte a tu situación al momento de solicitar el turno."
  },
  {
    question: "¿Qué pasa después de solicitar un turno?",
    answer: "Una vez enviada tu solicitud, la recibiré y me pondré en contacto contigo por correo electrónico o mensaje para confirmar la cita y darte las indicaciones necesarias para la consulta."
  },
  {
    question: "¿Cómo se confirma la reserva?",
    answer: "La reserva queda confirmada cuando recibas un mensaje de confirmación de mi parte. Si no encontrás un horario adecuado, podés dejar tu consulta y me comunicaré contigo para coordinar."
  },
  {
    question: "¿Atiende con obra social o mutualista?",
    answer: "Actualmente trabajo en COSEM donde se atiende a afiliados. Para consultas particulares, podés consultar sobre convenios o reintegros según tu cobertura."
  }
]

export default function TurnosPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleSelectSlot = (date: Date, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background py-12 lg:py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                Reservar turno
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Elegí un día y horario disponible para coordinar tu consulta. Las citas quedan sujetas a confirmación.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Calendar */}
              <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-medium text-xl text-foreground mb-6">
                  Seleccioná fecha y horario
                </h2>
                <BookingCalendar 
                  onSelectSlot={handleSelectSlot}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              </div>

              {/* Form */}
              <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-medium text-xl text-foreground mb-6">
                  Completá tus datos
                </h2>
                <BookingForm 
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-background border-t border-border">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-8">
              Preguntas frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 rounded-2xl bg-muted/30 text-center">
              <p className="text-muted-foreground">
                ¿No encontrás un horario adecuado? Dejá tu consulta y me comunicaré contigo para coordinar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
