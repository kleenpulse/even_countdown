import { Character, Framework } from "@/utils/framework";
import { cn } from "@/utils/tailwind-utils";
import { handleMouse } from "@/utils/text-effect";
import React from "react";

type Props = {
	currentFramework: Framework | Character;
	text: string;
};

const MainHeading = ({ currentFramework, text }: Props) => {
	return (
		<div className="w-full justify-center items-center mb-8 uppercase sm:flex grid place-content-center  ">
			<h1
				className={cn(
					"transition-colors duration-300 w-full sm:min-w-[200px]  font-bold opacity-80",
					{
						"text-[#62a0f7]": currentFramework === "badge",
						"text-[#2bc7ee]": currentFramework === "cover",
						"text-[#06f27c]": currentFramework === "erenGreen",
						"text-orange-500": currentFramework === "leviOrange",
						"text-[#d80a0a]": currentFramework === "mikasa",
						"text-[#ff6a00]": currentFramework === "levi",
						"text-[#e0e0e0]": currentFramework === "mappa",
						"text-[#f401bf]": currentFramework === "erenPurple",
						"text-[#f4af01]": currentFramework === "annie",
					},
					text.length > 17
						? "xl:text-7xl min-[920px]:text-6xl sm:text-4xl text-3xl max-[460px]:text-2xl max-[368px]:text-xl"
						: "2xl:text-[120px] xl:text-[100px] lg:text-8xl md:text-7xl sm:text-6xl text-[30px] max-[368px]:text-2xl"
				)}
				data-value={text}
				onMouseEnter={handleMouse}
			>
				{text}
			</h1>{" "}
		</div>
	);
};

export default MainHeading;
