import Link from "next/link"
import { LogoMark } from "./logo"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="w-8 h-8" />
              <div>
                <p className="font-serif text-lg font-medium text-foreground">
                  Dra. María Fernanda Menéndez
                </p>
                <p className="text-sm text-muted-foreground">Médica Psiquiatra</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Atención psiquiátrica profesional y humana para adolescentes, adultos y adultos mayores en Montevideo.
            </p>
          </div>

          {/* Links */}
          <nav aria-labelledby="footer-nav-heading">
            <h3 id="footer-nav-heading" className="font-medium text-foreground mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#sobre-mi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/turnos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Turnos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <address aria-labelledby="footer-contact-heading" className="not-italic">
            <h3 id="footer-contact-heading" className="font-medium text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                Malvín, Montevideo
              </li>
              <li>
                <Link href="/turnos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Consultas presenciales y virtuales
                </Link>
              </li>
              <li>
                <a 
                  href="https://instagram.com/doctora_menendez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              {/* <li>
                <a 
                  href="mailto:contacto@doctoramenendez.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li> */}
            </ul>
          </address>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Dra. María Fernanda Menéndez. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Sitio por</span>
                <a href="https://368bis.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://res.cloudinary.com/dfymg44dc/image/upload/v1773356167/logo_blanco.png" 
                    alt="368bis" 
                    className="h-8 inset-0 invert dark:invert-0 object-contain" 
                  />
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
              Este sitio brinda información institucional y no sustituye una consulta médica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
