import { Heart, User, Monitor, Sparkles } from "lucide-react"

const approaches = [
  {
    icon: Heart,
    title: "Escucha y acompañamiento",
    description: "Un espacio seguro donde podés expresarte libremente, sin juicios ni presiones."
  },
  {
    icon: User,
    title: "Atención personalizada",
    description: "Cada persona es única. El tratamiento se adapta a tu situación y necesidades específicas."
  },
  {
    icon: Monitor,
    title: "Consultas presenciales y virtuales",
    description: "Flexibilidad para elegir la modalidad que mejor se ajuste a tu rutina y comodidad.",
    href: "/turnos"
  },
  {
    icon: Sparkles,
    title: "Enfoque integral",
    description: "Combinamos herramientas terapéuticas y farmacológicas basadas en evidencia científica."
  }
]

export function ApproachSection() {
  return (
    <section id="enfoque" aria-labelledby="approach-heading" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Enfoque
          </span>
          <h2 id="approach-heading" className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
            Un espacio hecho para tu comodidad
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            La atención busca brindar escucha abierta, contención, claridad diagnóstica y un abordaje respetuoso de cada situación.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="mt-5 font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
