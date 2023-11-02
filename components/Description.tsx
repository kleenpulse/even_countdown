import React from "react";
import FrameRotation from "./FrameRotation";
import { cn } from "@/utils/tailwind-utils";
import { Character, Framework } from "@/utils/framework";

type Props = {
	currentFramework: Framework | Character;
	text: string;
};
const Description = ({ currentFramework, text }: Props) => {
	return (
		<p className="max-w-2xl text-centers text-lg lg:text-xl mb-8 max-sm:flex flex-col items-center gap-3">
			<span>
				An <b>Attack on Titan</b> event by{" "}
				<strong
					className={cn("transition-colors duration-300", {
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
					{text}
				</strong>{" "}
			</span>
			{/* <FrameRotation key={2} isDesc currentFramework={currentFramework} /> */}
		</p>
	);
};

export default Description;
