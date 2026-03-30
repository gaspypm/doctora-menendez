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
			name: "María Fernanda Menendez",
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
		},
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
