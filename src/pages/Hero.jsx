import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Container } from "@mui/joy";

export default function Hero({ lang, onClickStart }) {
  return (
    <Container
      sx={() => ({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 10,
        gap: 4,
      })}
    >
      <Box
        sx={() => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
        })}
      >
        <Typography color="primary" fontSize="lg" lineHeight="lg">
          {lang ? "Экспертная система" : "Rule-based expert system"}
        </Typography>
        <Typography level="h1" fontWeight="x1" textTransform="uppercase">
          {lang
            ? "Выбор языка программирования"
            : "Choice programming language"}
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          {lang
            ? "Определитесь с языком программирования менее чем за 3 минуты. Ответив на вопросы, система подберет для вас подходящий язык, который поможет решить вашу задачу"
            : "Decide on a programming language less than 3 minutes. Answering the questions, the system will select corresponding one for you, which will help to solve your problem"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            my: 2,
            "& > *": { flex: "auto" },
          }}
        >
          <Button
            onClick={onClickStart}
            size="lg"
            endDecorator={<ArrowForward fontSize="xl" />}
          >
            {lang ? "Выбрать сейчас" : "Let's go"}
          </Button>
        </Box>
        <Box
          sx={() => ({
            display: "flex",
            columnGap: 4.5,
            rowGap: 1.5,
            textAlign: "center",
            alignSelf: "stretch",
            "& > *": {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              alignItems: "center",
            },
          })}
        >
          <div>
            <Typography fontSize="xl4" fontWeight="lg">
              18+
            </Typography>
            <Typography textColor="text.secondary">
              {lang ? "языков программирования" : "program languages"}
            </Typography>
          </div>
          <div>
            <Typography fontSize="xl4" fontWeight="lg">
              30+
            </Typography>
            <Typography textColor="text.secondary">
              {lang ? "продукционных правил" : "production rules"}
            </Typography>
          </div>
          <div>
            <Typography fontSize="xl4" fontWeight="lg">
              {"<3"}
            </Typography>
            <Typography textColor="text.secondary">
              {lang ? "минут" : "minutes"}
            </Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
