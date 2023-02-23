import { roomAtom, userAtom } from "@/globalStates";
import { useAtom } from "jotai";
import Head from "next/head";

export default function Home() {
	//update user and room
	const [user, setUser] = useAtom(userAtom);
	const [room, setRoom] = useAtom(roomAtom);

	return (
		<>
			<Head>
				<title>Next - Liveblocks</title>
				<meta
					name="description"
					content="Next.js + Liveblocks example app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<input
					type="text"
					placeholder="name"
					value={user.name}
					onChange={(e) => setUser({ name: e.target.value })}
				/>
				<input
					type="text"
					placeholder="room"
					value={room}
					onChange={(e) => setRoom(e.target.value)}
				/>
			</main>
		</>
	);
}
