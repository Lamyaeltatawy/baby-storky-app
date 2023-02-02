import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";

function App() {
  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <Header />
      <Main/>
      <BrowserRouter>
      <route></route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
