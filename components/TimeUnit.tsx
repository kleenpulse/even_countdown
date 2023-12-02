import { type Character } from "@/utils/items";
import { cn } from "@/utils/tailwind-utils";
import React from "react";
import NumberRotation from "./NumberRotation";

type Props = {
	label: string;
	value: number;
	currentItem: Character;
};
const TimeUnit = ({ label, value, currentItem }: Props) => {
	return (
		<div className="flex flex-col">
			<div className="text-white text-5xl lg:text-6xl font-semibold max-[333px]:text-7xl">
				<NumberRotation number={value} />
			</div>
			<div
				className={cn("text-lg lg:text-xl font-medium", {
					"text-[#62a0f7]": currentItem === "badge",
					"text-[#2bc7ee]": currentItem === "cover",
					"text-[#06f27c]": currentItem === "erenGreen",
					"text-orange-500": currentItem === "leviOrange",
					"text-[#ff0c0c]": currentItem === "mikasa",
					"text-[#ff6a00]": currentItem === "levi",
					"text-[#ffffff]": currentItem === "mappa",
					"text-[#d001f4]": currentItem === "erenPurple",
					"text-[#f4af01]": currentItem === "annie",
				})}
			>
				{label}
			</div>
		</div>
	);
};

export default TimeUnit;
