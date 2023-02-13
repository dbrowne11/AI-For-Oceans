import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
	require("dotenv").config({ path: "../models/" });
	if (connection.isConnected) {
		return;
	}
	//PROCESS.ENV DOESN'T WORK NOT SURE ITS USEFUL
	// const db = await mongoose.connect(process.env.MONGO_URI,{
	//     useNewUrlParser: true,
	//     // usedUnifiedTopology: true,
	// });
	//Better off putting the full connect url inside
	//although hardcode, try to find better way later
	const db = await mongoose.connect(
		"mongodb+srv://dolphin:A0TFeobeU5phrLOh@aiforoceans.r69wc.mongodb.net/aiforoceans?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			// usedUnifiedTopology: true,//REMOVED: THIS IS NO LONGER SUPPORTED
		},
	);
	connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
