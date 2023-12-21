import { IconButton } from "@mui/joy";
import React from "react";
import LangIcon from "./LangIcon.jsx";

export default function LangToggle({ lang, setLang }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        setLang((prev) => !prev);
      }}
      sx={{
        position: "fixed",
        zIndex: 999,
        top: "1rem",
        left: "1rem",
        borderRadius: "50%",
        boxShadow: "sm",
      }}
    >
      {lang ? <LangIcon lang="ru" /> : <LangIcon lang="eng" />}
    </IconButton>
  );
}
