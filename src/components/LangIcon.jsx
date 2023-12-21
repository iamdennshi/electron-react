import React from "react";
import ru from "../assets/ru.png";
import usa from "../assets/usa.png";

export default function LangIcon({ lang }) {
  return (
    <>
      {lang == "ru" ? (
        <img height={24} src={ru}></img>
      ) : (
        <img height={24} src={usa}></img>
      )}
    </>
  );
}
