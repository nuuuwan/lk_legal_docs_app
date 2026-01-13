import { Component } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { STYLE } from "./nonview/cons";
import { Box } from "@mui/material";

import { HomePage } from "./view/pages";
import { VersionView } from "./view/atoms";

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
        <Box sx={{ width: "calc(min(640px, 100%))", margin: "0 auto" }}>
          <HomePage />
          <VersionView />
        </Box>
      </ThemeProvider>
    );
  }
}
