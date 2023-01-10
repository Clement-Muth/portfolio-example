import { Flex } from "rebass";
import { links } from "./constant";
import { Relative } from "../Positions/Relative";
import { Text } from "../../ui";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Relative as="header" display="flex" height="64px" width="100%" px={3}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        sx={{ "& > a": { fontSize: 22, fontWeight: "900", "@media (max-width: 500px)": { fontSize: 14 } } }}
      >
        <Link href="/" passHref>
          Clément Muth
        </Link>
        <Flex as="nav">
          <Flex as="ul" px={0} sx={{ gap: 32, "@media (max-width: 500px)": { gap: 24 } }}>
            {links.map(({ label, ...link }) => (
              <Flex as="li" key={label} alignItems="center" fontSize={1} fontWeight={600}>
                <Link {...link} passHref>
                  <Text as="span">{label}</Text>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Relative>
  );
};
