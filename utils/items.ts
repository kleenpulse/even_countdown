export const characterNames = [
	"erenGreen",
	"annie",
	"badge",
	"erenPurple",
	"levi",
	"cover",
	"leviOrange",
	"mappa",
	"mikasa",
] as const;

export type Character = (typeof characterNames)[number];
