import { Absolute } from "library/components/common/Positions/Absolute";
import { Card, CardProps, Flex } from "rebass";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProjectProps extends CardProps {
  backgroundSrc: string;
  href: string;
}

export const CardProject: FC<CardProjectProps> = ({ backgroundSrc, href, ...props }) => {
  return (
    <Card
      p={7}
      flex={1}
      height="750px"
      minHeight="600px"
      {...props}
      sx={{
        borderRadius: 35,
        backgroundImage: `url('${backgroundSrc}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "@media (max-width: 1150px)": {
          height: "500px"
        },
        ...props.sx
      }}
    >
      <Absolute
        right="46px"
        top="46px"
        sx={{
          "@media (max-width: 1150px)": {
            top: "20px",
            right: "20px",
            "& > a > .img-container": {
              width: 50,
              height: 50,
              p: "12px"
            }
          }
        }}
      >
        <Link href={href} target="_blank">
          <Flex
            className="img-container"
            width={62}
            height={62}
            overflow="hidden"
            p="18px"
            bg="white"
            sx={{ borderRadius: 50 }}
          >
            <Image src="/static/svg/arrow.svg" alt="" width={26} height={26} />
          </Flex>
        </Link>
      </Absolute>
    </Card>
  );
};
