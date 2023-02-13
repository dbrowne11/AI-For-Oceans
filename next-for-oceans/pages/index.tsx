import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import HomeCard from "../components/HomeCard";

const Home: NextPage = () => {
	return (
		<Box
			sx={{
				minHeight: "50vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h1"
				component="h1"
				sx={{
					textAlign: "center",
					color: "#fff",
				}}
			>
				<Typography variant="h3" component="span">
					Welcome to
				</Typography>
				<br />
				<Typography variant="h1" component="span">
					AI for Oceans
				</Typography>
			</Typography>
		</Box>
	);
};

export default Home;
