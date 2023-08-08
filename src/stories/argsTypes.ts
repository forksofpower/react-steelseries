import { ArgTypes } from "@storybook/react";
import { FrameDesign, ForegroundType, BackgroundColor, Frame } from "../types";

export const SizeArgTypes: Partial<ArgTypes<{ size: string }>> = {
  size: {
    control: "text",
  },
};

export const FrameArgTypes: Partial<ArgTypes<Frame>> = {
  frameDesign: {
    options: Object.keys(FrameDesign),
    mapping: FrameDesign,
    control: "select",
  },
  foregroundType: {
    options: Object.keys(ForegroundType),
    mapping: ForegroundType,
    control: "select",
  },
  backgroundColor: {
    options: Object.keys(BackgroundColor),
    mapping: BackgroundColor,
    control: "select",
  },
  noFrameVisible: {
    control: "boolean",
  },
  noBackgroundVisible: {
    control: "boolean",
  },
  noForegroundVisible: {
    control: "boolean",
  },
};
