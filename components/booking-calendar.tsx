"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimeSlot {
  time: string
  available: boolean
}

interface DaySchedule {
  date: Date
  slots: TimeSlot[]
}

// Generate mock schedule data
function generateMockSchedule(month: number, year: number): DaySchedule[] {
  const schedule: DaySchedule[] = []
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    const dayOfWeek = date.getDay()
    
    // Only weekdays have appointments
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const slots: TimeSlot[] = []
      const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]
      
      times.forEach((time) => {
        // Randomly make some slots unavailable
        slots.push({
          time,
          available: Math.random() > 0.4
        })
      })
      
      schedule.push({ date, slots })
    }
  }
  
  return schedule
}

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

interface BookingCalendarProps {
  onSelectSlot: (date: Date, time: string) => void
  selectedDate: Date | null
  selectedTime: string | null
}

export function BookingCalendar({ onSelectSlot, selectedDate, selectedTime }: BookingCalendarProps) {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState<Date | null>(null)
  
  const schedule = generateMockSchedule(currentMonth, currentYear)
  
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDay(null)
  }
  
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDay(null)
  }
  
  const getDaysInMonth = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const days: (number | null)[] = []
    
    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }
  
  const getDaySchedule = (day: number) => {
    return schedule.find(s => s.date.getDate() === day)
  }
  
  const hasAvailableSlots = (day: number) => {
    const daySchedule = getDaySchedule(day)
    return daySchedule?.slots.some(s => s.available) ?? false
  }
  
  const isPastDay = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayStart
  }
  
  const days = getDaysInMonth()
  const selectedDaySchedule = selectedDay ? getDaySchedule(selectedDay.getDate()) : null
  
  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={prevMonth}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h3 className="font-medium text-lg text-foreground">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <Button variant="ghost" size="icon" onClick={nextMonth}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((name) => (
          <div key={name} className="text-center text-xs text-muted-foreground font-medium py-2">
            {name}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square" />
          }
          
          const isToday = day === today.getDate() && 
                         currentMonth === today.getMonth() && 
                         currentYear === today.getFullYear()
          const isPast = isPastDay(day)
          const hasSlots = hasAvailableSlots(day)
          const isSelected = selectedDay?.getDate() === day && 
                            selectedDay?.getMonth() === currentMonth &&
                            selectedDay?.getFullYear() === currentYear
          
          return (
            <button
              key={day}
              onClick={() => {
                if (!isPast && hasSlots) {
                  setSelectedDay(new Date(currentYear, currentMonth, day))
                }
              }}
              disabled={isPast || !hasSlots}
              className={`
                aspect-square rounded-lg text-sm font-medium transition-all
                flex items-center justify-center relative
                ${isSelected 
                  ? "bg-primary text-primary-foreground" 
                  : isToday 
                    ? "bg-secondary/50 text-foreground" 
                    : isPast || !hasSlots
                      ? "text-muted-foreground/40 cursor-not-allowed"
                      : "text-foreground hover:bg-secondary/30"
                }
              `}
            >
              {day}
              {hasSlots && !isPast && (
                <span className={`absolute bottom-1 w-1 h-1 rounded-full ${isSelected ? "bg-primary-foreground" : "bg-primary"}`} />
              )}
            </button>
          )
        })}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Disponible
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-border" />
          Sin disponibilidad
        </div>
      </div>
      
      {/* Time Slots */}
      {selectedDaySchedule && (
        <div className="pt-6 border-t border-border">
          <h4 className="font-medium text-foreground mb-4">
            Horarios disponibles para el {selectedDay?.getDate()} de {monthNames[currentMonth]}
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {selectedDaySchedule.slots.map((slot, index) => {
              const isSlotSelected = selectedDate?.getDate() === selectedDay?.getDate() &&
                                    selectedDate?.getMonth() === selectedDay?.getMonth() &&
                                    selectedTime === slot.time
              
              return (
                <button
                  key={index}
                  onClick={() => slot.available && selectedDay && onSelectSlot(selectedDay, slot.time)}
                  disabled={!slot.available}
                  className={`
                    py-3 px-4 rounded-lg text-sm font-medium transition-all
                    ${isSlotSelected
                      ? "bg-primary text-primary-foreground"
                      : slot.available
                        ? "bg-secondary/30 text-foreground hover:bg-secondary"
                        : "bg-border/30 text-muted-foreground/50 cursor-not-allowed line-through"
                    }
                  `}
                >
                  {slot.time}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
