import type { Meta, StoryObj } from '@storybook/react';
import OutLineButton from './OutLineButton';

const meta: Meta<typeof OutLineButton> = {
  title: 'UI/OutLineButton',
  component: OutLineButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof OutLineButton>;

export const Primary: Story = {
  args: {
    text: 'Outline 버튼',
  },
};

export const IconOutLineButton: Story = {
  args: {
    text: '아이콘 Outline 버튼',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
        />
      </svg>
    ),
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div
      className="dark bg-black p-6 min-h-[calc(100vh_-_40px)]"
      data-theme="dark"
    >
      <OutLineButton {...args} />
    </div>
  ),
  args: {
    text: 'Outline 다크모드',
  },
};
