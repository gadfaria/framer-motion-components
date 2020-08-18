import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { FlexCenter, Font } from "../util/HelperStyles";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ButtonDiv = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background: black;
  border: 2px solid black;
  color: white;
  padding: 8px;
  font-size: 18px;
  cursor: pointer;
  ${Font};
  ${FlexCenter}
`;

export default function Button(props: Props) {
  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ButtonDiv {...props}>{props.children}</ButtonDiv>
    </motion.div>
  );
}
