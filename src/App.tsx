import ButtonClick from "./components/ButtonClick";
import Header from "./components/Header";
import Section from "./components/Section";
import { coreConcept } from "./data";
import { useState } from "react";
import "./index.css";

const App = (): JSX.Element => {
  const [text, setText] = useState<string>("Please click a button!");

  const handleClick =
    (type: string): (() => void) =>
    () => {
      setText(type);
    };

  return (
    <div className="container">
      <main className="max-w-[1000px] w-full mx-auto flex flex-col items-center gap-3">
        <Header />

        <Section
          title="Core Concepts"
          containerStyle="bg-purple-950 text-center mt-10 p-10"
        >
          <div className="flex justify-center items-center gap-12 mt-8">
            {coreConcept.map(({ img, title, description }, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center w-2/6"
              >
                <img src={img} alt="icons" className="size-32" />
                <h2>{title}</h2>
                <p>{description}</p>
              </li>
            ))}
          </div>
        </Section>

        <div className="w-full flex flex-col items-start mt-10">
          <h2 className="font-quicksandBold text-2xl text-purple-200">
            Example
          </h2>
          <menu className="flex justify-start gap-5 items-start mt-3">
            <ButtonClick
              title={coreConcept[0].title}
              onclick={handleClick("Components")}
            />
            <ButtonClick
              title={coreConcept[1].title}
              onclick={handleClick("JSX")}
            />
            <ButtonClick
              title={coreConcept[2].title}
              onclick={handleClick("Props")}
            />
            <ButtonClick
              title={coreConcept[3].title}
              onclick={handleClick("State")}
            />
          </menu>
        </div>

        <Section title={text} containerStyle="mt-3 p-5 flex flex-col flex-wrap">
          <p className="mt-5">
            {text === "Components" && (
              <>
                <p>{coreConcept[0].example}</p>
                <pre>
                  <code>{coreConcept[0].code}</code>
                </pre>
              </>
            )}

            {text === "JSX" && (
              <>
                <p>{coreConcept[1].example}</p>
                <pre>
                  <code>{coreConcept[1].code}</code>
                </pre>
              </>
            )}

            {text === "Props" && (
              <>
                <p>{coreConcept[2].example}</p>
                <pre>
                  <code>{coreConcept[2].code}</code>
                </pre>
              </>
            )}

            {text === "State" && (
              <>
                <p>{coreConcept[3].example}</p>
                <pre>
                  <code>{coreConcept[3].code}</code>
                </pre>
              </>
            )}
          </p>
        </Section>
      </main>
    </div>
  );
};

export default App;
