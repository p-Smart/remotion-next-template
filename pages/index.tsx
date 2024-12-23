import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo } from "react";
import { Main } from "../remotion/MyComp/Main";
import {
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  const inputProps = useMemo(() => {
    return {
      fullName: "Oluwadayo Michael",

      sequences: [
        // {
        //   heading: "Full Name",
        //   value: "Prince Ajayi",
        //   imageSrc: "/images/dummy01.png",
        //   background: "radial-gradient(at left top, #EF9336, #C58CA7)",
        //   textColor: "#FFFFFF",
        //   fullName: "Oluwadayo Michael",
        // },
        {
          heading: "Nickname",
          value: "pSmart",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #FF7F50, #FF6347)",
          textColor: "#FFFFFF",
          fullName: "OMike",
        },
        {
          heading: "Hobbies",
          value: "Coding, Music",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #4CAF50, #8BC34A)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Career Path",
          value: "Blockchain Developer",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #2196F3, #1E88E5)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Favorite Level",
          value: "400 Level",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #673AB7, #9575CD)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Worst Level",
          value: "100 Level",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #FF5722, #FF3D00)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Favorite Course",
          value: "Data Structures & Algorithms",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #009688, #00796B)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Least Favorite Course",
          value: "Discrete Mathematics",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #D32F2F, #C2185B)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Relationship Status",
          value: "Single",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #9C27B0, #8E24AA)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Best Lecturer",
          value: "Dr. Ayinla",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #FFC107, #FF9800)",
          textColor: "#000000",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Favorite Coursemate(s)",
          value: "Tolu, Faith, Ade",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #3F51B5, #303F9F)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Favorite Memory",
          value: "Group project collaboration",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #00BCD4, #0097A7)",
          textColor: "#000000",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "How was CSC?",
          value: "Challenging but rewarding",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #607D8B, #455A64)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "If not CSC, then what?",
          value: "Engineering or Business",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #CDDC39, #8BC34A)",
          textColor: "#000000",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Favorite Quote",
          value:
            '"The only way to do great work is to love what you do." - Steve Jobs',
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #9E9E9E, #616161)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
        {
          heading: "Parting Words",
          value: "Stay curious and keep learning.",
          imageSrc: "/images/dummy01.png",
          background: "linear-gradient(to right, #2196F3, #1E88E5)",
          textColor: "#FFFFFF",
          fullName: "Oluwadayo Michael",
        },
      ],
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      p="20px"
      bg={`url("/images/background01.webp")`}
      backgroundSize="cover"
      backgroundPosition="top"
    >
      <Flex w="100%" h="calc(97vh - 40px)">
        <Player
          component={Main as any}
          inputProps={inputProps}
          durationInFrames={DURATION_IN_FRAMES}
          fps={VIDEO_FPS}
          compositionHeight={VIDEO_HEIGHT}
          compositionWidth={VIDEO_WIDTH}
          style={{
            width: "100%",
            height: "calc(97vh - 30px)",
            margin: "auto",
          }}
          autoPlay
          loop
          allowFullscreen={true}
          // controls
        />
      </Flex>
    </Box>
  );
};

export default Home;
