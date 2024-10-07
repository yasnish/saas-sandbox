import type { Meta, StoryObj } from '@storybook/react';

import { default as About } from './page';

const meta = {
  title: 'Page/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
    chromatic: { disableSnapshot: true },
  },
  args: {},
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
