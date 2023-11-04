import { Countdown } from "@/TimeContext";

export const calculateTimeToEvent = (date: string) => {
	const eventDate = new Date(date) || new Date("2023-12-25T00:00:00");

	const currentDate = new Date();

	const timeToEvent = eventDate.getTime() - currentDate.getTime();
	const isTime = timeToEvent === 1000;

	const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds, isTime, timeToEvent };
};
