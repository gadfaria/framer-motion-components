import styled from "@emotion/styled";
import React, { useState, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { motion, MotionStyle, TargetAndTransition } from "framer-motion";
import { Font } from "../util/HelperStyles";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
}

const InputDiv = styled.input`
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  -webkit-appearance: none;
  padding: 10px;
  ${Font};
`;

const TextDiv = styled.span`
  width: 100%;
  white-space: pre-wrap;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  ${Font};
`;

const placeholderStyle: MotionStyle = {
  position: "absolute",
  bottom: 15,
  left: 10,
  scale: 1,
  pointerEvents: "none",
  originX: 0.1
};

const initialPlaceholderState: TargetAndTransition = {
  y: 6,
  scale: 1,
  opacity: 0.6
};

const upperPlaceholderState: TargetAndTransition = {
  y: -22,
  scale: 0.8,
  opacity: 1
};

export default function Input(props: Props) {
  let [inputFocus, setInputFocus] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <motion.div
        style={placeholderStyle}
        animate={
          inputFocus || props.value.length > 0
            ? upperPlaceholderState
            : initialPlaceholderState
        }
      >
        <TextDiv style={{ color: "black" }}>{props.label}</TextDiv>
      </motion.div>
      <InputDiv
        {...props}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </div>
  );
}
