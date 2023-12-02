"use client";

import CountdownTimer from "@/components/CountdownTimer";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Character, characterNames } from "@/utils/items";
import { cn } from "@/utils/tailwind-utils";
import Loading from "./loading";
import useMousePosition from "@/useMousePos";

import MainHeading from "@/components/MainHeading";
import Description from "@/components/Description";
import ItemRotation from "@/components/ItemRotation";
import Link from "next/link";
import { useTimeCtx } from "@/TimeContext";
import dynamic from "next/dynamic";
import useWindowSize from "react-use/lib/useWindowSize";
import Button from "@/components/Button";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Home() {
	const [isVideo, setIsVideo] = useState(false);

	const { eventTime } = useTimeCtx();
	const isTime = eventTime;
	const { width, height } = useWindowSize();

	const [isLoading, setIsLoading] = useState(true);
	const [hideTimer, sethideTimer] = useState(() => {
		if (isTime) {
			return false;
		}
		return true;
	});
	const [isLight, setIsLight] = useState(false);

	useEffect(() => {
		if (isTime) {
			setTimeout(() => {
				setIsVideo(true);
			}, 5000);
		}
	}, [isTime]);

	const bottomRef = useRef<HTMLDivElement>(null);

	const [currentItem, setCurrentItem] = useState<Character>(characterNames[0]);
	const [showBG, setShowBG] = useState(false);

	useEffect(() => {
		const getLoaded = localStorage.getItem("loaded");
		if (getLoaded === "true") {
			setIsLoading(false);
		}
		setTimeout(() => {
			setIsLoading(false);
			localStorage.setItem("loaded", "true");
		}, 5000);

		let currentIndex = 0;

		const rotateColor = () => {
			setCurrentItem(characterNames[currentIndex]);
			currentIndex = (currentIndex + 1) % characterNames.length;
		};

		const intervalId = setInterval(rotateColor, 3000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	useEffect(() => {
		setShowBG(true);
	}, []);

	const { x, y } = useMousePosition();
	useEffect(() => {
		if (!isLight) {
			document.documentElement.classList.remove("torch");
			return;
		} else {
			document.documentElement.classList.add("torch");
		}
		const update = (e: MouseEvent | TouchEvent) => {
			const axisx =
				x || (e instanceof TouchEvent ? e.touches[0]?.clientX : undefined);
			const axisy =
				y || (e instanceof TouchEvent ? e.touches[0]?.clientY : undefined);

			document.documentElement.style.setProperty("--cursorX", axisx + "px");
			document.documentElement.style.setProperty("--cursorY", axisy + "px");
		};

		document.addEventListener("mousemove", update);
		document.addEventListener("touchmove", update);

		return () => {
			document.removeEventListener("mousemove", update);
			document.removeEventListener("touchmove", update);
		};
	}, [x, y, isLight]);

	return isLoading ? (
		<Loading />
	) : (
		<>
			{isTime && (
				<div className="fixed inset-0 w-full min-h-screen z-[9999999] pointer-events-none">
					<Confetti numberOfPieces={500} width={width} height={height} />
				</div>
			)}
			<div
				className={cn(
					" pointer-events-none  fixed inset-0 h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] xl:h-[700px] xl:w-[700px]  rounded-full blur-[60px] brightness-[10000%] bg-white  "
				)}
				style={{
					left: `${x}px`,
					top: `${y}px`,
					transform: "translate(-50%, -50%)",
				}}
			/>
			<main className="relative sm:min-h-screen w-full xl:overflow-hidden">
				<div className="text-white/20 text-lg sm:text-2xl relative z-30 w-full hidden sm:flex justify-center px-4 select-none hover:text-gray-300 transition-colors duration-700 py-2 group/mouse ">
					<Button
						isLight={isLight}
						onClick={() => setIsLight(!isLight)}
						currentItem={currentItem}
						props={{
							tabIndex: 1,
							"aria-label": !isLight ? "Use Torch" : "Off Torch",
						}}
						torchBtn
					>
						{!isLight ? "Use Torch" : "Off Torch"}
					</Button>
				</div>
				<div
					className={cn(
						"fixed inset-0 transition-colors delay-100 duration-700  ",
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
						isLight ? "opacity-70" : "opacity-40"
					)}
				/>
				<Image
					width={1200}
					height={1200}
					src="/gradient.svg"
					alt="gradient"
					className="inset-0 fixed min-h-screen object-cover w-full opacity-90"
				/>
				<div
					className="fixed inset-0  "
					style={{
						backgroundImage: `url('/square.svg')`,
						backgroundSize: "40px",
					}}
				></div>

				<div
					className={cn(
						"bg-black fixed inset-0 transition-opacity duration-[2500ms]",
						!showBG ? "opacity-100" : "opacity-0"
					)}
				/>

				<div className="max-w-7xl 2xl:mt-20 mt-4 mx-auto relative z-10 flex justify-center flex-col items-center !overflow-hidden">
					<div className="flex flex-col items-center relative z-10 ">
						<h2
							className={` text-5xl max-[400px]:text-3xl lg:text-7xl max-w-3xl lg:max-w-6xl xl:max-w-7xl flex flex-col  items-center leading-snug mb-6 font-bold   justify-center`}
						>
							<ItemRotation currentItem={currentItem} key={1} />
							{isTime ? (
								<span className="countdown uppercase">Its Time!!! </span>
							) : (
								<span className="countdown uppercase">Countdown to </span>
							)}
						</h2>
						<MainHeading currentItem={currentItem} text="CHRISTMAS!" />
						<Description text="Vxrcel!" currentItem={currentItem} />
						{/* {isVideo && (
							<div
								className="2xl:mb-8 mb-4 loader-con"
								role="dialog"
								tabIndex={0}
							>
								<Link
									href="https://aniwave.to/watch/attack-on-titan-the-final-season-part-3.ll3mm/ep-1"
									target="_blank"
									className={cn(
										"text-black px-6 py-3 rounded-md text-sm sm:text-3xl xl:text-4xl font-semibold transition-all duration-500 active:scale-90 !cursor-pointer uppercase ",
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
										}
									)}
								>
									Watch Finale!
								</Link>
							</div>
						)} */}
						<div
							className="2xl:mb-8 mb-4"
							onClick={() => {
								sethideTimer((prev) => !prev);
								hideTimer
									? bottomRef?.current?.scrollIntoView({ behavior: "smooth" })
									: window && window.scrollTo(0, 0);
							}}
							role="dialog"
						>
							<Button
								id="timer"
								currentItem={currentItem}
								props={{
									tabIndex: 1,
									"aria-haspopup": "dialog",
									"aria-expanded": !hideTimer,
									"aria-label": "Toggle timer",
									className: isTime ? "hidden" : "",
								}}
							>
								{hideTimer ? "Show Timer" : "Hide Timer"}
							</Button>
						</div>
					</div>
					<div
						aria-labelledby="timer"
						className={cn(
							"mb-10 transition-all duration-500",
							!isTime && hideTimer
								? "opacity-0 pointer-events-none "
								: "opacity-100"
						)}
					>
						<CountdownTimer isLight={isLight} currentItem={currentItem} />
					</div>
				</div>

				<div
					className={cn(
						"hover:opacity-70 fixed top-2 right-0 z-[1] lg:z-[999] opacity-50 transition-all duration-500  group/frame ",
						isLight ? "block max-sm:hidden" : " hidden"
					)}
				>
					<Image
						src="/balloons.gif"
						width={500}
						height={500}
						alt="titan"
						className="  transition-all duration-1000 hover:duration-0"
					/>
				</div>
				<div
					className={cn(
						" w-full flex relative  justify-center z-40",
						hideTimer && "opacity-0"
					)}
					ref={bottomRef}
				>
					Made with 💙
					<Link href="https://github.com/kleenpulse" target="_blank">
						<strong
							className={cn("transition-colors duration-300 ml-1", {
								"text-[#62a0f7]": currentItem === "badge",
								"text-[#2bc7ee]": currentItem === "cover",
								"text-[#06f27c]": currentItem === "erenGreen",
								"text-orange-500": currentItem === "leviOrange",
								"text-[#ff0c0c]": currentItem === "mikasa",
								"text-[#ff6a00]": currentItem === "levi",
								"text-[#ffffff]": currentItem === "mappa",
								"text-[#d001f4]": currentItem === "erenPurple",
								"text-[#f4af01]": currentItem === "annie",
							})}
						>
							Vxrcel
						</strong>
					</Link>
				</div>
			</main>
		</>
	);
}
