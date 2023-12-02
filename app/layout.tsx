import type { Metadata } from "next";
import "./globals.scss";
import TimeContextProvider from "@/TimeContext";

import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Event Countdown App",
	description: "A countdown app for upcoming events",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="torch">
			<TimeContextProvider>
				<body className={poppins.variable}>{children}</body>
			</TimeContextProvider>
		</html>
	);
}
