import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const Nav = () => {
	return (
		<div>

			<Link href="/mission" passHref>
				<Button size="large" sx={{color: "secondary.contrastText"}}>
					Mission
				</Button>
			</Link>
			<Link href="/voices" passHref>
				<Button size="large" sx={{color: "secondary.contrastText"}}>
					Voices
				</Button>
			</Link>
			<Link href="/people" passHref>
				<Button size="large" sx={{color: "secondary.contrastText"}}>
					People
				</Button>
			</Link>
			<Link href="/learn" passHref>
				<Button size="large" sx={{color: "secondary.contrastText"}}>
					Learn
				</Button>
			</Link>
			<Link href="/datasets" passHref>
				<Button size="large" sx={{color: "secondary.contrastText"}}>
					Datasets
				</Button>
			</Link>
			<Link href="/apply-ai" passHref>
				<Button size="large" sx={{color: "secondary.contrastText"}}>
					Apply AI
				</Button>
			</Link>
		</div>
	);
};

export default Nav;
