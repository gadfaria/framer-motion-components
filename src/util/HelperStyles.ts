import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { motion, Variants } from "framer-motion";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Font = css`
  font-family: "Muli", sans-serif;
`;

export const Root = styled(motion.div)`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${FlexCenter};
  flex-direction: column;
`;

export const RootAnimation: Variants = {
  exit: { y: 10, opacity: 0 },
  enter: { y: 0, opacity: 1 }
};
