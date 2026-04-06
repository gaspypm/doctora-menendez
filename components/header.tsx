"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#enfoque", label: "Enfoque" },
  { href: "/turnos", label: "Turnos" },
  { href: "/#contacto", label: "Contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/40 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-medium text-foreground">
                Dra. María Fernanda Menéndez
              </p>
              <p className="text-xs text-muted-foreground">Médica Psiquiatra</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/turnos">Reservar turno</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav aria-label="Navegación móvil" className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="/turnos" onClick={() => setMobileMenuOpen(false)}>
                  Reservar turno
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
