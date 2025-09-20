import type { Meta, StoryObj } from '@storybook/react';
import FillButton from './FillButton';

const meta: Meta<typeof FillButton> = {
  title: 'UI/FillButton',
  component: FillButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof FillButton>;

export const Primary: Story = {
  args: {
    text: 'Fill 버튼',
  },
};

export const WithIcon: Story = {
  args: {
    text: '아이콘 Fill 버튼',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    ),
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark bg-black p-6 min-h-[calc(100vh_-_40px)]">
      <FillButton {...args} />
    </div>
  ),
  args: {
    text: '다크 모드 Fill 버튼',
    className: 'hover:bg-black',
  },
};
