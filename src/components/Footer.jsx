import React from "react";

import { Box, Link, Typography } from "@mui/joy";

export default function Footer({ lang }) {
  return (
    <Box component="footer" sx={{ py: 3 }}>
      <Typography level="body-xs" textAlign="center">
        <Link
          color="neutral"
          href="https://github.com/iamdennshi"
          target="_blank"
        >
          {lang ? "Сделано с ❤ ИСб-4" : "Made with ❤ ISb-4"}
        </Link>
      </Typography>
    </Box>
  );
}
