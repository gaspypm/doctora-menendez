import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Monitor, Calendar } from "lucide-react";

const highlights = [
	{ icon: Monitor, text: "Atención presencial y virtual" },
	{ icon: MapPin, text: "Malvín, Montevideo" },
	{ icon: Calendar, text: "Agenda online" },
];

export function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-muted/30">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid gap-8 sm:gap-12 lg:gap-16 items-center lg:grid-cols-5">
					{/* Text Content — primero en móvil para no tapar la vista con la foto */}
					<div className="order-1 lg:col-span-3">
						<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight text-balance">
							Un espacio profesional y humano para priorizar tu salud mental
						</h1>
						<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
							Atención psiquiátrica y psicoterapia para adolescentes, adultos y
							adultos mayores en Montevideo, con un enfoque cálido, profesional y
							basado en la escucha.
						</p>

						{/* CTAs */}
						<div className="mt-8 flex flex-wrap gap-4">
							<Button asChild size="lg" className="px-8">
								<Link href="/turnos">Reservar turno</Link>
							</Button>
							<Button asChild variant="outline" size="lg" className="px-8">
								<Link href="#sobre-mi">Conocer más</Link>
							</Button>
						</div>

						{/* Highlights */}
						<div className="mt-10 flex flex-wrap gap-6">
							{highlights.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-2 text-sm text-muted-foreground"
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50">
										<item.icon className="w-4 h-4 text-primary" />
									</div>
									<span>{item.text}</span>
								</div>
							))}
						</div>
					</div>

					{/* Image — solo desde lg (~1024px); en tablet ancha se veía mal */}
					<div className="order-2 hidden lg:flex lg:col-span-2 justify-center lg:justify-end">
						<div className="relative shrink-0">
							<div className="absolute -inset-4 bg-secondary/30 rounded-full blur-3xl" />
							<div className="relative w-80 h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-xl">
								<Image
									src="/images/perfil1.jpg"
									alt="Dra. María Fernanda Menendez - Médica Psiquiatra"
									fill
									className="object-cover object-top"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative element */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
		</section>
	);
}
