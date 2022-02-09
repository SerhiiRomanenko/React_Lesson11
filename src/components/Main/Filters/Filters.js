import React from "react";
import "./Filters.scss";
import {Typography} from "@mui/material";

export function Filters() {
  return <div className="filters">
    <Typography className="filters__title" variant="h4" gutterBottom component="div" color="primary">
      Фільтри:
    </Typography>
  </div>
}