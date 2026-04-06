export function getSiteUrl(): string {
	const env = process.env.NEXT_PUBLIC_SITE_URL;
	if (env) return env.replace(/\/$/, "");
	if (process.env.NODE_ENV === "development") return "http://localhost:3000";
	return "https://www.doctoramenendez.com";
}

export const siteConfig = {
	name: "Dra. María Fernanda Menéndez",
	titleTemplate: "%s | Dra. María Fernanda Menéndez",
	defaultTitle:
		"Dra. María Fernanda Menéndez | Médica Psiquiatra en Montevideo",
	description:
		"Atención psiquiátrica profesional y humana para adolescentes, adultos y adultos mayores en Montevideo, Uruguay. Consultas presenciales y virtuales en Malvín.",
	keywords: [
		"psiquiatra",
		"Montevideo",
		"Malvín",
		"salud mental",
		"psiquiatría",
		"Uruguay",
		"consulta psiquiátrica",
		"adolescentes",
		"adultos mayores",
		"telemedicina",
		"consulta virtual",
	],
	locale: "es_UY",
	language: "es-UY",
	ogImage: "/og/default-og.jpg",
} as const;
