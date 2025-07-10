import React, { Component } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { STYLE } from "./nonview/constants";
import { Box } from "@mui/material";

import { HomePage } from "./view/features";

const THEME = createTheme({
  typography: {
    fontFamily: STYLE.FONT.FAMILY,
    fontSize: STYLE.FONT.SIZE,
  },
  palette: {
    text: {
      primary: "#000",
      secondary: "#999",
    },
  },
});

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Box sx={{ width: 640, margin: "0 auto" }}>
          <HomePage />
        </Box>
      </ThemeProvider>
    );
  }
}
