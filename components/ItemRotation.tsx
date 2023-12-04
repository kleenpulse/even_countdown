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
				"  relative z-30 mx-2 mb-5",
				isDesc
					? "w-[80px] h-[80px] -mt-2 inline-flex align-middle"
					: "w-[320px] h-[270px] lg:w-[500px] xl:w-[600] lg:h-[400px] aspect-video"
			)}
		>
			{characterNames.map((name, index) => (
				<div key={characters[name]}>
					<Image
						src={characters[name]}
						alt={name}
						width={isDesc ? 80 : 600}
						height={isDesc ? 80 : 400}
						onLoad={() => {
							window?.setTimeout(() => {
								setIsLoading(false);
							}, 1000);
						}}
						loading="lazy"
						className={cn(
							"w-full h-full object-cover object-center absolute top-0 left-0 transition-all duration-500 hue-hover",
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
				</div>
			))}
		</div>
	);
};

export default ItemRotation;
