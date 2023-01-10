import { Button, Card, Flex, Image } from "rebass";
import { CardProject } from "./CardProject";
import { Text } from "library/components/ui";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = () => {
  const router = useRouter();

  return (
    <Flex flexDirection="column" px={15} pb={15} sx={{ gap: 15 }}>
      <Flex sx={{ gap: 15, "@media (max-width: 920px)": { flexDirection: "column" } }}>
        <Card
          display="flex"
          flexDirection="column"
          minHeight={600}
          bg="#F1F1F1"
          p={[4, 6]}
          flex={1.7}
          sx={{ borderRadius: 35 }}
        >
          <Flex flexDirection="column" flexGrow="1">
            <Text
              as="h1"
              fontSize="58px"
              lineHeight="1"
              fontWeight="400"
              sx={{
                "@media (max-width: 770px)": {
                  fontSize: 5
                }
              }}
            >
              Hey, I&apos;m Clément, a web
              <br />
              developer with +7 years
              <br /> of experience
            </Text>
            <Text
              as="h2"
              fontSize="24px"
              mt={5}
              fontWeight="400"
              sx={{
                "@media (max-width: 770px)": {
                  fontSize: 3
                }
              }}
            >
              I care a lot about using web development for positive impact
              <br /> and enjoy creating web applications and
              <br /> delightful interfaces.
            </Text>
          </Flex>
          <Flex sx={{ gap: 20 }}>
            <Button
              py="20px"
              px={5}
              fontSize={3}
              fontWeight="600"
              bg="black"
              sx={{
                borderRadius: 50,
                "@media (max-width: 770px)": {
                  fontSize: 2
                }
              }}
              onClick={() => router.push("/contact")}
            >
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
          minHeight={600}
          flex={1}
          sx={{
            borderRadius: 35,
            backgroundImage: "url('/static/images/me.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></Card>
      </Flex>
      <Flex sx={{ gap: 15, "@media (max-width: 900px)": { flexDirection: "column" } }}>
        <CardProject backgroundSrc="/static/images/azinove.png" href="https://azinove.com" />
        <CardProject backgroundSrc="/static/images/project.png" href="https://project.azinove.com" />
      </Flex>
    </Flex>
  );
};
