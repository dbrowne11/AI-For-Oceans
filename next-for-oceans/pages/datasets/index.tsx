import React from "react";
import {
	Box,
	Paper,
	InputBase,
	Autocomplete,
	TextField,
	Grid,
	IconButton,
	Divider,
} from "@mui/material";
import DatasetSearch from "../../components/DatasetSearch";
import DatasetCard from "../../components/DatasetCard";
// import Link from 'next/link';
//=============DATABASE INSTRUCTIONS FOR DATASETS=============//
/* 
	To create/retrieve/delete/update datasetCards in the website you'll
	need to make requests: GET, POST, PUT,DELETE. The easiest way
	to make these request is to download and use Postman.

	SETUP
		In Postman, type in the url of site your trying to reach: 
		http://localhost:3000/api/dataCards/
		
		NOTE: This link 'http://localhost:3000' will change when you host the website somewhere else.
			You must use whatever host the site is hosted on, then 'hostURL'/api/dataCards

	CREATE datasetCard
		On Postman, click on dropdown menu directly to left of where you
		entered your website's URL(the menu usually says GET). Set the menu
		to POST. Then go to the navbar below the URL anc click 'Body', the text
		below that is where you'll be putting in the info of the dataset. Right 
		above the text box are two dropdown menus set left one to 'raw' and the
		right 'JSON'. Your now ready to type in your dataset's information.
		This is the format for the dataset in JSON. What matters are the three
		parts: "title", "link", "description"(don't change these), what's passed 
		the colons of these are what show up on the card(you can change these).
		{
			"title": "Idaho Camera Traps" ,
			"link": "https://lila.science/datasets/idaho-camera-traps/",
			"download":"https://lilablobssc.blob.core.windows.net/idaho-camera-traps/idaho-camera-traps-images.part_0.zip"
			"description": "Idaho2"
		}
		Add the appropriate information to the appropriate parts of the format
		then press the SEND button. Below the text for dataset's info is another
		this where you'll see the results it to 'Pretty' and JSON. If the creating
		dataCard work you should see this in the box:
		{
			"success": true,
			"data": {
				"title": "Idaho Camera Traps",
				"link": "https://lila.science/datasets/idaho-camera-traps/",
				"download": "https://lilablobssc.blob.core.windows.net/idaho-camera-traps/idaho-camera-traps-images.part_0.zip",
				"description": "Idaho2",
				"_id": "619d3051d160041b58d33a06",
				"__v": 0
			}
		}
		Now you can reload the website and you'll see the dataCard in:
		http://localhost:3000/datasets
	
	RETRIEVE datasetCards
		On Postman set the dropdown menu next to the URL to GET. Press SEND,
		you'll see all the datasets' information in the response text box below.
	
	UPDATE datasetCard
		On Postman, you'll need to update the URL by adding the desired dataset's
		id in at the end of the URL. You'll find id by doing a GET request which was
		in the 'RETRIEVE datasetCard' instructions. In the response text box you'll see
		the datasets' information and it would look like this:
		{
            "_id": "619d3051d160041b58d33a06",
            "title": "Idaho Camera Traps",
            "link": "https://lila.science/datasets/idaho-camera-traps/",
			"download":"https://lilablobssc.blob.core.windows.net/idaho-camera-traps/idaho-camera-traps-images.part_0.zip"
            "description": "Idaho2",
            "__v": 0
        }
		go to the "_id" section and copy the string of values excluding the quotation marks
		and paste them in the URL. From dataset info we just retrieved, the URL should look
		like this: 
		
		http://localhost:3000/api/dataCards/619d3051d160041b58d33a06


		Now set the dropdown menu next to the URL to PUT, and like in 'CREATE datasetCard'
		instructions add what changes you want to make the format to change the datasetCard.
		Press send and you should recieve the same type of success response when you created
		a datasetCard. Lastly, reload the website page and you'll see the changes.

		REMEMBER TO REMOVE THE ID FROM THE URL WHEN YOUR DONE, ELSE IT WILL MESS UP THE
		OTHER REQUESTS YOU MAKE
	
	DELETE datasetCard
		Like UPDATE datasetCard, add the dataset's id to the URL. Then set the dropdown 
		menu next to the URL to DELETE. Press SEND, you'll see in the response text box:
		{
    		"success": true,
    		"data": {}
		}
		Once reload the page the card will be gone.

		REMEMBER TO REMOVE THE ID FROM THE URL WHEN YOUR DONE, ELSE IT WILL MESS UP THE
		OTHER REQUESTS YOU MAKE
*/
//============================================================//

export async function getServerSideProps() {
	const res = await fetch(`${process.env.ROOT_URL}/api/datasets/index`);
	const data = await res.json(); //GET request from the database to retrieve all datasets' info
	return { props: { data } }; //return datasets' info
}

const Datasets = (props: any) => {
	const datasets = props.data.data;
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<DatasetSearch datasets={datasets} />
			</Box>
			<Grid container spacing={4} sx={{ mt: 4 }}>
				{datasets.map((dataset: any) => {
					//take info from each of dataset
					return (
						<Grid
							item
							sx={{ display: "flex", alignItems: "stretch" }}
							xs={12}
							sm={6}
							md={4}
							key={dataset._id}
						>
							<DatasetCard //build datasetCard from the info
								id={dataset._id}
								title={dataset.title}
								slug={dataset.slug}
								source={dataset.source}
								download={dataset.download}
								description={dataset.description}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default Datasets;
