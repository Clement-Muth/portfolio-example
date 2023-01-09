import styled from "@emotion/styled";
import { Position } from "../Position";

import { PositionProps } from "styled-system";

export const Sticky = styled(Position)<PositionProps>({ position: "sticky" });
