import type { Meta, StoryObj } from '@storybook/react';

import { default as Contact } from './page';

const meta = {
  title: 'Page/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
