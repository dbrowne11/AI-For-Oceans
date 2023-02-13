import React from "react";
import {
	Paper,
	Typography,
	Box,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";
import PeopleCardStyles from "../styles/PeopleCard.module.css";
import styles from "../styles/Home.module.css";
import missingImg from "../public/people/missingpic_icon.jpg";
import Image from "next/image";
import { maxHeight } from "@mui/system";

export interface PeopleCardProps {
	name: string;
	text: string;
	image: string;
}

/*

People card: used on people page
args: name - name of person
      text - person's bio
      image - person's photo

*/

const PeopleCard = (props: PeopleCardProps) => {
	console.log(props);
	return (
		<Card
			variant="outlined"
			classes={{ root: PeopleCardStyles.glassCard }}
			sx={{
				bgcolor: "transparent",
				maxWidth: 345,
			}}
		>
			<CardMedia
				component="img"
				alt={props.name}
				height="250"
				image={props.image}
			></CardMedia>
			<CardContent sx={{ p: 3 }}>
				<Typography
					variant="h4"
					component="h3"
					color="primary.contrastText"
					gutterBottom
				>
					{props.name}
				</Typography>
				<Typography
					variant="body1"
					component="p"
					color="primary.contrastText"
				>
					{props.text}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PeopleCard;
