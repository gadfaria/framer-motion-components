import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

interface Props {
  showModal: boolean;
  closeModal: Function;
  text: string;
}

const BackdropDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalDiv = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  text-align: center;
`;

const ButtonDiv = styled.button`
  color: #444;
  border-color: #444;
  font-weight: bold;
  margin-top: 20px;
`;

const TextDiv = styled.p`
  color: #444;
  font-weight: bold;
`;

const BackdropAnimation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const ModalAnimation = {
  hidden: { y: "30vh", opacity: 0 },
  visible: {
    y: "30vh",
    opacity: 1,
    transition: { delay: 0.5 }
  }
};

export default function Modal(props: Props) {
  return (
    <AnimatePresence>
      {props.showModal && (
        <BackdropDiv
          onClick={() => {
            console.log("aa");
          }}
          variants={BackdropAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ModalDiv variants={ModalAnimation}>
            <TextDiv>
              Teste do modal <br /> valor do input: {props.text}
            </TextDiv>
            <ButtonDiv
              onClick={() => {
                props.closeModal();
              }}
            >
              Botaozao maneiro
            </ButtonDiv>
          </ModalDiv>
        </BackdropDiv>
      )}
    </AnimatePresence>
  );
}
