import type { Meta, StoryObj } from "@storybook/react";

import Steelseries from "../index";
import { FrameArgTypes } from "./argsTypes";
import { ColorDef } from "../types";

const meta: Meta<typeof Steelseries.Horizon> = {
  title: "Horizon",
  component: Steelseries.Horizon,
};

export default meta;
type Story = StoryObj<typeof Steelseries.Horizon>;

const { noBackgroundVisible, backgroundColor, ...frameArgTypes } = FrameArgTypes;

export const Default: Story = {
  args: {
    roll: 15,
    pitch: 15,
  },
  argTypes: {
    ...frameArgTypes,
    pointerColor: {
      options: Object.keys(ColorDef),
      mapping: ColorDef,
      control: "select",
    },
  },
};
