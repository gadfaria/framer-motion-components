import React, { useState } from "react";
import "./styles.css";
import Input from "./components/Input";

export default function App() {
  let [test, setTest] = useState("");

  return (
    <div style={{ margin: "50px" }}>
      <Input
        label={"test"}
        value={test}
        type="text"
        onChange={(evt) => setTest(evt.target.value)}
      />
    </div>
  );
}
