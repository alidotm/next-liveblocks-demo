import { RoomProvider } from "liveblocks.config";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Room: NextPage = () => {
	//current router
	const router = useRouter();

	//room query
	const { room } = router.query;

	return (
		<RoomProvider initialPresence={{}} id={room as string}>
			<main className="min-h-screen py-16  flex flex-col justify-center items-center">
				<div>Room</div>
				<div>{room}</div>
			</main>
		</RoomProvider>
	);
};

export default Room;
