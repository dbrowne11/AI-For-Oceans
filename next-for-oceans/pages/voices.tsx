import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Voices.module.css";
import {
	Grid,
	Typography,
	Paper,
	Stack,
	List,
	ListItem,
	Avatar,
} from "@mui/material";
import img from "../images/OceanBanner.png";
import InfoCard from "../components/InfoCard";
import BioCard from "../components/BioCard";

// Allow for students to put articles, infographics, etc
// Left side of page -- personalized bios

const Voices: NextPage = () => {
	return (
		<div>
			<Typography
				variant="h3"
				component="h2"
				color="secondary.contrastText"
				gutterBottom
				align="center"
			>
				Our Voices
			</Typography>
			<InfoCard>
				Research has found that when students use what they are learning
				in college to inspire others in their communities, they are more
				likely to succeed in their careers. Students in AI for the Ocean
				are as inspiring as they come. They have worked hard to get
				where they are: majoring (and some also minoring) in challenging
				STEM disciplines at an R1 research university and also
				participating in an intensive research program with the aim of
				advancing ocean science.
				<br></br>
				<br></br>
				Our students are committed to using their voices and
				opportunities to inspire other students like you to succeed in
				STEM. As the project progresses, students will post their
				stories of educational perseverance and overcoming obstacles
				here, with the goal of inspiring you to achieve your own success
				in STEM.
			</InfoCard>
			<br />
			<Grid container alignItems="top" direction="row" spacing={2}>
				<Grid item xs={6}>
					<Grid item margin={1}>
						<BioCard
							src="/missingpic_icon.jpg"
							bio="Insert voices bio here"
						/>
					</Grid>
					<Grid item margin={1}>
						<BioCard
							src="/missingpic_icon.jpg"
							bio="Insert voices bio here"
						/>
					</Grid>
					<Grid item margin={1}>
						<BioCard
							src="/missingpic_icon.jpg"
							bio="Insert voices bio here"
						/>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid item margin={1}>
						<InfoCard>
							Here we can summarize and link to articles
						</InfoCard>
					</Grid>
					<Grid item margin={1}>
						<InfoCard>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec at congue diam. Vestibulum a sagittis
							tortor. Nullam eget placerat turpis. Nam dictum urna
							consectetur fermentum efficitur. Praesent venenatis
							condimentum enim sit amet convallis.
						</InfoCard>
					</Grid>
					<Grid item margin={1}>
						<InfoCard>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec at congue diam. Vestibulum a sagittis
							tortor. Nullam eget placerat turpis. Nam dictum urna
							consectetur fermentum efficitur. Praesent venenatis
							condimentum enim sit amet convallis.
						</InfoCard>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Voices;
