import React, { Children } from "react";
import { Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export interface LayoutProps {
	children: React.ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
	return (
		<div>
			<Header />
			<Container component="main" sx={{ minHeight: "50vh" }}>
				{props.children}
			</Container>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
