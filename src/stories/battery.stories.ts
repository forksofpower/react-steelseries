import type { Meta, StoryObj } from "@storybook/react";

import Steelseries from "../index";
import { SizeArgTypes } from "./argsTypes";

const meta: Meta<typeof Steelseries.Battery> = {
  title: "Battery",
  component: Steelseries.Battery,
};

export default meta;
type Story = StoryObj<typeof Steelseries.Battery>;

export const Default: Story = {
  args: {
    value: 75,
  },
  argTypes: {
    ...SizeArgTypes,
  },
};
