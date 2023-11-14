import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "./theme";
import Footer from "./components/Footer.jsx";
import ColorSchemeToggle from "./components/ColorSchemeToggle.jsx";
import Body from "./pages/Body.jsx";

export default function App() {
  return (
    <CssVarsProvider
      defaultMode={"light"}
      disableTransitionOnChange
      theme={framesxTheme}
    >
      <CssBaseline />

      <Box
        sx={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <ColorSchemeToggle />
        <Body />
        <Footer />
      </Box>
    </CssVarsProvider>
  );
}
