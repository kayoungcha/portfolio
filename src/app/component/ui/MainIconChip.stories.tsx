import type { Meta, StoryObj } from '@storybook/react';
import MainIconChip from './MainIconChip';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof MainIconChip>;

const meta: Meta<typeof MainIconChip> = {
  title: 'UI/MainIconChip',
  component: MainIconChip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainIconChip>;

// ✅ 스토리북 전용 단순 버전
const TemplateChip = (args: Props) => (
  <div
    className={`relative flex w-fit h-fit items-center justify-center
      rounded-[14px] `}
    style={{ ...args.moreStyles }}
  >
    <img
      src={args.iconSrc}
      alt={args.alt}
      width={args.size}
      height={args.size}
    />
  </div>
);

export const Primary: Story = {
  render: (args) => <TemplateChip {...args} />,
  args: {
    iconSrc: '/assets/icon_angular_logo.svg',
    alt: 'angular',
    position: { x: 0, y: 0 },
    size: 46,
    moreStyles: {
      background: '#ffffff',
      boxShadow: '3px 4px 15px -3px rgba(77, 77, 77, 0.25)',
    },
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark bg-black p-6 min-h-[calc(100vh_-_40px)]">
      <TemplateChip {...args} />{' '}
    </div>
  ),
  args: {
    iconSrc: '/assets/icon_angular_logo_w.svg',
    alt: 'angular',
    position: { x: 0, y: 0 },
    size: 46,
    moreStyles: {
      background: '#000000',
      boxShadow: '3px 4px 15px -3px rgba(255, 255, 255, 0.25)',
    },
  },
};
