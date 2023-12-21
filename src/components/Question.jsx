import { Box, Button, Container, Typography } from "@mui/joy";
import React from "react";

export default function Question({
  lang,
  question,
  answers,
  onClickAnswers,
  questionNumber,
}) {
  return (
    <Container
      sx={() => ({
        height: "100%",
      })}
    >
      <Box
        sx={() => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          gap: 5,
        })}
      >
        <Typography
          textTransform="uppercase"
          textAlign="center"
          level="h1"
          fontWeight="x1"
        >
          {lang ? "Вопрос" : "Question"} {questionNumber + 1}
        </Typography>
        <Typography textAlign="center" level="h1" fontWeight="x1">
          {question}
        </Typography>
        <Box
          sx={() => ({
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          })}
        >
          {answers.map((i, index) => (
            <Button
              sx={() => ({ width: "200px" })}
              size="lg"
              key={index}
              onClick={() => onClickAnswers(index, question)}
            >
              {i}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
