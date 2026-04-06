"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/** Debe coincidir con el tipo de evento / embed en Cal.com */
const CAL_NAMESPACE = "50min";
const CAL_LINK = "doctora-menendez/50min";

export function BookingCalendar() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "50min" });
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
			namespace="50min"
			calLink="doctora-menendez/50min"
			style={{ width: "100%", height: "100%", overflow: "scroll" }}
			config={{
				layout: "month_view",
				useSlotsViewOnSmallScreen: "true",
				theme: "light",
				lng: "es",
			}}
		/>
	);
}

export default function MyApp() {}
