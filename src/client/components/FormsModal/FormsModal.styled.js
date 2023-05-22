import styled from "styled-components";
import { Box } from "@mui/material";

export const Backdrop = styled(Box)`
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 110;
  transform: translate(-50%, -50%);
  width: 400px;
`;
