import RoomComponent from "@/components/room";
import { userAtom } from "@/globalStates";
import { useAtom } from "jotai";
import { RoomProvider } from "liveblocks.config";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Room: NextPage = () => {
	//current router
	const router = useRouter();

	//room query
	const { room } = router.query;

	const [user, setUser] = useAtom(userAtom);

	return (
		<RoomProvider initialPresence={{ name: user.name }} id={room as string}>
			<main className="min-h-screen py-24  flex flex-col container max-w-2xl mx-auto px-6">
				<RoomComponent room={room as string} />
			</main>
		</RoomProvider>
	);
};

export default Room;
