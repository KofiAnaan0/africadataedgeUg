import { StaticImageData } from "next/image";

export interface ApproachType {
	id: number;
	title: string;
	description: string;
	imageUrl: string | StaticImageData;
}
