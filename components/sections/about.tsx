import Image from "next/image";

export function AboutSection() {
	return (
		<section id="sobre-mi" className="py-20 lg:py-28 bg-background">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
					{/* Image — altura acotada en móvil para no ocupar toda la pantalla al hacer scroll */}
					<div className="relative mx-auto w-full max-w-sm md:max-w-none md:mx-0">
						<div className="absolute -inset-4 bg-secondary/20 rounded-3xl" />
						<div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden">
							<Image
								src="/images/perfil2.jpg"
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
								Desde muy temprana edad, supe que quería dedicarme a la
								medicina. Durante la adolescencia, descubrí mi vocación por la
								salud mental, un campo que me permite combinar el rigor
								científico con una profunda conexión humana.
							</p>
							<p>
								Me formé como médica en la Facultad de Medicina de la
								Universidad de la República y realicé mi residencia de
								psiquiatría en el Hospital Pasteur y el Hospital Vilardebó,
								centros de referencia en salud mental en Uruguay.
							</p>
							<p>
								Complementé mi formación con estudios en Terapia
								Cognitivo-Conductual en SUAMOC y Terapia EMDR en el EMDR Institute, Inc., lo que me permite ofrecer un
								abordaje integral que combina tratamiento farmacológico si es necesario con
								herramientas terapéuticas basadas en evidencia.
							</p>
							<p>
								Actualmente, además de mi práctica privada, trabajo en COSEM y
								en el Hospital Vilardebó, manteniéndome actualizada y
								comprometida con la atención de calidad para adolescentes,
								adultos y adultos mayores.
							</p>
						</div>

						{/* Credentials */}
						<div className="mt-10 grid grid-cols-2 gap-4">
							<a
								href="https://www.fmed.edu.uy/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
							>
								<p className="text-2xl font-serif font-medium text-primary">
									UdelaR
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									Facultad de Medicina
								</p>
							</a>
							<a
								href="https://www.suamoc.com.uy/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
							>
								<p className="text-2xl font-serif font-medium text-primary">
									SUAMOC
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									Sociedad Uruguaya de Análisis y Modificación de la Conducta
								</p>
							</a>
							<a
								href="https://www.emdr.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
							>
								<p className="text-2xl font-serif font-medium text-primary">
									EMDR
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									EMDR Institute, Inc.
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
