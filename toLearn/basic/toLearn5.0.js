// App.js
function App() {
  return (
    <div>
      <h1>Welcome back!</h1>
    </div>
  );
}

export default App;

// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
