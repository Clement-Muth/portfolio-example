import styled from "@emotion/styled";
import { Position } from "../Position";

import { PositionProps } from "styled-system";

export const Fixed = styled(Position)<PositionProps>({ position: "fixed" });
