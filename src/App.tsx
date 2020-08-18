import React, { useState } from "react";
import "./styles.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { Root, RootAnimation } from "./util/HelperStyles";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  let [text, setText] = useState("");

  return (
    <Root
      initial={"exit"}
      animate={"enter"}
      exit={"exit"}
      variants={RootAnimation}
      transition={{ duration: 1 }}
    >
      <div style={{ margin: "10px 0px" }}>
        <Input
          label={"text"}
          value={text}
          type="text"
          onChange={(evt) => setText(evt.target.value)}
        />
      </div>

      <div
        style={{
          margin: "10px 0px"
        }}
      >
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Botão
        </Button>
      </div>

      <Modal
        text={text}
        closeModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      />
    </Root>
  );
}
