const areas = [
  "Ansiedad",
  "Depresión",
  "Insomnio",
  "Estrés",
  "Bienestar emocional",
  "Salud mental en adolescentes",
  "Salud mental en adultos mayores",
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
            Temas que trabajamos juntos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cada consulta es un espacio para abordar lo que te preocupa, con un enfoque profesional y humano.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areas.map((area, index) => (
            <span
              key={index}
              className="px-5 py-2.5 rounded-full bg-secondary/40 text-foreground text-sm font-medium hover:bg-secondary transition-colors cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
