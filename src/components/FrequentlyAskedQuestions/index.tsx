import React, { useState } from "react";
import styles from "./style.module.css";

const items = [
  {
    question: "Wo werden die Dateien gespeichert?",
    answer:
      "Alle Dateien werden lokal auf dem Gerät gespeichert. Hintergrund sind Bedenken hinsichtlich Datenschutz, Urheberrecht sowie Serverkosten.",
  },
  {
    question: "Kann man die Website zum Schreiben echter Prüfungen verwenden?",
    answer:
      "Nein, die Website ist nicht für die Verwendung in echten Prüfungen gedacht. Sie ist lediglich als Lernhilfe konzipiert. Fragen und Antworten liegen unverschlüsselt auf dem Gerät und können somit von anderen Personen eingesehen werden.",
  },
  {
    question: "Wie kann ich Dateien sichern oder auf ein anderes Gerät übertragen?",
    answer:
      "Einzelne Module können in der Module Overview durch einen Klick auf die drei Punkte rechts neben dem Modul heruntergeladen werden. Auf dem anderen Gerät können die Module dann durch einen Klick auf Add Module und Import Module hinzugefügt werden. Alle Module können in den Einstellungen heruntergeladen werden.",
  },
  {
    question: "Wie kann ich Fehler melden oder neue Funktionen vorschlagen?",
    answer:
      "Fehler und Feature-Wünsche können über das GitHub-Repository (https://github.com/Rllyyy/repeatio/issues) gemeldet oder per E-Mail an niklas.fischer@repeatio.de geschickt werden. Achte darauf, die Beschreibung so detailliert wie möglich zu gestalten. Verwende dazu Bilder oder genaue Fehlermeldungen.",
  },
  {
    question: "Ist das Projekt wirklich kostenlos?",
    answer:
      "Ja, das Projekt ist 100% kostenlos und es gibt keine versteckten Kosten. Das Projekt ist zudem Open Source, dass heißt der Quellcode für jeden einsehbar ist.",
  },
  {
    question: "Wie kann ich Fragen gestalten?",
    answer:
      "Fragen können mit Hilfe von MarkDown und CSS gestaltet werden. Eine Anleitung dazu findest du in der Dokumentation.",
  },
  {
    question: "Kann man beim Projekt mitwirken?",
    answer:
      "Ja, das Projekt ist Open Source und kann auf GitHub (https://github.com/Rllyyy/repeatio) eingesehen und bearbeitet werden. Achte darauf, im bestehenden Ecosystem zu bleiben (React, Vite, TypeScript, TailwindCSS und Cypress).",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <section className={styles.questionsAndAnswers}>
      {items.map((item, index) => (
        <QuestionAnswer key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
}

type QuestionAnswerProps = {
  question: string;
  answer: string;
};

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button onClick={() => setOpen(!open)} className={styles.button}>
        <h4 style={{ margin: 0, textAlign: "start" }}>{question}</h4>
        <Chevron orientation={open ? "up" : "down"} />
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

type ChevronProps = {
  orientation: "up" | "down";
};

//Source: https:tabler.io/icons
const Chevron: React.FC<ChevronProps> = ({ orientation }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      rotate={orientation === "up" ? 180 : 0}
      className={styles.chevron}
      style={{
        transform: orientation === "down" ? "rotate(0deg)" : "rotate(180deg)",
        transition: "transform 0.3s linear",
      }}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 9l6 6l6 -6' />
    </svg>
  );
};
