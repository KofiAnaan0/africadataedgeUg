import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import ClientWrapper from "@/components/ClientWrapper";

const geistMono = Geist_Mono({
	weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s - Africa DataEdge",
		absolute: "Africa DataEdge",
	},
	description:
		"Africa DataEdge is an IT company that offers security information, access, and events management services.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} antialiased bg-[#FCFAEE]`}
			>
				<ClientWrapper>{children}</ClientWrapper>

				<Footer />
			</body>
		</html>
	);
}
