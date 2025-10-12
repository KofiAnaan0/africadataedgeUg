import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

const P = (props: HTMLProps<HTMLParagraphElement>) => {
	return (
		<p
			{...props}
			className={cn(
				"text-sm md:text-base text-[#10316B] text-center",
				props.className
			)}
		/>
	);
};

export default P;
