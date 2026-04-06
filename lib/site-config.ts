/**
 * URL pública del sitio. Definí NEXT_PUBLIC_SITE_URL en producción (ej. https://tudominio.uy).
 * En Vercel se infiere de VERCEL_URL si no está definida.
 */
export function getSiteUrl(): string {
	const env = process.env.NEXT_PUBLIC_SITE_URL;
	if (env) return env.replace(/\/$/, "");
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return "http://localhost:3000";
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
