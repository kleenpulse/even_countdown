"use client";

import CountdownTimer from "@/components/CountdownTimer";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Character, Framework, characterNames } from "@/utils/framework";
import { cn } from "@/utils/tailwind-utils";
import Loading from "./loading";
import useMousePosition from "@/useMousePos";

import MainHeading from "@/components/MainHeading";
import Description from "@/components/Description";
import FrameRotation from "@/components/FrameRotation";
import Link from "next/link";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isLight, setIsLight] = useState(false);

	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const getLoaded = localStorage.getItem("loaded");
		if (getLoaded === "true") {
			setIsLoading(false);
		}
		setTimeout(() => {
			setIsLoading(false);
			localStorage.setItem("loaded", "true");
		}, 5000);
	}, []);
	const [currentFramework, setCurrentFramework] = useState<
		Framework | Character
	>(characterNames[0]);
	const [showBG, setShowBG] = useState(false);
	const [hideTimer, sethideTimer] = useState(true);

	useEffect(() => {
		let currentIndex = 0;

		const rotateFramework = () => {
			setCurrentFramework(characterNames[currentIndex]);
			currentIndex = (currentIndex + 1) % characterNames.length;
		};

		const intervalId = setInterval(rotateFramework, 3000);

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
			{/* <div
				className={cn(
					" pointer-events-none  fixed inset-0 h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] xl:h-[700px] xl:w-[700px]  rounded-full blur-[60px] brightness-[10000%] bg-white  z-[99] opacity-20"
				)}
				style={{
					left: `${x}px`,
					top: `${y}px`,
					transform: "translate(-50%, -50%)",
				}}
			/> */}
			<main className="relative h-full w-full">
				<div className="text-white/20 text-lg sm:text-2xl relative z-30 w-full hidden sm:flex justify-between px-4 select-none hover:text-gray-300 transition-colors duration-700 py-2 group/mouse ">
					<p>MouseX:{x}</p>
					<button
						onClick={() => setIsLight(!isLight)}
						className={cn(
							"text-black px-4 py-3 rounded-md text-xl font-semibold transition-all duration-500 active:scale-90 !cursor-pointer",
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
							}
						)}
					>
						{!isLight ? "Use Torch" : "Off Torch"}
					</button>
					<p>MouseY:{y}</p>
				</div>
				<div
					className={cn(
						"fixed inset-0 transition-colors delay-100 duration-700 opacity-50 ",
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
						}
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
							className={`text-5xl lg:text-7xl max-w-3xl lg:max-w-6xl xl:max-w-7xl flex flex-col  items-center leading-snug mb-6 font-bold   justify-center`}
						>
							<FrameRotation currentFramework={currentFramework} key={1} />
							<span className="countdown uppercase">Countdown to </span>
						</h2>
						<MainHeading
							currentFramework={currentFramework}
							text="Attack On titan!"
						/>
						<Description text="MAPPA!" currentFramework={currentFramework} />
						<div
							className="2xl:mb-8 mb-4"
							onClick={() => {
								sethideTimer((prev) => !prev);
								hideTimer
									? bottomRef?.current?.scrollIntoView({ behavior: "smooth" })
									: window && window.scrollTo(0, 0);
							}}
							role="dialog"
							tabIndex={0}
						>
							<button
								type="button"
								className={cn(
									"text-black px-6 py-3 rounded-md text-sm font-semibold transition-all duration-500 active:scale-90 !cursor-pointer",
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
									}
								)}
							>
								{hideTimer ? "Show Timer" : "Hide Timer"}
							</button>
						</div>
					</div>
					<div
						className={`mb-10 transition-all duration-500 ${
							hideTimer ? "opacity-0 pointer-events-none " : "opacity-100"
						}`}
					>
						<CountdownTimer
							isLight={isLight}
							currentFramework={currentFramework}
						/>
					</div>
				</div>
				<div
					className={cn(
						"hover:opacity-70 fixed -bottom-6 -left-4 z-[99] opacity-50 transition-all duration-500 max-sm:hidden ",
						isLight ? "block max-sm:hidden" : " hidden"
					)}
				>
					<Image src="/titan.png" width={250} height={250} alt="titan" />
				</div>
				<div
					className={cn(
						"hover:opacity-70 fixed -bottom-2 right-0 z-[99] opacity-50 transition-all duration-500  group/frame ",
						isLight ? "block max-sm:hidden" : " hidden"
					)}
				>
					<Image
						src="/captain.png"
						width={300}
						height={300}
						alt="titan"
						className=" grayscale transition-all duration-1000 hover:duration-0"
					/>
				</div>

				<div
					className={cn(
						"absolute bottom-0 w-full flex justify-center z-40",
						hideTimer && "opacity-0"
					)}
					ref={bottomRef}
				>
					Made with 💙
					<Link href="https://github.com/kleenpulse" target="_blank">
						<strong
							className={cn("transition-colors duration-300 ml-1", {
								"text-[#62a0f7]": currentFramework === "badge",
								"text-[#2bc7ee]": currentFramework === "cover",
								"text-[#06f27c]": currentFramework === "erenGreen",
								"text-orange-500": currentFramework === "leviOrange",
								"text-[#ff0c0c]": currentFramework === "mikasa",
								"text-[#ff6a00]": currentFramework === "levi",
								"text-[#ffffff]": currentFramework === "mappa",
								"text-[#d001f4]": currentFramework === "erenPurple",
								"text-[#f4af01]": currentFramework === "annie",
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
