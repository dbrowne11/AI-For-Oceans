import React from "react";
import { Box, Container, Paper, Grid, Typography } from "@mui/material";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<Paper
			classes={{ root: footerStyles.footer }}
			sx={{
				mt: 6,
				pt: 4,
				pb: 4,
				bgcolor: "transparent",
				bottom: 0, 
				width:"100%"
			}}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs>
						<Typography
							variant="button"
							color="primary.contrastText"
							gutterBottom
						>
							Footer 1
						</Typography>
						<Typography
							variant="body2"
							component="p"
							color="primary.contrastText"
							gutterBottom
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec at congue diam. Vestibulum a sagittis
							tortor. Nullam eget placerat turpis. Nam dictum urna
							consectetur fermentum efficitur. Praesent venenatis
							condimentum enim sit amet convallis.
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography
							variant="button"
							color="primary.contrastText"
							gutterBottom
						>
							Footer 2
						</Typography>
						<Typography
							variant="body2"
							component="p"
							color="primary.contrastText"
							gutterBottom
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec at congue diam. Vestibulum a sagittis
							tortor. Nullam eget placerat turpis. Nam dictum urna
							consectetur fermentum efficitur. Praesent venenatis
							condimentum enim sit amet convallis.
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography
							variant="button"
							color="primary.contrastText"
							gutterBottom
						>
							Footer 3
						</Typography>
						<Typography
							variant="body2"
							component="p"
							color="primary.contrastText"
							gutterBottom
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec at congue diam. Vestibulum a sagittis
							tortor. Nullam eget placerat turpis. Nam dictum urna
							consectetur fermentum efficitur. Praesent venenatis
							condimentum enim sit amet convallis.
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography
							variant="button"
							color="primary.contrastText"
							gutterBottom
						>
							Footer 4
						</Typography>
						<Typography
							variant="body2"
							component="p"
							color="primary.contrastText"
							gutterBottom
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec at congue diam. Vestibulum a sagittis
							tortor. Nullam eget placerat turpis. Nam dictum urna
							consectetur fermentum efficitur. Praesent venenatis
							condimentum enim sit amet convallis.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Paper>
	);
};

export default Footer;
