import { authorize } from "@liveblocks/node";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.LIVEBLOCKS_SECRET_KEY as string;

// Connect to Liveblocks
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	const { room, username } = req.body;
	const result = await authorize({
		room: room,
		secret,
		userId: randomUUID(),
		userInfo: {
			name: username,
		},
	});
	return res.status(result.status).end(result.body);
}
