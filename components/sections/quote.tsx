import { LogoMark } from "@/components/logo"

export function QuoteSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <LogoMark className="w-12 h-12 mx-auto mb-8 opacity-60" />
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed text-balance">
          &ldquo;Te espero en un espacio pensado para tu comodidad, con escucha abierta para comenzar a priorizar tu salud mental.&rdquo;
        </blockquote>
        <p className="mt-8 text-muted-foreground">
          — Dra. María Fernanda Menéndez
        </p>
      </div>
    </section>
  )
}
