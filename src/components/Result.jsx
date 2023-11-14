import React from "react";

import { RestartAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Sheet,
  Typography,
} from "@mui/joy";

export default function Result({
  onClickRestart,
  answer,
  image,
  description,
  listOfQuestions,
}) {
  console.log(listOfQuestions);
  return (
    <Container
      sx={() => ({
        height: "100%",
      })}
    >
      <Box
        sx={() => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          gap: 5,
        })}
      >
        <Box
          sx={() => ({
            display: "flex",
            width: "100%",
            justifyContent: "center",
          })}
        >
          <Typography
            mr={2}
            level="h1"
            fontWeight="x1"
            textTransform="uppercase"
          >
            Ваш выбор -{" "}
            <Typography textTransform="capitalize">{answer}</Typography>
          </Typography>
          <img width={50} height={50} src={image}></img>
        </Box>

        <Box
          sx={() => ({
            display: "flex",
            maxWidth: 900,
            gap: 5,
          })}
        >
          <Box
            sx={() => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            })}
          >
            <Typography>
              <b>{answer}</b> - {description}
            </Typography>

            <Box
              sx={() => ({
                display: "flex",
                justifyContent: "center",
                pt: 2,
                mb: 5,
              })}
            >
              <Button
                onClick={onClickRestart}
                size="lg"
                endDecorator={<RestartAlt fontSize="xl" />}
              >
                Повторить выбор
              </Button>
            </Box>
          </Box>
          <Box>
            <Sheet
              variant="outlined"
              sx={{
                width: 320,
                maxHeight: 300,
                overflow: "auto",
                borderRadius: "sm",
              }}
            >
              <List>
                <ListItem nested>
                  <ListSubheader sticky>Вопросы и ответы</ListSubheader>
                  <List>
                    {listOfQuestions.map((item, index) => (
                      <ListItem key={item}>
                        <ListItemButton>
                          <Typography>
                            {index + 1}. {item.question}
                            <br />
                            Ваш ответ:{" "}
                            <Typography
                              variant="outlined"
                              color={item.ans == "Да" ? "success" : "warning"}
                            >
                              {item.ans}
                            </Typography>
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </ListItem>
              </List>
            </Sheet>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
