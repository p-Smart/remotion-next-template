import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Spotlight } from "./Spotlight";

export interface ISequence {
  fullName: string;
  heading: string;
  value: string;
  imageSrc: string;
  background: string;
  textColor: string;
}

export const SpotlightSequences: React.FC<{ data: ISequence[] }> = ({
  data,
}) => {
  const sectionDuration = 90;

  return (
    <AbsoluteFill>
      {data.map((item, index) => (
        <Sequence
          key={index}
          from={index * sectionDuration}
          durationInFrames={sectionDuration}
        >
          <Spotlight
            heading={item.heading}
            value={item.value}
            imageSrc={item.imageSrc}
            background={item.background}
            position={
              ["top-left", "top-right", "bottom-left", "bottom-right"][
                index % 4
              ]
            }
            textColor={item.textColor}
            fullName={item.fullName}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
