import { Text } from "library/components/ui";
import { Absolute } from "library/components/common/Positions/Absolute";
import Link from "next/link";
import { Button, Card, Flex, Image } from "rebass";

export const Home = () => {
  return (
    <Flex flexDirection="column" pb={25} sx={{ gap: 25 }}>
      <Flex px={25} height="700px" sx={{ gap: 25 }}>
        <Card display="flex" flexDirection="column" bg="#F1F1F1" p={6} width="60%" sx={{ borderRadius: 35 }}>
          <Flex flexDirection="column" flexGrow="1">
            <Text as="h1" fontSize="58px" lineHeight="1" fontWeight="400">
              Hey, I&apos;m Clément, a web
              <br />
              developer with 7 years
              <br /> of experience
            </Text>
            <Text as="h2" fontSize="24px" mt={5} fontWeight="400">
              I care a lot about using web development for positive impact
              <br /> and enjoy creating web applications and
              <br /> delightful interfaces.
            </Text>
          </Flex>
          <Flex sx={{ gap: 20 }}>
            <Button py="20px" px={5} fontSize={3} fontWeight="600" bg="black" sx={{ borderRadius: 50 }}>
              Contact me
            </Button>
            <Link href="https://www.linkedin.com/in/clement-muth/" target="_blank">
              <Flex width={62} height={62} overflow="hidden" p="18px" bg="white" sx={{ borderRadius: 50 }}>
                <Image src="/static/svg/linkedin.svg" />
              </Flex>
            </Link>
            <Link href="https://www.malt.fr/profile/clementmuth" target="_blank">
              <Flex width={62} height={62} overflow="hidden" p="18px" bg="white" sx={{ borderRadius: 50 }}>
                <Image src="/static/svg/malt.svg" />
              </Flex>
            </Link>
            <Link href="https://github.com/Clement-Muth" target="_blank">
              <Flex width={62} height={62} overflow="hidden" p="18px" bg="white" sx={{ borderRadius: 50 }}>
                <Image src="/static/svg/github.svg" />
              </Flex>
            </Link>
          </Flex>
        </Card>
        <Card
          p={7}
          width="40%"
          sx={{
            borderRadius: 35,
            backgroundImage: "url('/static/images/me.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></Card>
      </Flex>
      <Flex px={25} height="750px" sx={{ gap: 25 }}>
        <Card
          p={7}
          flex={1}
          sx={{
            borderRadius: 35,
            backgroundImage: "url('/static/images/azinove.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
          }}
        >
          <Absolute right="46px" top="46px">
            <Link href="https://azinove.com" target="_blank">
              <Flex width={62} height={62} overflow="hidden" p="18px" bg="white" sx={{ borderRadius: 50 }}>
                <Image src="/static/svg/arrow.svg" />
              </Flex>
            </Link>
          </Absolute>
        </Card>
        <Card
          p={7}
          flex={1}
          sx={{
            borderRadius: 35,
            backgroundImage: "url('/static/images/project.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
          }}
        >
          <Absolute right="46px" top="46px">
            <Link href="https://project.azinove.com" target="_blank">
              <Flex width={62} height={62} overflow="hidden" p="18px" bg="white" sx={{ borderRadius: 50 }}>
                <Image src="/static/svg/arrow.svg" />
              </Flex>
            </Link>
          </Absolute>
        </Card>
      </Flex>
    </Flex>
  );
};
