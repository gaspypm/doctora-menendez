"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

interface BookingFormProps {
  selectedDate: Date | null
  selectedTime: string | null
}

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

export function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    modality: "presencial",
    reason: "",
    healthInsurance: "",
    consent: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
          ¡Solicitud enviada!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Tu solicitud de turno para el {selectedDate?.getDate()} de {selectedDate && monthNames[selectedDate.getMonth()]} a las {selectedTime} ha sido recibida. 
          Recibirás confirmación por correo electrónico o mensaje.
        </p>
        <Button 
          className="mt-8"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              age: "",
              modality: "presencial",
              reason: "",
              healthInsurance: "",
              consent: false
            })
          }}
        >
          Solicitar otro turno
        </Button>
      </div>
    )
  }

  const isFormValid = formData.name && formData.email && formData.phone && formData.consent && selectedDate && selectedTime

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Selected slot display */}
      {selectedDate && selectedTime && (
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground">Turno seleccionado</p>
          <p className="font-medium text-foreground mt-1">
            {selectedDate.getDate()} de {monthNames[selectedDate.getMonth()]} de {selectedDate.getFullYear()} a las {selectedTime}
          </p>
        </div>
      )}

      {!selectedDate || !selectedTime ? (
        <div className="p-4 rounded-xl bg-muted/50 text-center">
          <p className="text-muted-foreground">
            Seleccioná un día y horario en el calendario para continuar.
          </p>
        </div>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre y apellido *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tu nombre completo"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="tu@email.com"
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+598 99 123 456"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Edad o rango etario</Label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Seleccionar</option>
            <option value="13-17">13-17 años (adolescente)</option>
            <option value="18-30">18-30 años</option>
            <option value="31-50">31-50 años</option>
            <option value="51-65">51-65 años</option>
            <option value="65+">65+ años (adulto mayor)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Modalidad de consulta</Label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modality"
              value="presencial"
              checked={formData.modality === "presencial"}
              onChange={handleInputChange}
              className="w-4 h-4 text-primary border-border focus:ring-primary"
            />
            <span className="text-sm text-foreground">Presencial</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modality"
              value="virtual"
              checked={formData.modality === "virtual"}
              onChange={handleInputChange}
              className="w-4 h-4 text-primary border-border focus:ring-primary"
            />
            <span className="text-sm text-foreground">Virtual</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Motivo de consulta</Label>
        <Textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          placeholder="Describí brevemente el motivo de tu consulta (opcional)"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="healthInsurance">Obra social / Mutualista (opcional)</Label>
        <Input
          id="healthInsurance"
          name="healthInsurance"
          value={formData.healthInsurance}
          onChange={handleInputChange}
          placeholder="Ej: COSEM, SMI, Médica Uruguaya, etc."
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => 
            setFormData(prev => ({ ...prev, consent: checked === true }))
          }
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          Acepto ser contactado/a para coordinar la cita y entiendo que la solicitud queda sujeta a confirmación.
        </Label>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? "Enviando solicitud..." : "Solicitar turno"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Recibirás confirmación por correo electrónico o mensaje.
      </p>
    </form>
  )
}
