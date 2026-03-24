import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/doctor-consulting.jpg"
                alt="Dra. María Fernanda Menendez en consulta"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Sobre la doctora
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
              Dra. María Fernanda Menendez
            </h2>
            
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Desde muy temprana edad, supe que quería dedicarme a la medicina. Durante la adolescencia, descubrí mi vocación por la salud mental, un campo que me permite combinar el rigor científico con una profunda conexión humana.
              </p>
              <p>
                Me formé como médica en la Facultad de Medicina de la Universidad de la República y realicé mi residencia de psiquiatría en el Hospital Pasteur y el Hospital Vilardebó, centros de referencia en salud mental en Uruguay.
              </p>
              <p>
                Complementé mi formación con estudios en Terapia Cognitivo-Conductual en SUAMOC, lo que me permite ofrecer un abordaje integral que combina tratamiento farmacológico con herramientas terapéuticas basadas en evidencia.
              </p>
              <p>
                Actualmente, además de mi práctica privada, trabajo en COSEM y en el Hospital Vilardebó, manteniéndome actualizada y comprometida con la atención de calidad para adolescentes, adultos y adultos mayores.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/50">
                <p className="text-2xl font-serif font-medium text-primary">UdelaR</p>
                <p className="text-sm text-muted-foreground mt-1">Facultad de Medicina</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <p className="text-2xl font-serif font-medium text-primary">SUAMOC</p>
                <p className="text-sm text-muted-foreground mt-1">Terapia Cognitivo-Conductual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
