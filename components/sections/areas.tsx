interface Area {
  label: string
  href?: string
}

const areaRows: Area[][] = [
  [
    { label: "Ansiedad", href: "https://www.instagram.com/p/DJXlm12xQjv/?img_index=1" },
    { label: "Depresión", href: "https://www.instagram.com/p/DJR5Tp9xtq0/?img_index=1" },
    { label: "Insomnio", href: "https://www.instagram.com/p/DJeYRwUxmz4/?img_index=1" },
    { label: "Estrés" },
    { label: "Estrés postraumático" },
    { label: "Burnout" },
  ],
  [
    { label: "Dificultades en los vínculos" },
    { label: "Patrones repetitivos en relaciones" },
    { label: "Experiencias traumáticas o situaciones pasadas no resueltas" },
  ],
  [
    { label: "Salud mental en adolescentes" },
    { label: "Salud mental en adultos mayores" },
  ]
]

export function AreasSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Áreas de interés
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
            Consultas más frecuentes
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cada consulta es un espacio para abordar lo que te preocupa, con un enfoque profesional y humano.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 items-center">
          {areaRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
              {row.map((area, index) => (
                area.href ? (
                  <a
                    key={index}
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-secondary/40 text-foreground text-sm font-medium hover:bg-secondary transition-colors cursor-pointer"
                  >
                    {area.label}
                  </a>
                ) : (
                  <span
                    key={index}
                    className="px-5 py-2.5 rounded-full bg-secondary/40 text-foreground text-sm font-medium hover:bg-secondary transition-colors cursor-default"
                  >
                    {area.label}
                  </span>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

