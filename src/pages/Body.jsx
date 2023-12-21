import React, { useState } from "react";
import Hero from "./Hero.jsx";
import Question from "../components/Question.jsx";
import Result from "../components/Result.jsx";
import jsLogo from "../assets/js.png";
import rustLogo from "../assets/rust.png";
import scratchLogo from "../assets/scratch.png";
import arduinoLogo from "../assets/arduino.png";
import kotlinLogo from "../assets/kotlinLogo.png";
import swiftLogo from "../assets/swift.svg";
import luaLogo from "../assets/lua.png";
import delphiLogo from "../assets/delphiLogo.png";
import asmLogo from "../assets/asmLogo.png";
import cLogo from "../assets/cLogo.png";
import cppLogo from "../assets/cppLogo.png";
import dartLogo from "../assets/dartLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import csharpLogo from "../assets/csharpLogo.svg";
import sqlLogo from "../assets/sqlLogo.jpg";
import objcLogo from "../assets/objcLogo.png";
import javaLogo from "../assets/javaLogo.png";

const knowleageBase = {
  questions: [
    {
      id: 1,
      content: {
        ru: "Есть ли опыт в программировании?",
        eng: "Do you have any programming experience?",
      },
      childs: [2, 34],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 2,
      content: {
        ru: "Программа должна исполняться на ОС компьютеров или ноутбуков (Windows или Linux)?",
        eng: "Do you need a program running on a PC or a laptop (Windows or Linux)?",
      },
      childs: [3, 43],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 3,
      content: {
        ru: "Под какую ОС создается программа?",
        eng: "Which OS is the program being created for?",
      },
      childs: [4, 54, 47],
      answers: {
        ru: ["Windows", "Linux", "Неважно"],
        eng: ["Windows", "Linux", "No matter"],
      },
    },
    {
      id: 4,
      content: {
        ru: "Вид программы?",
        eng: "Which interface will the program be use?",
      },
      childs: [5, 6, 56],
      answers: {
        ru: ["Неважно", "Оконное", "Консольное"],
        eng: [
          "No matter",
          "Graphical user interface",
          "Command-line interface",
        ],
      },
    },

    {
      id: 56,
      content: {
        ru: "Программа должна работать с CMS?",
        eng: "Will the program interact with the CMS?",
      },
      childs: [7, 6],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 54,
      content: "Программа должна работать в веб браузере?",
      childs: [5, 53],
      answers: ["Да", "Нет"],
    },
    {
      id: 39,
      content: "Программа представляет собой 2D или 3D игру?",
      childs: [49, 48],
      answers: ["Да", "Нет"],
    },
    {
      id: 37,
      content: "Программа должна исполняться на микроконтроллере?",
      childs: [38, 33],
      answers: ["Да", "Нет"],
    },
    {
      id: 38,
      content: "Есть ли опыт в низкоуровневом программировании?",
      childs: [30, 29],
      answers: ["Да", "Нет"],
    },
    {
      id: 43,
      content:
        "Программа должна исполняться на ОС смартфонов (IOS или Android)?",
      childs: [44, 37],
      answers: ["Да", "Нет"],
    },

    {
      id: 44,
      content: "Под какую мобильную ОС создается программа?",
      childs: [45, 46, 39],
      answers: ["Android", "IOS", "Неважно"],
    },

    {
      id: 45,
      content: "Требуется ли поддержка старых устройств?",
      childs: [8, 9],
      answers: ["Да", "Нет"],
    },
    {
      id: 46,
      content: "Требуется ли поддержка старых устройств?",
      childs: [10, 11],
      answers: ["Да", "Нет"],
    },

    {
      id: 47,
      content: "Программа представляет собой 2D или 3D игру?",
      childs: [50, 48],
      answers: ["Да", "Нет"],
    },
    {
      id: 50,
      content: "Есть опыт в создании игры?",
      childs: [51, 49],
      answers: ["Да", "Нет"],
    },
    {
      id: 30,
      content: "Требуется ли автоматическая очистка памяти?",
      childs: [14, 26],
      answers: ["Да", "Нет"],
    },
    {
      id: 26,
      content: "Для вас важен полный контроль над микроконтроллером?",
      childs: [25, 17],
      answers: ["Да", "Нет"],
    },
    {
      id: 25,
      content: "Требуется ли максимальная производительность?",
      childs: [15, 16],
      answers: ["Да", "Нет"],
    },
    {
      id: 34,
      content: "Для вас важна популярность языка программирования?",
      childs: [40, 31],
      answers: ["Да", "Нет"],
    },
    {
      id: 40,
      content: "Программа создается с целью обучения основам программирования?",
      childs: [53, 35],
      answers: ["Да", "Нет"],
    },
    {
      id: 35,
      content:
        "Требуется быстро создать рабочее приложение с красивым графическим интерфейсом?",
      childs: [5, 6],
      answers: ["Да", "Нет"],
    },
    {
      id: 31,
      content: "Программа создается с целью обучения основам программирования?",
      childs: [32, 27],
      answers: ["Да", "Нет"],
    },
    {
      id: 27,
      content: "Программа создается с целью создания игр?",
      childs: [28, 24],
      answers: ["Да", "Нет"],
    },
    {
      id: 24,
      content: "Программа должна работать на мобильных устройствах?",
      childs: [23, 20],
      answers: ["Да", "Нет"],
    },
    {
      id: 23,
      content: "Под какую мобильную ОС создается программа?",
      childs: [9, 11],
      answers: ["Android", "IOS"],
    },
    {
      id: 20,
      content: "Программа должна исполняться на микроконтроллере?",
      childs: [29, 19],
      answers: ["Да", "Нет"],
    },
  ],
  answers: [
    {
      id: 5,
      content: "JavaScript",
      image: jsLogo,
      description: `обычно используется как встраиваемый язык для
      программного доступа к объектам приложений. Наиболее широкое
      применение находит в браузерах как язык сценариев для придания
      интерактивности веб-страницам`,
    },
    {
      id: 19,
      content: "Scratch",
      image: scratchLogo,
      description: `это онлайн-среда программирования, расположенная на scratch.mit.edu. В ней используется визуальный редактор, который выглядит вот так: Язык и редактор нацелены на создание игр, анимаций, историй и других визуальных произведений. Пользователи Scratch (скрэтчеры) могут создавать и сохранять проекты в своём аккаунте, а также публично делиться ими.`,
    },
    {
      id: 28,
      content: "Lua",
      image: luaLogo,
      description: `язык программирования расширений, разработан для поддержки общего процедурного программирования с возможностью описания данных`,
    },
    {
      id: 32,
      content: "Delphi",
      image: delphiLogo,
      description: `это язык программирования, основанный на Pascal. Изначально он создавался для разработки приложений для ОС Windows, потом стал применяться и для других целей`,
    },
    {
      id: 15,
      content: "Язык ассемблер",
      image: asmLogo,
      description: `это низкоуровневый язык программирования, который представляет собой промежуточное звено между машинным кодом и высокоуровневыми языками программирования. Он используется для написания программ, которые управляют компьютером или другими устройствами на более низком уровне, непосредственно взаимодействуя с аппаратным обеспечением`,
    },
    {
      id: 16,
      content: "Язык С",
      image: cLogo,
      description: `является компилируемым языком, а это значит, что компилятор транслирует исходный код на Си в исполняемый файл, который содержит набор машинных инструкций. Но разные платформы имеют свои особенности, поэтому скомпилированные программы нельзя просто перенести с одной платформы на другую и там уже запустить`,
    },
    {
      id: 17,
      content: "C++",
      image: cppLogo,
      description: `это язык программирования общего назначения, созданный Бьярне Страуструпом как расширение языка программирования C, или "C с классами". Язык значительно расширился с течением времени, и современный C++ теперь имеет объектно-ориентированные, универсальныеи функциональные возможности в дополнение к средствам для низкоуровневой манипуляции памятью`,
    },
    {
      id: 14,
      content: "Rust",
      image: rustLogo,
      description: `это язык общего назначения, заточенный под разработку высоконагруженных систем. На нём пишут веб-приложения, браузерные движки, блокчейны и другие сложные платформы, которые обрабатывают запросы миллионов пользователей`,
    },
    {
      id: 29,
      content: "Arduino C",
      image: arduinoLogo,
      description: `представляет собой язык C++ с фреймворком Wiring, он имеет некоторые отличия по части написания кода, который компилируется и собирается с помощью avr-gcc, с особенностями, облегчающими написание работающей программы — имеется набор библиотек, включающий в себя функции и объекты`,
    },
    {
      id: 8,
      content: "Java",
      image: javaLogo,
      description: ` это универсальный язык. Это значит, что подавляющее большинство задач можно выполнить при помощи данных технологий. Но все же существует несколько основных областей, в которых применяется этот язык. Java используется во многих сферах, начиная с веб-сайтов и заканчивая приложениями для Android`,
    },
    {
      id: 9,
      content: "Kotlin",
      image: kotlinLogo,
      description: `это современный мощный и выразительный язык программирования, который предлагает ряд преимуществ перед Java`,
    },
    {
      id: 10,
      content: "Objective C",
      image: objcLogo,
      description: `это язык программирования, на котором пишут программы для iOS и MacOS. Он создан на основе языка C, но расширяет его возможности и реализует другой подход к программированию`,
    },
    {
      id: 11,
      content: "Swift",
      image: swiftLogo,
      description: `это новый язык программирования для разработки iOS и OS X приложений, который сочетает в себе все лучшее от C и Objective-C`,
    },
    {
      id: 33,
      content: "SQL",
      image: sqlLogo,
      description: `это язык запросов, который применяют для работы с базами данных, структурированных особым образом`,
    },
    {
      id: 6,
      content: "С#",
      image: csharpLogo,
      description: `это язык с C-подобным синтаксисом. Здесь он близок в этом отношении к C++ и Java. Будучи объектно-ориентированным языком, он много перенял у Java и С++. Как и Java, C# изначально предназначался для веб-разработки, и примерно 75% его синтаксических возможностей такие же, как у Java. C# также называют «очищенной версией Java»`,
    },
    {
      id: 49,
      content: "C# (Unity3D)",
      image: csharpLogo,
      description: `это язык с C-подобным синтаксисом. Здесь он близок в этом отношении к C++ и Java. Будучи объектно-ориентированным языком, он много перенял у Java и С++. Как и Java, C# изначально предназначался для веб-разработки, и примерно 75% его синтаксических возможностей такие же, как у Java. C# также называют «очищенной версией Java»`,
    },
    {
      id: 51,
      content: "C++ (UnrealEngine)",
      image: cppLogo,
      description: `это язык программирования общего назначения, созданный Бьярне Страуструпом как расширение языка программирования C, или "C с классами". Язык значительно расширился с течением времени, и современный C++ теперь имеет объектно-ориентированные, универсальныеи функциональные возможности в дополнение к средствам для низкоуровневой манипуляции памятью`,
    },
    {
      id: 53,
      content: "Python",
      image: pythonLogo,
      description: `это язык программирования, который используется в разных областях. Он не только позволяет создавать веб и мобильные приложения, но и разрабатывать программное обеспечение для ПК`,
    },
    {
      id: 48,
      content: "Dart",
      image: dartLogo,
      description: `это новый класс-ориентированный язык для создания структурированных веб-приложений. Он разрабатывается, чтобы быть простым, эффективным и масштабируемым. Dart соединяет в себе новые мощные возможности со знакомыми языковыми конструкциями в один понятный и читаемый синтаксис`,
    },
  ],
};

