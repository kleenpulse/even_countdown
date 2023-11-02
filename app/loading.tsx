import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
	return (
		<section className="bg-gray-950 h-screen w-full flex justify-center items-center select-none overflow-hidden">
			<div className="flex items-center gap-3 sm:gap-5 lg:gap-10 loader-con">
				<div className="span loader">
					<span className="m">I'M</span>
					<span className="m">&nbsp;</span>
					<span className="m">V</span>
					<span className="m">X</span>
					<span className="m">R</span>
					<span className="m">C</span>
					<span className="m">E</span>
					<span className="m">L</span>
				</div>
				<LoadingSpinner />
			</div>
		</section>
	);
}
