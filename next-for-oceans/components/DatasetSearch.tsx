import React from "react";
import {
	Paper,
	InputBase,
	Autocomplete,
	IconButton,
	Divider,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Search as SearchIcon,
	FilterList as FilterListIcon,
} from "@mui/icons-material";
import DatasetsStyles from "../styles/Datasets.module.css";

/*
Dataset Search: used on dataset page
args: datasets - array of datasets
*/

const top100Films = [
	{ title: "The Shawshank Redemption", year: 1994 },
	{ title: "The Godfather", year: 1972 },
	{ title: "The Godfather: Part II", year: 1974 },
];

export interface DatasetSearchProps {
	datasets: any;
}

const DatasetSearch = (props: DatasetSearchProps) => {
	return (
		<>
			<Paper
				component="form"
				classes={{ root: DatasetsStyles.frostedCard }}
				sx={{
					bgcolor: "#ffffff0f",
					p: "2px 4px",
					maxWidth: 600,
					display: "flex",
					flex: 1,
					alignItems: "center",
				}}
			>
				<IconButton sx={{ p: "10px" }} aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Autocomplete
					freeSolo
					id="free-solo-2-demo"
					sx={{ flex: 1 }}
					disableClearable
					options={props.datasets.map((option: any) => option.title)}
					renderInput={(params) => (
						<InputBase
							ref={params.InputProps.ref}
							inputProps={params.inputProps}
							placeholder="Search Datasets"
							sx={{ ml: 1, flex: 1, display: "block" }}
						/>
					)}
				/>
				<IconButton
					type="submit"
					sx={{ p: "10px" }}
					aria-label="search"
				>
					<SearchIcon />
				</IconButton>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton
					color="primary"
					sx={{ p: "10px" }}
					aria-label="directions"
				>
					<FilterListIcon />
				</IconButton>
			</Paper>
		</>
	);
};

export default DatasetSearch;