export default function Body({ lang }) {
  const [idCurQuestion, setIdCurQuestion] = useState(0);
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [answer, setAnswer] = useState(null);
  const handleStart = () => {
    setIdCurQuestion(1);
    setAnswer(null);
    setListOfQuestions([]);
  };

  const curQuestionItem = knowleageBase.questions.find(
    (i) => i.id == idCurQuestion
  );

  const handleAnswers = (answerID, question) => {
    const probabplyNextQuestion = knowleageBase.questions.find(
      (i) => i.id == curQuestionItem.childs[answerID]
    );
    setListOfQuestions((prev) => [
      ...prev,
      { question, ans: curQuestionItem.answers[answerID] },
    ]);
    if (probabplyNextQuestion) {
      setIdCurQuestion(() => probabplyNextQuestion.id);
    } else {
      setIdCurQuestion(() => -1);
      setAnswer(() =>
        knowleageBase.answers.find(
          (i) => i.id == curQuestionItem.childs[answerID]
        )
      );
    }
  };

  if (idCurQuestion === 0) {
    return <Hero lang={lang} onClickStart={handleStart} />;
  } else if (idCurQuestion === -1) {
    return (
      <Result
        onClickRestart={handleStart}
        answer={lang ? answer.content.ru : answer.content.eng}
        image={answer.image}
        description={lang ? answer.description.ru : answer.description.eng}
        listOfQuestions={listOfQuestions}
      />
    );
  }
  return (
    <Question
      lang={lang}
      onClickAnswers={handleAnswers}
      questionNumber={listOfQuestions.length}
      question={lang ? curQuestionItem.content.ru : curQuestionItem.content.eng}
      answers={lang ? curQuestionItem.answers.ru : curQuestionItem.answers.eng}
    />
  );
}
