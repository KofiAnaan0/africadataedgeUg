import React from "react";
import Hero from "./HomePage/Hero";
import Approach from "./HomePage/Approach";
import Contact from "./HomePage/Contact";
import Review from "./HomePage/Review";
import Services from "./HomePage/Services";

const Home = () => {
	return (
		<div className="w-full overflow-hidden">
			<Hero />
			<Approach />
			<Review />
			<Services />
			<Contact />
		</div>
	);
};

export default Home;
