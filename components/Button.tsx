import { Character } from "@/utils/items";
import { cn } from "@/utils/tailwind-utils";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props {
	isLight?: boolean;
	timerBtn?: boolean;
	torchBtn?: boolean;
	currentItem: Character;
	onClick?: () => void;
	props?: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>;
	children?: React.ReactNode;
	id?: string;
}
const Button = ({ currentItem, props, onClick, id, children }: Props) => {
	return (
		<button
			{...props}
			id={id}
			type="button"
			onClick={onClick}
			className={cn(
				"text-white px-4 py-1 lg:py-3 rounded-md text-xl font-semibold transition-all duration-500 active:scale-90 !cursor-pointer bg-opacity-20 outline-none border-none focus-visible:outline-2  outline-offset-2",
				{
					"bg-[#62a0f7] focus-visible:outline-[#62a0f7]":
						currentItem === "badge",
					"bg-[#2bc7ee] focus-visible:outline-[#2bc7ee]":
						currentItem === "cover",
					"bg-[#06f27c] focus-visible:outline-[#06f27c]":
						currentItem === "erenGreen",
					"bg-orange-500 focus-visible:outline-orange-500":
						currentItem === "leviOrange",
					"bg-[#ff0c0c] focus-visible:outline-[#ff0c0c]":
						currentItem === "mikasa",
					"bg-[#ff6a00] focus-visible:outline-[#ff6a00]":
						currentItem === "levi",
					"bg-[#ffffff] focus-visible:outline-[#ffffff]":
						currentItem === "mappa",
					"bg-[#d001f4] focus-visible:outline-[#d001f4]":
						currentItem === "erenPurple",
					"bg-[#f4af01] focus-visible:outline-[#f4af01]":
						currentItem === "annie",
					"bg-[#01abf4]": currentItem === "teal",
				}
			)}
		>
			{/* {torchBtn && <span>{!isLight ? "Use Torch" : "Off Torch"}</span>} */}
			{children}
		</button>
	);
};

export default Button;
