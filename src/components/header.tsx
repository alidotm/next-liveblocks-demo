import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="w-full flex fixed top-0 justify-center items-center h-16">
			<Link href="/" className="font-bold text-2xl">
				Nextjs + Liveblocks
			</Link>
		</header>
	);
};

export default Header;
