import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Mission.module.css";

import { Grid, Typography, Paper } from "@mui/material";
import PrimaryPaper from "../components/PrimaryPaper";

const Mission: NextPage = () => {
	return (
		<PrimaryPaper>
			<Grid container className={styles.main} rowSpacing={2}>
				<Grid item>
					<Typography
						variant="h4"
						component="h1"
						gutterBottom
						align="center"
						color="secondary.contrastText"
					>
						AI for Oceans
					</Typography>
				</Grid>
				<Grid item marginRight={5} marginLeft={5}>
					<p>
						The mission of the 2021-2022 AI for the Ocean project is
						to explore how Artificial Intelligence tools can be
						applied to to study the oceans and the ecosystems they
						harbor, enable monitoring of marine habitats, and
						promote ocean management and conservation.{" "}
					</p>
				</Grid>

				<Grid item>
					<Typography
						variant="h4"
						component="h1"
						gutterBottom
						align="center"
						color="secondary.contrastText"
					>
						Stem Success Research
					</Typography>
				</Grid>
				<Grid item marginRight={5} marginLeft={5}>
					<p>
						The broader mission of the STEM Success Research Program
						is to provide meaningful collaborative research
						experiences to diverse, interdisciplinary groups of
						undergraduate students. We seek to help students learn
						to work together to conduct real,interdisciplinary
						research that brings together science, technology, and
						application. We are striving to create a transformative
						undergraduate research experience that will not only
						enhance the education students receive, but also help
						expand access, justice, equity, diversity, and inclusion
						in STEM professions after students graduate.
					</p>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Typography
						variant="h4"
						component="h1"
						gutterBottom
						align="center"
						color="secondary.contrastText"
					>
						Funding
					</Typography>
				</Grid>
				<Grid item marginRight={5} marginLeft={5}>
					<p>
						Funding for this program was provided through a grant
						from the National Science Foundation.
					</p>
				</Grid>
			</Grid>
		</PrimaryPaper>
	);
};

export default Mission;
