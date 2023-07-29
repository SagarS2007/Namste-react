


const Heading1 = React.createElement("h1",  {
    className: "Heading",
     id: "heading1"
},
"Hello World"
);
const heading2 = React.createElement("h2heading2",  {
    className: "Heading",
     id: "heading2"
},
"Namste React This is Sagar"
);

const renfer = ReactDom.createRoot(document.getElementById("root"));
renfer.render(Heading1);