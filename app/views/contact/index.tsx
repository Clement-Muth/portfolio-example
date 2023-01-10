import { InlineWidget } from "react-calendly";
import { Box } from "rebass";

export const Contact = () => {
  return (
    <Box height="calc(100vh - 64px)" overflow="hidden">
      <InlineWidget url="https://calendly.com/clementmuth" styles={{ height: "100%" }} />
    </Box>
  );
};
