import { getSiteUrl, siteConfig } from "@/lib/site-config";

export function JsonLd() {
	const siteUrl = getSiteUrl();
	const ogPath = siteConfig.ogImage.startsWith("http")
		? siteConfig.ogImage
		: `${siteUrl}${siteConfig.ogImage}`;

	const graph = [
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"@id": `${siteUrl}/#website`,
			name: siteConfig.name,
			description: siteConfig.description,
			url: siteUrl,
			inLanguage: siteConfig.language,
			publisher: { "@id": `${siteUrl}/#physician` },
		},
		{
			"@context": "https://schema.org",
			"@type": "Physician",
			"@id": `${siteUrl}/#physician`,
			name: "María Fernanda Menéndez",
			honorificPrefix: "Dra.",
			jobTitle: "Médica Psiquiatra",
			medicalSpecialty: {
				"@type": "MedicalSpecialty",
				name: "Psiquiatría",
			},
			address: {
				"@type": "PostalAddress",
				addressLocality: "Malvín",
				addressRegion: "Montevideo",
				addressCountry: "UY",
			},
			areaServed: {
				"@type": "City",
				name: "Montevideo",
				containedInPlace: { "@type": "Country", name: "Uruguay" },
			},
			image: ogPath,
			url: siteUrl,
			sameAs: [
				"https://instagram.com/doctora_menendez"
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			"itemListElement": [
				{
					"@type": "SiteNavigationElement",
					"position": 1,
					"name": "Reservar turno online",
					"description": "Agenda online para consultas presenciales en Montevideo o virtuales. Elegí fecha y horario.",
					"url": `${siteUrl}/turnos`
				},
				{
					"@type": "SiteNavigationElement",
					"position": 2,
					"name": "Sobre Mí",
					"url": `${siteUrl}/#sobre-mi`
				},
				{
					"@type": "SiteNavigationElement",
					"position": 3,
					"name": "Consultar Contacto",
					"url": `${siteUrl}/#contacto`
				}
			]
		}
	];

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
			}}
		/>
	);
}
