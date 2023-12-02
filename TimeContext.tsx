"use client";

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { calculateTimeToEvent } from "./utils/countdown";

export interface Countdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	isTime: boolean;
	timeToEvent: number;
}
interface TimeContextProps {
	countdown: Countdown;
	eventTime: boolean;
	setEventTime: Dispatch<SetStateAction<boolean>>;
}

const TimeContext = createContext<TimeContextProps>({} as TimeContextProps);

// const DATE = "2023-11-04T14:44:50";
const DATE = "2023-12-25T00:00:00";

const TimeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [eventTime, setEventTime] = useState(false);
	const [countdown, setCountdown] = useState<Countdown>(
		calculateTimeToEvent(DATE)
	);

	useEffect(() => {
		const getTime = localStorage.getItem("eventTime") === "true";
		console.log(eventTime);
		if (getTime) {
			setEventTime(true);
		}
	}, []);

	let intervalId: any = null;
	useEffect(() => {
		if (eventTime) {
			clearInterval(intervalId);
			return;
		}
		if (countdown.timeToEvent <= 1010) {
			localStorage.setItem("eventTime", "true");
			setEventTime(true);
			clearInterval(intervalId);
			return;
		}
	}, [countdown.timeToEvent]);
	useEffect(() => {
		if (eventTime) {
			clearInterval(intervalId);
			return;
		}
		intervalId = setInterval(() => {
			setCountdown(calculateTimeToEvent(DATE));
		}, 1000);

		return () => clearInterval(intervalId);
	}, [eventTime]);

	const value = useMemo(
		() => ({ countdown, eventTime, setEventTime }),
		[countdown, eventTime]
	);

	return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};

export default TimeContextProvider;

export const useTimeCtx = () => {
	const context = useContext(TimeContext);

	if (!TimeContext)
		throw new Error("useTimeCtx must be used within a TimeContexProvider");
	return context;
};
