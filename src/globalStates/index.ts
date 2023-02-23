import { atom } from "jotai";

//User
type User = {
	name: string;
};

export const userAtom = atom<User>({ name: "" });

//Room
type Room = string;

export const roomAtom = atom<Room>("");
