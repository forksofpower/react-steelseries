import type { Meta, StoryObj } from "@storybook/react";

import Steelseries from "../index";

const meta: Meta<typeof Steelseries.LightBulb> = {
  title: "LightBulb",
  component: Steelseries.LightBulb,
};

export default meta;
type Story = StoryObj<typeof Steelseries.LightBulb>;

export const Default: Story = {
  args: {
    lightOn: true,
  },
  argTypes: {
    glowColor: {
      control: {
        type: "color",
      },
    },
  },
};
