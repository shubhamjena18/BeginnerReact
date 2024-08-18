const heading = React.createElement("h1",
    {id : "heading" ,xyz : "abc"},
    "Hello World from React");

    const parent = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"This is nested if"),React.createElement("h2",{},"This is brother of nested if")]
        ));
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
console.log(root);
root.render(parent);