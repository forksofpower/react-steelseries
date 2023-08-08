import type { Meta, StoryObj } from "@storybook/react";

import Steelseries from "../index";
import { FrameArgTypes } from "./argsTypes";

const meta: Meta<typeof Steelseries.Altimeter> = {
  title: "Altimeter",
  component: Steelseries.Altimeter,
};

export default meta;
type Story = StoryObj<typeof Steelseries.Altimeter>;

export const Default: Story = {
  args: {
    value: 1500,
  },
  argTypes: {
    ...FrameArgTypes,
    titleString: {
      control: {
        type: "text",
      },
    },
    unitAltPos: {
      control: "boolean",
    },
    unitString: {
      control: {
        type: "text",
      },
    },
  },
};
