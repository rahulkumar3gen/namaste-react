const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibling1" }, "hello from sibling 1"),
    React.createElement("h1", { id: "sibling2" }, "hello from sibling 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
