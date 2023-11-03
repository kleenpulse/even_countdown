import { characters } from "@/public";
import { Character, characterNames } from "@/utils/items";
import { cn } from "@/utils/tailwind-utils";
import Image from "next/image";
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ItemRotation = ({
	currentItem,
	isDesc,
}: {
	currentItem: Character;
	isDesc?: boolean;
}) => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div
			className={cn(
				"  relative z-30 mx-2 ",
				isDesc
					? "w-[80px] h-[80px] -mt-2 inline-flex align-middle"
					: "w-[270px] h-[270px] "
			)}
		>
			{characterNames.map((name, index) => (
				<>
					<Image
						src={characters[name]}
						alt={name}
						width={isDesc ? 80 : 259}
						height={isDesc ? 80 : 259}
						key={name}
						onLoad={() => setIsLoading(false)}
						className={cn(
							"w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-500 hue-hover",
							currentItem === name
								? "opacity-100 transform-none"
								: index > characterNames.indexOf(currentItem as Character)
								? "opacity-0 -translate-y-8"
								: "opacity-0 translate-y-8",
							isDesc ? "rounded-lg" : "rounded-xl"
						)}
					/>
					{isLoading && (
						<div
							className={cn(
								" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
								currentItem === name
									? "opacity-100 "
									: index > characterNames.indexOf(currentItem as Character)
									? "opacity-0 -translate-y-2"
									: "opacity-0 translate-y-2",
								isDesc ? "scale-70" : ""
							)}
						>
							<LoadingSpinner isDesc={isDesc} />
						</div>
					)}
				</>
			))}
		</div>
	);
};

export default ItemRotation;
