import React from "react";
import { Paper, Typography, Grid, Card, Avatar } from "@mui/material";
import homeCardStyles from "../styles/HomeCard.module.css";

/*

Args: 
  src: string path to an image used for the avatar
  bio: Biography to be displayed alongside the avatar
  
Current use: Used on the voices page left column

*/

export interface BioCardProps {
	//children: React.ReactNode;
	src: string;
	bio: string;
}

const BioCard = (props: BioCardProps) => {
	return (
		<Card
			variant="outlined"
			classes={{ root: homeCardStyles.card }}
			sx={{
				bgcolor: "transparent",
				padding: "2em",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Avatar src={props.src} alt="?" />
			<Typography variant="body1" component="p" paddingLeft={2}>
				{props.bio}
			</Typography>
		</Card>
	);
};

export default BioCard;
