import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
	return (
		<section className="bg-gray-950 h-screen w-full flex justify-center items-center select-none overflow-hidden fixed z-[9999999999]">
			<div className="flex items-center gap-3 sm:gap-5 lg:gap-10 loader-con">
				<div className="span loader">
					<span className="m">CO</span>
					<span className="m">U</span>
					<span className="m">N</span>
					<span className="m">T</span>
					<span className="m">D</span>
					<span className="m">O</span>
					<span className="m">W</span>
					<span className="m">N</span>
					<span className="m">&nbsp;</span>
					<span className="m">A</span>
					<span className="m">P</span>
					<span className="m">P</span>
				</div>
				<LoadingSpinner />
			</div>
		</section>
	);
}
