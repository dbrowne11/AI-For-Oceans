import React from "react";
import { Paper, Typography, Grid, Card } from "@mui/material";
import homeCardStyles from "../styles/HomeCard.module.css";
import Link from "next/link";

/*
Simple card to display a title and info

Args: 
  src: children components displayed on card
  title: Title on the card
  
Current use: Unused in this version, but useful as a model or for future pages

*/

export interface HomeCardProps {
	children: React.ReactNode;
	title: String;
}

const HomeCard = (props: HomeCardProps) => {
	return (
		<Link href="/">
			<a>
				<Card
					classes={{ root: homeCardStyles.card }}
					sx={{
						padding: "2em",
					}}
				>
					<Typography
						variant="h5"
						component="h2"
						color="secondary"
						gutterBottom
					>
						{props.title}
					</Typography>
					<Typography
						variant="body1"
						component="p"
						color="primary.contrastText"
					>
						{props.children}
					</Typography>
				</Card>
			</a>
		</Link>
	);
};

export default HomeCard;
