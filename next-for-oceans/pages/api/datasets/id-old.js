import dbConnect from "../../../utils/dbConnect";
import Dataset from "../../../models/Dataset";

dbConnect();

const request = async (req, res) => {
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			try {
				const dataset = await Dataset.findById(id); //change Note to Dataset
				if (!dataset) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: dataset });
			} catch (error) {
				return res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const dataset = await Dataset.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				}); //change Note to Dataset

				if (!dataset) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: dataset });
			} catch (error) {
				return res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				const deleteDataset = await Dataset.deleteOne({ _id: id }); //change Note to Dataset
				if (!deleteDataset) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: {} });
			} catch (error) {
				console.log(error);
				return res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default request;
