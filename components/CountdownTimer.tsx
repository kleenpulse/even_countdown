"use client";

import { calculateTimeToEvent } from "@/utils/countdown";
import { type Character } from "@/utils/items";
import { useEffect, useMemo, useState } from "react";
import TimeUnit from "./TimeUnit";
import { cn } from "@/utils/tailwind-utils";

const DATE = "2023-11-04T16:00:00";

const CountdownTimer = ({
	currentItem,
	isLight,
}: {
	currentItem: Character;
	isLight?: boolean;
}) => {
	const [countdown, setCountdown] = useState(calculateTimeToEvent(DATE));

	useEffect(() => {
		const invertalId = setInterval(() => {
			setCountdown(calculateTimeToEvent(DATE));
		}, 1000);

		return () => clearInterval(invertalId);
	}, []);

	return (
		<div
			className={cn(
				"flex gap-3 text-center max-[333px]:grid grid-cols-2 max-[333px]:gap-6 max-[333px]:pb-8 px-8 rounded-xl py-4 text-white transition-all duration-500 mb-8 lg:rounded-2xl select-none    ",
				{
					"bg-[#62a0f7]": currentItem === "badge",
					"bg-[#2bc7ee]": currentItem === "cover",
					"bg-[#06f27c]": currentItem === "erenGreen",
					"bg-orange-500": currentItem === "leviOrange",
					"bg-[#ff0c0c]": currentItem === "mikasa",
					"bg-[#ff6a00]": currentItem === "levi",
					"bg-[#ffffff]": currentItem === "mappa",
					"bg-[#d001f4]": currentItem === "erenPurple",
					"bg-[#f4af01]": currentItem === "annie",
				},
				isLight
					? "bg-opacity-20 hover:backdrop-blur-xl"
					: "bg-opacity-10 hover:backdrop-blur-sm"
			)}
		>
			<TimeUnit label="DAYS" value={countdown.days} currentItem={currentItem} />
			<TimeUnit
				label="HOURS"
				value={countdown.hours}
				currentItem={currentItem}
			/>
			<TimeUnit
				label="MINUTES"
				value={countdown.minutes}
				currentItem={currentItem}
			/>
			<TimeUnit
				label="SECONDS"
				value={countdown.seconds}
				currentItem={currentItem}
			/>
		</div>
	);
};

export default CountdownTimer;
