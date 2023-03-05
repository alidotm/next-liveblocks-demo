import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

// Connect to our API route
const client = createClient({
	authEndpoint: "/api/auth",
});

// Define user presence
type Presence = {
	name: string;
};

// Pass client and Presence to createRoomContext & create React utilities
export const { RoomProvider, useUpdateMyPresence, useOthers } =
	createRoomContext<Presence>(client);
