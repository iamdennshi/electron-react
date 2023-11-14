import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Container } from "@mui/joy";

export default function Hero({ onClickStart }) {
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
          Экспертная система
        </Typography>
        <Typography
          level="h1"
          fontWeight="x1"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          textTransform="uppercase"
        >
          Выбор языка программирования
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Определитесь с языком программирования менее чем за 3 минуты. Ответив
          на вопросы, система подберет для вас подходящий язык, который решит
          вашу задачу
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
            Выбрать сейчас
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
              языков программирования
            </Typography>
          </div>
          <div>
            <Typography fontSize="xl4" fontWeight="lg">
              30+
            </Typography>
            <Typography textColor="text.secondary">
              продукционных правил
            </Typography>
          </div>
          <div>
            <Typography fontSize="xl4" fontWeight="lg">
              {"<3"}
            </Typography>
            <Typography textColor="text.secondary">минут</Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
