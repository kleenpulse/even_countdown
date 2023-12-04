import { type Character } from "@/utils/items";

import TimeUnit from "./TimeUnit";
import { cn } from "@/utils/tailwind-utils";
import { useTimeCtx } from "@/TimeContext";
import Image from "next/image";

const CountdownTimer = ({
	currentItem,
	isLight,
}: {
	currentItem: Character;
	isLight?: boolean;
}) => {
	const { countdown, eventTime } = useTimeCtx();

	// console.log(countdown.timeToEvent);
	console.log(eventTime);
	return (
		<div
			className={cn(
				"flex gap-3 text-center max-[333px]:grid grid-cols-2 max-[333px]:gap-6 max-[333px]:pb-8 px-8 rounded-xl py-4 text-white transition-all duration-500 mb-8 lg:rounded-2xl select-none   relative z-[50]",
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
			<Image
				aria-hidden
				src="/swinger.gif"
				alt="swinger"
				width={200}
				height={200}
				className="absolute top-0 -left-24 z-10 pointer-events-none"
			/>
			<TimeUnit
				label="DAYS"
				value={eventTime ? 0 : countdown.days}
				currentItem={currentItem}
			/>
			<TimeUnit
				label="HOURS"
				value={eventTime ? 0 : countdown.hours}
				currentItem={currentItem}
			/>
			<TimeUnit
				label="MINUTES"
				value={eventTime ? 0 : countdown.minutes}
				currentItem={currentItem}
			/>
			<TimeUnit
				label="SECONDS"
				value={eventTime ? 0 : countdown.seconds}
				currentItem={currentItem}
			/>
		</div>
	);
};

export default CountdownTimer;
