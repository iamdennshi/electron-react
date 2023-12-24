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
      content: {
        ru: "Программа должна работать в веб браузере?",
        eng: "Will the program work in the browser?",
      },
      childs: [5, 53],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 39,
      content: {
        ru: "Программа представляет собой 2D или 3D игру?",
        eng: "Will the program be a 2D or 3D game?",
      },
      childs: [49, 48],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 37,
      content: {
        ru: "Программа должна исполняться на микроконтроллере?",
        eng: "Will the program work in the microcontroller?",
      },
      childs: [38, 33],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 38,
      content: {
        ru: "Есть ли опыт в низкоуровневом программировании?",
        eng: "Do you have any low-level programming experience?",
      },
      childs: [30, 29],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 43,
      content: {
        ru: "Программа должна исполняться на ОС смартфонов (IOS или Android)?",
        eng: "Will the program work in IOS or Android?",
      },
      childs: [44, 37],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },

    {
      id: 44,
      content: {
        ru: "Под какую мобильную ОС разрабатывается программа?",
        eng: "Which mobile OS will the program being developed for?",
      },
      childs: [45, 46, 39],
      answers: {
        ru: ["Android", "IOS", "Неважно"],
        eng: ["Android", "IOS", "No matter"],
      },
    },

    {
      id: 45,
      content: {
        ru: "Требуется ли поддержка старых устройств?",
        eng: "Will it require to support an old devices?",
      },
      childs: [8, 9],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 46,
      content: {
        ru: "Требуется ли поддержка старых устройств?",
        eng: "Will it require to support an old devices?",
      },
      childs: [10, 11],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },

    {
      id: 47,
      content: {
        ru: "Программа представляет собой 2D или 3D игру?",
        eng: "Will the program be a 2D or 3D game?",
      },
      childs: [50, 48],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 50,
      content: {
        ru: "Есть опыт в создании игры?",
        eng: "Do you have any experience of making game?",
      },
      childs: [51, 49],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 30,
      content: {
        ru: "Требуется ли автоматическая очистка памяти?",
        eng: "Will it require to clean memory automatically?",
      },
      childs: [14, 26],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 26,
      content: {
        ru: "Для вас важен полный контроль над микроконтроллером?",
        eng: "Is full control of the microcontroller important to you?",
      },
      childs: [25, 17],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 25,
      content: {
        ru: "Требуется ли максимальная производительность от железа?",
        eng: "Is maximum performance required from hardware?",
      },
      childs: [15, 16],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 34,
      content: {
        ru: "Для вас важна популярность языка программирования?",
        eng: "Is popularity of programming language important to you?",
      },
      childs: [40, 31],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 40,
      content: {
        ru: "Программа создается с целью обучения основам программирования?",
        eng: "Do you want to create a program by learning the basics of programming?",
      },
      childs: [53, 35],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 35,
      content: {
        ru: "Требуется быстро создать рабочее приложение с красивым графическим интерфейсом?",
        eng: "Is it necessary to create a working program with a nice graphical interface quickly?",
      },
      childs: [5, 6],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 31,
      content: {
        ru: "Программа создается с целью обучения основам программирования?",
        eng: "Do you want to create a program by learning the basics of programming?",
      },
      childs: [32, 27],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 27,
      content: {
        ru: "Программа создается с целью создания игр?",
        eng: "Do you want to create a game?",
      },
      childs: [28, 24],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 24,
      content: {
        ru: "Программа должна работать на мобильных устройствах?",
        eng: "Will the program run on the mobile OS",
      },
      childs: [23, 20],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
    },
    {
      id: 23,
      content: {
        ru: "Под какую мобильную ОС создается программа?",
        eng: "Which mobile OS will the program being developed for?",
      },
      childs: [9, 11],
      answers: {
        ru: ["Android", "IOS"],
        eng: ["Android", "IOS"],
      },
    },
    {
      id: 20,
      content: {
        ru: "Программа должна исполняться на микроконтроллере?",
        eng: "Will the program work in the microcontroller?",
      },
      childs: [29, 19],
      answers: {
        ru: ["Да", "Нет"],
        eng: ["Yes", "No"],
      },
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
