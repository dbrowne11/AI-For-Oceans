import React from "react";
import { Paper, Typography, Grid, Card } from "@mui/material";
import PeopleCardStyles from "../styles/PeopleCard.module.css";

export interface PrimaryPaperProps {
  children: React.ReactNode;
}

/* Basic Paper Component styled for page - used on mission page */

const PrimaryPaper = (props: PrimaryPaperProps) => {
  return (
    <Paper
      classes={{ root: PeopleCardStyles.glassCard }}
      elevation={1}
      sx={{
        bgcolor: "transparent",
        padding: "2em",
        //backdropFilter: "initial"
      }}
    >
      <Typography variant="body1" component="p">
        {props.children}
      </Typography>
    </Paper>
  );
};

export default PrimaryPaper;
