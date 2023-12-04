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
	"teal",
] as const;

export type Character = (typeof characterNames)[number];
