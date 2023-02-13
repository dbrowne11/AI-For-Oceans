import React from "react";
import { Paper, Typography, Grid, Card } from "@mui/material";
import homeCardStyles from "../styles/HomeCard.module.css";

export interface InfoCardProps {
  children: React.ReactNode;
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <Card
      variant="outlined"
      classes={{ root: homeCardStyles.card }}
      sx={{
        bgcolor: "transparent",
        padding: "2em",
      }}
    >
      <Typography variant="body1" component="p">
        {props.children}
      </Typography>
    </Card>
  );
};

export default InfoCard;