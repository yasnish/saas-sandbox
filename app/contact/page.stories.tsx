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

export const Vol2: Story = { args: { vol: 2 } };

export const Vol3: Story = { args: { vol: 3 } };
