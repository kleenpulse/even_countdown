import { cn } from "@/utils/tailwind-utils";
import React from "react";

const NumberRotation = ({ number }: { number: number }) => {
	const numbers = Array.from({ length: 60 }, (_, i) => i);

	// Determine the class for each number based on the current number
	const getClass = (num: number) => {
		if (number === num) return "opacity-100 transform-none";
		if (number > num) return "opacity-0 lg:-translate-y-6 -translate-y-2";

		return "opacity-0 lg:translate-y-6 translate-y-2";
	};

	return (
		<div className="relative h-16 w-16 sm:h-24 sm:w-24 flex justify-center max-[333px]:h-20 max-[333px]:w-20 ">
			{numbers.map((num) => (
				<div
					key={num}
					className={cn(
						"w-fit h-full absolute transition-all duration-300 text-white/90 ",
						getClass(num)
					)}
				>
					{num}
				</div>
			))}
		</div>
	);
};

export default NumberRotation;
