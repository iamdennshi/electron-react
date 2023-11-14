import React from "react";

import { Box, Link, Typography } from "@mui/joy";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3 }}>
      <Typography level="body-xs" textAlign="center">
        <Link
          color="neutral"
          href="https://github.com/iamdennshi"
          target="_blank"
        >
          Сделано с ❤ ИСб-4
        </Link>
      </Typography>
    </Box>
  );
}
