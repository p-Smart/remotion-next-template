import React from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Rings } from "./Rings";
import {
  ISequence,
  SpotlightSequences,
} from "../components/SpotlightSequences";
import { TextFade } from "./TextAnimations/TextFade";
import { loadFont, fontFamily } from "@remotion/google-fonts/Montserrat";
import { Text } from "@chakra-ui/react";

loadFont();

interface IMain {
  fullName: string;
  sequences: ISequence[];
}

export const Main: React.FC<IMain> = ({ fullName, sequences }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const transitionStart = 2 * fps;
  const transitionDuration = 1 * fps;

  const logoOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: transitionDuration,
    delay: transitionStart,
  });

  return (
    <AbsoluteFill>
      {/* First Sequence: Display the Logo and Title */}
      <Sequence durationInFrames={120}>
        <Rings outProgress={logoOut} />
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(120deg, #000000, #222222, #555555, #111111)",
            color: "#e0fa04",
            fontFamily,
            textAlign: "center",
          }}
        >
          <TextFade>
            <Text fontSize={90} mb={100}>
              <b>Odyssey</b>&nbsp;
              <Text as="sup" fontSize={24}>
                Class of 2025
              </Text>
            </Text>
            <Text fontSize={50} mb={10}>
              Spotlighting...
            </Text>
            <Text fontSize={50} fontWeight="600">
              {fullName}
            </Text>
          </TextFade>
        </AbsoluteFill>
      </Sequence>

      {/* Second Sequence: Spotlight Video Sections */}
      <Sequence from={120}>
        <SpotlightSequences data={sequences} />
      </Sequence>
    </AbsoluteFill>
  );
};
