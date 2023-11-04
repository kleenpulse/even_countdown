import { cn } from "@/utils/tailwind-utils";

type Props = {
	color?: string;
	innerColor?: string;
	isDesc?: boolean;
};
const LoadingSpinner = ({ color, innerColor, isDesc }: Props) => (
	<div
		className={cn(
			"relative  fade-loader",
			isDesc
				? "h-9 w-9"
				: " lg:h-20 lg:w-20 min-[500px]:h-12 min-[500px]:w-12 w-9 h-9"
		)}
	>
		<div
			className={`animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent ${
				color || "border-[#0ff]"
			} border-solid h-full w-full  absolute `}
		/>

		<div
			className={` rounded-full border-4  ${
				innerColor || "border-[rgba(0,255,255,0.23)]"
			} border-solid h-full w-full`}
		/>
	</div>
);

export default LoadingSpinner;
