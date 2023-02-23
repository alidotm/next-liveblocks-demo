import { roomAtom, userAtom } from "@/globalStates";
import { useAtom } from "jotai";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
	//router
	const router = useRouter();

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
			<main className="min-h-screen py-16  flex flex-col justify-center items-center">
				<div className="max-w-xs mx-auto space-y-4 w-full">
					<div>
						<label
							htmlFor="username"
							className="block text-xs font-medium text-gray-700"
						>
							Username
						</label>

						<input
							type="text"
							value={user.name}
							onChange={(e) =>
								setUser({ ...user, name: e.target.value })
							}
							id="username"
							className="mt-1 w-full rounded-xl border-gray-200 h-10 shadow-sm sm:text-sm"
						/>
					</div>
					<div>
						<label
							htmlFor="room"
							className="block text-xs font-medium text-gray-700"
						>
							Room
						</label>

						<input
							type="text"
							value={room}
							onChange={(e) => setRoom(e.target.value)}
							id="room"
							className="mt-1 w-full rounded-xl border-gray-200 h-10 shadow-sm sm:text-sm"
						/>
					</div>
					<button
						onClick={() => {
							if (!user.name || !room) return;
							router.push(`/${room}`);
						}}
						className="text-white bg-blue-600 h-10 text-sm rounded-xl w-full hover:bg-blue-700 transition-colors duration-300 ease-in-out"
					>
						Join
					</button>
				</div>
			</main>
		</>
	);
}
