import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Landing from "./Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*<h1>Team 2</h1>
      <Button variant="contained">Contained</Button> */}
      <Landing />
    </>
  );
}

export default App;
