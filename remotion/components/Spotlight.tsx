import React, { useMemo } from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  useVideoConfig,
  Img,
} from "remotion";
import { loadFont, fontFamily } from "@remotion/google-fonts/Poppins";
import { Stack, Text } from "@chakra-ui/react";

loadFont();

interface SpotlightProps {
  fullName: string;
  heading: string;
  value: string;
  imageSrc: string;
  background: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | any;
  textColor: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  heading,
  value,
  imageSrc,
  background,
  position,
  textColor,
  fullName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const imageTranslate = interpolate(
    frame,
    [0, fps * 0.5],
    [position === "top-left" || position === "bottom-left" ? -300 : 300, 0],
    {
      extrapolateRight: "clamp",
    },
  );

  const zoomScale = interpolate(frame, [fps * 0.5, fps * 1.0], [1, 1.08], {
    extrapolateRight: "clamp",
  });
  const zoomOutScale = interpolate(frame, [fps * 1.0, fps * 1.5], [1.08, 1], {
    extrapolateRight: "clamp",
  });

  const imageStyle: React.CSSProperties = useMemo(() => {
    return {
      width: 300,
      height: 300,
      borderRadius: "25px",
      position: "absolute",
      top: position === "top-right" || position === "top-left" ? 20 : "auto",
      right:
        position === "top-right" || position === "bottom-right" ? 20 : "auto",
      left: position === "top-left" || position === "bottom-left" ? 20 : "auto",
      bottom:
        position === "bottom-right" || position === "bottom-left" ? 20 : "auto",
      margin: "auto",
      objectFit: "cover",
      objectPosition: "center center",
      transform: `translateX(${imageTranslate}px) scale(${position === "top-left" ? zoomScale : position === "top-right" ? zoomOutScale : position === "bottom-left" ? zoomScale : zoomOutScale})`,
    };
  }, [imageTranslate, position, zoomOutScale, zoomScale]);

  return (
    <Stack
      as={AbsoluteFill}
      background={background}
      justifyContent="center"
      //   alignItems="center"
      color={textColor}
      fontFamily={fontFamily}
      px="50px"
      pl={position === "top-left" || position === "bottom-left" ? 300 + 50 : 50}
      pr={
        position === "top-right" || position === "bottom-right" ? 300 + 50 : 50
      }
      pos="relative"
      textAlign={
        position === "top-left" || position === "bottom-left" ? "right" : "left"
      }
    >
      {/* <TextSlideIn>
        
      </TextSlideIn> */}
      <Text fontSize={60} fontWeight={600} opacity={opacity}>
        {heading}
      </Text>
      <Text fontSize={35} opacity={opacity} fontStyle="italic">
        {value}
      </Text>

      <Text
        pos="absolute"
        bottom="20px"
        left="50%"
        fontStyle="italic"
        fontSize="1.2rem"
        textAlign="center"
        whiteSpace="nowrap"
        transform="translateX(-50%)"
      >
        Odysseus - {fullName}
      </Text>

      <Img src={imageSrc} alt="Spotlight" style={imageStyle} />
    </Stack>
  );
};
