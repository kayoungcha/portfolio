import type { Meta, StoryObj } from '@storybook/react';
import TitleText from './TitleText';

const meta: Meta<typeof TitleText> = {
  title: 'UI/TitleText',
  component: TitleText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TitleText>;

export const Primary: Story = {
  args: {
    title: 'Main 제목',
  },
};
