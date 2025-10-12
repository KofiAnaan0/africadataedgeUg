import React from "react";
import { approachData } from "@/data/approachData";
import ApproachCard from "../helper/ApproachCard";

const Approach = () => {
	return (
		<>
			{approachData.map((item, index) => (
				<ApproachCard reversed={index % 2 != 0} key={item.id} {...item} />
			))}
		</>
	);
};

export default Approach;
