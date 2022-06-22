import { FC } from "react";
import { SvgBlob } from "react-svg-blob";
import * as patterns from "@core/appearance/patterns";

type TProps = {
  pattern: keyof typeof patterns;
  gradientColors: [string, string];
  patternColor: string;
  edges?: number;
};

export const Blob: FC<TProps> = ({
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
