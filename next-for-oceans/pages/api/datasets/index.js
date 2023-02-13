import dbConnect from "../../../utils/dbConnect";
import Dataset from "../../../models/Dataset";

dbConnect();

const request = async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const dataset = await Dataset.find({});
				res.status(200).json({ success: true, data: dataset });
			} catch (error) {
				res.status(400).json({ success: false, error });
			}
			break;
		case "POST":
			try {
				const dataset = await Dataset.create(req.body);
				res.status(201).json({ success: true, data: dataset });
			} catch (error) {
				console.log("Error: ", error);
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default request;
