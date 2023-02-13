const mongoose = require("mongoose");

const DatasetSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please add a title"],
		unique: true,
		trim: true,
		maxlength: [40, "Title cannot be more than 40 characters"],
	},
	slug: {
		type: String,
		required: [true, "Please add a slug"],
		unique: true,
		trim: true,
		maxlength: [40, "Slug cannot be more than 40 characters"],
	},
	source: {
		type: String,
		required: [true, "Please add a source"],
		unique: true,
		trim: true,
	},
	download: {
		type: String,
		required: [true, "Please add a download"],
		unique: true,
		trim: true,
	},
	description: {
		type: String,
		required: [true, "Please add a description"],
	},
	citation: {
		type: String,
		required: false,
	},
});
/*
    deleting the old connection and recreating a new so updatas can be added
        Allows changes to DatasetSchema above. Without it DatasetSchema can't be 
        changed even if it weren't a const, and the program won't let you
        know it can't be changed
        Its inefficient but effective 
        SUGGESTION: find way to update the schema only when changes made
*/
delete mongoose.connection.models["Dataset"];
module.exports = mongoose.model("Dataset", DatasetSchema);
