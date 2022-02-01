import React from 'react';
import {App} from './App';
import {theme} from "./services/theme";
import {Paper} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";

export function AppWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{height: '100%'}}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}
