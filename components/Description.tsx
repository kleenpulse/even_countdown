import React from "react";
import ItemRotation from "./ItemRotation";
import { cn } from "@/utils/tailwind-utils";
import { Character } from "@/utils/items";

type Props = {
	currentItem: Character;
	text: string;
};
const Description = ({ currentItem, text }: Props) => {
	return (
		<p className="max-w-2xl text-centers text-lg lg:text-xl mb-8 max-sm:flex flex-col items-center gap-3">
			<span>
				An <b>Attack on Titan</b> event by{" "}
				<strong
					className={cn("transition-colors duration-300", {
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
					{text}
				</strong>{" "}
			</span>
			{/* <ItemRotation key={2} isDesc currentItem={currentItem} /> */}
		</p>
	);
};

export default Description;
