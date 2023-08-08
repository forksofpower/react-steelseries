import type { Meta, StoryObj } from "@storybook/react";

import Steelseries from "../index";
import { LedColor } from "../types";

const meta: Meta<typeof Steelseries.LightLed> = {
  title: "LightLed",
  component: Steelseries.LightLed,
};

export default meta;
type Story = StoryObj<typeof Steelseries.LightLed>;

export const Default: Story = {
  args: {
    ledOn: true,
    ledColor: LedColor.Blue,
  },
  argTypes: {
    ledColor: {
      options: Object.keys(LedColor),
      mapping: LedColor,
      control: {
        type: "select",
      },
    },
  },
};
