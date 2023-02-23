import { NextPage } from "next";
import { useRouter } from "next/router";

const Room: NextPage = () => {
	const router = useRouter();

	const { room } = router.query;

	return (
		<main className="min-h-screen py-16  flex flex-col justify-center items-center">
			<div>Room</div>
			<div>{room}</div>
		</main>
	);
};

export default Room;
