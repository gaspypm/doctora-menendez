import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = getSiteUrl();
	const lastModified = new Date();

	return [
		{
			url: base,
			lastModified,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${base}/turnos`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
		},
	];
}
