import React, { useState } from "react";
import "./styles.css";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  let [test, setTest] = useState("");

  return (
    <div style={{ margin: "30px 50px" }}>
      <div style={{ margin: "10px 0px" }}>
        <Input
          label={"test"}
          value={test}
          type="text"
          onChange={(evt) => setTest(evt.target.value)}
        />
      </div>

      <div
        style={{
          margin: "10px 0px"
        }}
      >
        <Button>Botão</Button>
      </div>
    </div>
  );
}
