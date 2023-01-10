import { Flex } from "rebass";
import { CardProject } from "views/home/CardProject";

export const Works = () => {
  return (
    <Flex flexDirection="column" px={15} pb={15} sx={{ gap: 15 }}>
      <Flex sx={{ gap: 15, "@media (max-width: 920px)": { flexDirection: "column" } }}>
        <CardProject backgroundSrc="/static/images/azinove.png" href="https://azinove.com" height={600} />
        <CardProject backgroundSrc="/static/images/project.png" href="https://project.azinove.com" height={600} />
      </Flex>
      <Flex sx={{ gap: 15, "@media (max-width: 920px)": { flexDirection: "column" } }}>
        <CardProject backgroundSrc="/static/images/works/tsp-motorsport.png" href="https://tsp-motorsport.de" />
        <CardProject backgroundSrc="/static/images/works/gala.webp" href="https://gala-inscription.web.app/" />
      </Flex>
    </Flex>
  );
};
