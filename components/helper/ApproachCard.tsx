import React from "react";
import Section from "../ui/Section";
import MainGrid from "../ui/MainGrid";
import H2 from "../ui/H2";
import P from "../ui/P";
import { Button } from "../ui/Button";
import Image from "next/image";
import { ApproachType } from "@/types/approachType";
import Link from "next/link";

interface ApproachProps extends ApproachType {
	reversed: boolean;
}

const ApproachCard = ({
	title,
	index,
	description,
	imageUrl,
	reversed,
}: ApproachProps) => {
	// Determine the order of text and image based on the 'reversed' prop
	const textOrder = reversed ? "md:order-2" : "md:order-1";
	const imageOrder = reversed ? "md:order-1" : "md:order-2";

	return (
		<Section>
			<MainGrid>
				{/* text content */}
				<div
					data-aos="fade-up"
					className={`space-y-4 flex flex-col items-center justify-center ${textOrder}`}
				>
					{/* title */}
					<H2 className="md:text-start lg:text-start">{title}</H2>

					{/* description */}
					<P className="md:text-start lg:text-start">{description}</P>

					{/* CTA */}
					<div className="flex items-start justify-start w-full mt-8 space-x-4">
						<Link
							href={`/product#${index}`}
							className="inline-flex justify-center items-center font-medium rounded-sm shadow-lg shadow-black/30 text-sm px-4 py-2 h-10 text-white hover:shadow-xl hover:shadow-black/60 hover:rotate-1 hover:scale-110 transform transition-all duration-150 disabled:pointer-events-none cursor-pointer w-full md:w-fit bg-[#10316B] text-white focus:outline-none"
						>
							View Products
						</Link>
						<Button
							variant="outline"
							onClick={() => (window.location.href = "tel:+12244643952")}
						>
							Call Us
						</Button>
					</div>
				</div>
				<div
					className={`${imageOrder}`}
					data-aos="zoom-in"
					data-aos-delay="150"
				>
					<Image
						src={imageUrl}
						alt={"image"}
						priority={!reversed}
						height={380}
						placeholder="blur"
						className="rounded-md shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/40 hover:rotate-1 hover:scale-110 transform transition-all disabled:pointer-events-none cursor-pointer duration-300 mx-auto"
					/>
				</div>
			</MainGrid>
		</Section>
	);
};

export default ApproachCard;
