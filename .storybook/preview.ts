import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { allModes } from "../.storybook/modes";

const preview: Preview = {
  parameters: {
    chromatic: {
      modes: {
        light: allModes["light"],
        dark: allModes["dark"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
