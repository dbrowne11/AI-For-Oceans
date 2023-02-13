import React, { useState } from "react";
import {
	Card,
	CardActionArea,
	CardActions,
	CardMedia,
	CardContent,
	Typography,
	Button,
	CardProps,
} from "@mui/material";
import Link from "next/link";
import DatasetsStyles from "../styles/Datasets.module.css";
import { PinDropSharp } from "@mui/icons-material";

/*
Dataset card: used on dataset page
args: id - dataset id
      title - dataset title
      slug - dataset slug
      description - dataset description
      source - source link
      download - download link
*/

export interface DatasetCardProps {
	//children: React.ReactNode;
	id: Number;
	title: string;
	slug: string;
	description: string;
	source: string;
	download: string;
}

const DatasetCard = (props: DatasetCardProps) => {
	return (
		<Card
			classes={{ root: DatasetsStyles.frostedCard }}
			sx={{
				bgcolor: "#ffffff0f",
				display: "flex",
				flexDirection: "column",
			}}
			raised
		>
			<Link href={"/datasets/" + props.slug} passHref>
				<CardActionArea sx={{ flexGrow: 1 }}>
					<CardMedia
						component="img"
						height="140"
						image="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/113.6403,-22.6445,7,45,60/400x200@2x?access_token=pk.eyJ1IjoidmVzaGFudCIsImEiOiJja3ZvMzU4bHY2dHNxMnBtczc2NHJzYXRoIn0.8IUqu-qME9OuS4tSm4BDDg"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{props.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
			<CardActions>
				<Link href={props.source} passHref>
					<Button size="small" color="primary">
						Visit Source
					</Button>
				</Link>
				<Link href={props.download} passHref>
					<Button size="small" color="primary">
						Download Dataset
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default DatasetCard;
