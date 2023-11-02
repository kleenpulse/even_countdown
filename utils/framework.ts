export const frameWorks = [
	"react",
	"next",
	"svelte",
	"vue",
	"mobile",
	"desktop",
	"tailwind",
] as const;

export type Framework = (typeof frameWorks)[number];

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
