import images from "./constants/images";

interface coreConceptTypes {
  img: string;
  title: string;
  description: string;
  code?: string;
  example?: string;
}

export const coreConcept: Array<coreConceptTypes> = [
  {
    img: images.components,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    code: `
        function App() {
            return (
                <div>
                    <h1>Hello</h1>
                </div>
            )
        }`,
    example:
      "Components are the building blocks of React applications. A Component is a self-contained module (HTML + optional CSS +JS) that renders some output",
  },

  {
    img: images.jsxUi,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    code: `
        <div>
            <h1>Welcome{userName}</h1>
            <p>Time to learn react!</p>
        </div>
        `,
    example:
      "Jsx is a syntax extention to Javascript. It is similar to template language, but it has full power of Javascript(e.g it may output dynamic content)",
  },

  {
    img: images.config,
    title: "Props",
    description:
      "Make components configurable (and therefore resuable) by passing input data to them.",
    code: `
        function welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }`,
    example:
      'Components accept arbitrary input called "props" (short for "properties") that are passed to it by their parent component.',
  },

  {
    img: images.stateMgmt,
    title: "State",
    description:
      "React managed data which when changed, causes the components to re-render & the UI to update.",
    code: `
        function App() {
            const [count, setCount] = useState(0);
            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            );
  }`,
    example:
      "State is a JavaScript object that is used to store data in a React component. State is used to store data that should be accessible and re-rendered when changes occur.",
  },
];
