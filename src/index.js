var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>React FTW!</h1>, document.getElementById("root"));

// compare to:
var h1 = document.createElement("h1");
h1.innerHTML = "vs JS old-school";
document.getElementById("root").appendChild(h1);
