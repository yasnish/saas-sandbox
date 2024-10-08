import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { allModes } from "../.storybook/modes";

const preview: Preview = {
  parameters: {
    chromatic: {
      modes: {
        // light: allModes["light"],
        // dark: allModes["dark"],
        mobile: allModes["mobile"],
        tablet: allModes["tablet"],
        desktop: allModes["desktop"],
        // "dark desktop": allModes["dark desktop"],
        // "light mobile": allModes["light mobile"],
      },
    },
    viewport: {
      viewports: {
        mobile: { name: "Mobile", styles: { width: "375px", height: "667px" } },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1440px", height: "990px" },
        },
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
