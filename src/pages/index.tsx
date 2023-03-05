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
					<div className="isolate -space-y-px rounded-xl shadow-sm">
						<h1 className="text-center py-6 font-bold text-xl">
							Join Room
						</h1>
						<div className="relative rounded-xl rounded-b-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-blue-600">
							<label
								htmlFor="name"
								className="block text-xs font-medium text-gray-900"
							>
								Username
							</label>
							<input
								type="text"
								name="name"
								value={user.name}
								onChange={(e) =>
									setUser({ ...user, name: e.target.value })
								}
								id="name"
								className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								placeholder="Jane Smith"
							/>
						</div>
						<div className="relative rounded-xl rounded-t-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-blue-600">
							<label
								htmlFor="room"
								className="block text-xs font-medium text-gray-900"
							>
								Room
							</label>
							<input
								type="text"
								name="room"
								value={room}
								onChange={(e) => setRoom(e.target.value)}
								id="room"
								className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								placeholder="123"
							/>
						</div>
					</div>

					<button
						onClick={() => {
							if (!user.name || !room) return;
							router.push(`/${room}`);
						}}
						type="button"
						className="rounded-xl w-full bg-blue-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Join
					</button>
				</div>
			</main>
		</>
	);
}
