import { Character, type Framework } from "@/utils/framework";
import { cn } from "@/utils/tailwind-utils";
import React from "react";
import NumberRotation from "./NumberRotation";

type Props = {
	label: string;
	value: number;
	currentFramework: Framework | Character;
};
const TimeUnit = ({ label, value, currentFramework }: Props) => {
	return (
		<div className="flex flex-col">
			<div className="text-white text-5xl lg:text-9xl font-semibold max-[333px]:text-7xl">
				<NumberRotation number={value} />
			</div>
			<div
				className={cn("text-lg lg:text-xl font-medium", {
					"text-[#62a0f7]": currentFramework === "badge",
					"text-[#2bc7ee]": currentFramework === "cover",
					"text-[#06f27c]": currentFramework === "erenGreen",
					"text-orange-500": currentFramework === "leviOrange",
					"text-[#ff0c0c]": currentFramework === "mikasa",
					"text-[#ff6a00]": currentFramework === "levi",
					"text-[#ffffff]": currentFramework === "mappa",
					"text-[#d001f4]": currentFramework === "erenPurple",
					"text-[#f4af01]": currentFramework === "annie",
				})}
			>
				{label}
			</div>
		</div>
	);
};

export default TimeUnit;
