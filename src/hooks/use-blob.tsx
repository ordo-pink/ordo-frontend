import { FC } from "react";
import { SvgBlob } from "react-svg-blob";

import * as patterns from "@core/appearance/patterns";

type TProps = {
  pattern: keyof typeof patterns;
  gradientColors: [string, string];
  patternColor: string;
  edges?: number;
};

const Blob: FC<TProps> = ({
  pattern,
  gradientColors,
  patternColor,
  edges = 23,
}) => (
  <>
    <SvgBlob
      className="fixed left-[-100px] top-[-100px] md:right-[300px] 2xl:right-[1000px] 2xl:top-[-500px] opacity-50"
      shapeProps={{ edges }}
      variant="gradient"
      colors={gradientColors}
    />

    <SvgBlob
      className="fixed left-[-100px] top-[-100px] md:right-[300px] 2xl:right-[1000px] 2xl:top-[-500px] opacity-50"
      shapeProps={{ edges }}
      color={patternColor}
      variant="pattern"
      pattern={patterns[pattern]}
    />
  </>
);

export const useBlob = (pattern: keyof typeof patterns) => {
  if (pattern === "cogs")
    return () => (
      <Blob
        edges={23}
        pattern="cogs"
        patternColor="#F5F5F5"
        gradientColors={["#FEF08A", "#FBCFE8"]}
      />
    );

  if (pattern === "cross") {
    return () => (
      <Blob
        edges={28}
        pattern="cross"
        patternColor="#F5F5F5"
        gradientColors={["#FEF08A", "#BAE6FD"]}
      />
    );
  }

  if (pattern === "hexagons") {
    return () => (
      <Blob
        edges={24}
        pattern="hexagons"
        patternColor="#CBD5E1"
        gradientColors={["#F5F5F5", "#BAE6FD"]}
      />
    );
  }

  return () => null;
};
