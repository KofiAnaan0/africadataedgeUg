"use client";

import Home from "@/components/Home";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "@/components/Dashboard/Dashboard";
import { createClient } from "@/lib/client";
import { User } from "@supabase/supabase-js";

export default function HomePage() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const initAOS = async () => {
			await import("aos");
			AOS.init({
				duration: 1000,

				easing: "ease-in-out",
				once: true,
				anchorPlacement: "top-bottom",
			});
		};

		const getUser = async () => {
			const supabase = createClient();
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
			setLoading(false);
		};

		initAOS();
		getUser();
	}, []);

	// if (loading) {
	// 	return <div>Loading...</div>; // Or your loading component
	// }

	if (user) {
		return (
			<>
				<Dashboard />
			</>
		);
	} else {
		return (
			<>
				<Home />
			</>
		);
	}
}
