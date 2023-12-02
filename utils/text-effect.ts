// @ts-nocheck

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval: any = null;
export const handleMouse = (name: any) => {
	let iteration = 0;
	name = name.target;

	clearInterval(interval);
	interval = setInterval(() => {
		name.innerText = name.innerText
			.split("")
			.map((_, index) => {
				if (index < iteration) {
					return name.dataset.value[index];
				}

				return letters[Math.floor(Math.random() * letters.length)];
			})
			.join("");

		if (iteration >= name.dataset.value.length) {
			clearInterval(interval);
		}

		iteration += 1 / 3;
	}, 60);
};
