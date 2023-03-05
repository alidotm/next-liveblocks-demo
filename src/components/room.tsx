import { FC } from "react";

import { UserIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { useOthers } from "liveblocks.config";

type RoomComponentProps = {
	room: string;
};

const RoomComponent: FC<RoomComponentProps> = (props) => {
	const others = useOthers();

	return (
		<header className="flex items-center space-x-6 w-full justify-between">
			<h1 className="font-bold text-xl">Room: {props.room}</h1>
			<Popover className="relative">
				<Popover.Button className="flex items-center space-x-1">
					<UserIcon className="w-5 h-5 text-gray-500" />
					<span className="text-sm font-medium text-gray-500">
						{others.length + 1}
					</span>
				</Popover.Button>
				<Popover.Panel
					as="ul"
					className="absolute z-10 bg-white border rounded-xl w-auto px-2 right-0 py-3 shadow-lg"
				>
					<li className="block px-4 py-1.5 text-sm text-gray-700">
						You
					</li>
					{others.map((o) => (
						<li
							key={o.id}
							className="block px-4 py-1.5 text-sm text-gray-700"
						>
							{o.presence.name}
						</li>
					))}
				</Popover.Panel>
			</Popover>
		</header>
	);
};

export default RoomComponent;
