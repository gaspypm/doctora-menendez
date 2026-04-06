"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/** Debe coincidir con el tipo de evento / embed en Cal.com */
const CAL_NAMESPACE = "40min";
const CAL_LINK = "gaspar-pm-zx5sqj/40min";

export function BookingCalendar() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "40min" });
			cal("ui", {
				theme: "light",
				cssVarsPerTheme: {
					light: { "cal-brand": "#0060d1" },
					dark: { "cal-brand": "#cbd3ee" },
				},
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
	return (
		<Cal
			namespace="40min"
			calLink="gaspar-pm-zx5sqj/50min"
			style={{ width: "100%", height: "100%", overflow: "scroll" }}
			config={{
				layout: "month_view",
				useSlotsViewOnSmallScreen: "true",
				theme: "light",
			}}
		/>
	);

	return (
		<div className="w-full min-h-[620px] h-[min(90vh,880px)] rounded-xl border border-border/50 overflow-auto bg-background">
			<Cal
				namespace={CAL_NAMESPACE}
				calLink={CAL_LINK}
				className="w-full h-full min-h-[600px]"
				style={{ width: "100%", height: "100%", overflow: "auto" }}
				config={{
					layout: "month_view",
					useSlotsViewOnSmallScreen: "true",
					/** Idioma del flujo de reserva (interfaz en español) */
					lng: "es",
				}}
			/>
		</div>
	);
}

export default function MyApp() {}
