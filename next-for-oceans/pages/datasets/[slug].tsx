import React from "react";
import {
	Paper,
	Box,
	Button,
	ButtonGroup,
	Typography,
	Divider,
	Chip,
	Avatar,
	Link,
} from "@mui/material";
import {
	ArrowBack as ArrowBackIcon,
	Schedule as ScheduleIcon,
	LocalOffer as LocalOfferIcon,
	AccountCircle as AccountCircleIcon,
	CloudDownload as CloudDownloadIcon,
	Source as SourceIcon,
} from "@mui/icons-material";
import DatasetsStyles from "../../styles/Datasets.module.css";
import NextLink from "next/link";
import Image from "next/image";

export async function getServerSideProps(context: any) {
	const slug = context.params.slug;
	const res = await fetch(`${process.env.ROOT}/api/datasets/${slug}`);
	const data = await res.json(); //GET request from the database to retrieve all datasets' info
	return { props: { data } }; //return datasets' info
}

const dataset = (props: any) => {
	const dataset = props.data.data;
	return (
		<Paper
			classes={{ root: DatasetsStyles.frostedCard }}
			elevation={8}
			sx={{ p: 4, bgcolor: "#ffffff0f" }}
		>
			<Box>
				<NextLink href="/datasets" passHref>
					<Button variant="outlined" startIcon={<ArrowBackIcon />}>
						Datasets
					</Button>
				</NextLink>
				<Typography variant="h1" gutterBottom component="h1">
					{dataset.title}
				</Typography>
				<Box>
					<ButtonGroup>
						<Button
							variant="contained"
							disableElevation
							startIcon={<CloudDownloadIcon />}
							href={dataset.download}
						>
							Download
						</Button>
						<Button
							variant="outlined"
							startIcon={<SourceIcon />}
							href={dataset.source}
						>
							Source
						</Button>
					</ButtonGroup>
				</Box>
				<Box>
					<Typography variant="h5" gutterBottom component="h2">
						<AccountCircleIcon fontSize="small" />
						Creators/Authors:
					</Typography>
					<Chip
						label="Holmberg J."
						variant="outlined"
						color="primary"
						avatar={<Avatar>HJ</Avatar>}
					/>
					<Chip
						label="Norman B."
						variant="outlined"
						color="primary"
						avatar={<Avatar>NB</Avatar>}
					/>
					<Chip
						label="Arzoumanian Z."
						variant="outlined"
						color="primary"
						avatar={<Avatar>AZ</Avatar>}
					/>
				</Box>
				<Divider />
				<Box>
					<Typography variant="h5" gutterBottom component="h2">
						<ScheduleIcon fontSize="small" />
						Publication Date:
					</Typography>
					<Chip label="8 April 2009" clickable />
				</Box>
				<Divider />
				<Box>
					<Typography variant="h5" gutterBottom component="h2">
						<LocalOfferIcon fontSize="small" />
						Citation:
					</Typography>
					<Typography variant="body1" gutterBottom component="p">
						{dataset.citation}
					</Typography>
				</Box>
				<Divider />
				<Box>
					<Typography variant="h5" gutterBottom component="h2">
						<LocalOfferIcon fontSize="small" />
						Spacial Coverage:
					</Typography>
					<Chip label="113.6403, -22.6445" clickable />
					<br />
					<Image
						alt="Spacial Coverage"
						width="300"
						height="200"
						src="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/113.6403,-22.6445,7,45,60/300x200@2x?access_token=pk.eyJ1IjoidmVzaGFudCIsImEiOiJja3ZvMzU4bHY2dHNxMnBtczc2NHJzYXRoIn0.8IUqu-qME9OuS4tSm4BDDg"
					/>
				</Box>
				<Divider />
				<Box>
					<Typography variant="h5" gutterBottom component="h2">
						<LocalOfferIcon fontSize="small" />
						Tags:
					</Typography>
					<Chip
						label="Whale"
						component="a"
						href="#basic-chip"
						clickable
					/>
					<Chip
						label="Australia"
						component="a"
						href="#basic-chip"
						clickable
					/>
				</Box>
				<Box>
					<ButtonGroup>
						<Button
							variant="contained"
							disableElevation
							startIcon={<CloudDownloadIcon />}
							href={dataset.download}
						>
							Download
						</Button>
						<Button
							variant="outlined"
							startIcon={<SourceIcon />}
							href={dataset.source}
						>
							Source
						</Button>
					</ButtonGroup>
				</Box>
			</Box>
		</Paper>
	);
};

export default dataset;
