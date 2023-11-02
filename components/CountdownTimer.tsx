"use client";

import { calculateTimeToEvent } from "@/utils/countdown";
import { Character, type Framework } from "@/utils/framework";
import { useEffect, useMemo, useState } from "react";
import TimeUnit from "./TimeUnit";
import { cn } from "@/utils/tailwind-utils";

const DATE = "2023-11-04T00:00:00";

const CountdownTimer = ({
	currentFramework,
	isLight,
}: {
	currentFramework: Framework | Character;
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
					"bg-[#62a0f7]": currentFramework === "badge",
					"bg-[#2bc7ee]": currentFramework === "cover",
					"bg-[#06f27c]": currentFramework === "erenGreen",
					"bg-orange-500": currentFramework === "leviOrange",
					"bg-[#ff0c0c]": currentFramework === "mikasa",
					"bg-[#ff6a00]": currentFramework === "levi",
					"bg-[#ffffff]": currentFramework === "mappa",
					"bg-[#d001f4]": currentFramework === "erenPurple",
					"bg-[#f4af01]": currentFramework === "annie",
				},
				isLight
					? "bg-opacity-20 hover:backdrop-blur-xl"
					: "bg-opacity-10 hover:backdrop-blur-sm"
			)}
		>
			<TimeUnit
				label="DAYS"
				value={countdown.days}
				currentFramework={currentFramework}
			/>
			<TimeUnit
				label="HOURS"
				value={countdown.hours}
				currentFramework={currentFramework}
			/>
			<TimeUnit
				label="MINUTES"
				value={countdown.minutes}
				currentFramework={currentFramework}
			/>
			<TimeUnit
				label="SECONDS"
				value={countdown.seconds}
				currentFramework={currentFramework}
			/>
		</div>
	);
};

export default CountdownTimer;
