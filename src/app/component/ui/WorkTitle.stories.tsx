import type { Meta, StoryObj } from '@storybook/react';
import WorkTitle from './WorkTitle';

const meta: Meta<typeof WorkTitle> = {
  title: 'UI/WorkTitle',
  component: WorkTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WorkTitle>;

export const Primary: Story = {
  args: {
    title: '작업물 카드 타이틀',
  },
};
