import type { Meta, StoryObj } from '@storybook/react';
import WorkTypeChip from './WorkTypeChip';

const meta: Meta<typeof WorkTypeChip> = {
  title: 'UI/WorkTypeChip',
  component: WorkTypeChip,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['web', 'app', 'publishing', 'other'],
      description: '태그 타입',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkTypeChip>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex gap-[40px] items-end">
      <div className="">
        <p className="text-[1.6rem] font-bold mb-[4px]">type 예시 칩</p>
        <WorkTypeChip {...args}></WorkTypeChip>
      </div>
      <div className="flex gap-[40px] w-fit h-fit">
        <WorkTypeChip type="app"></WorkTypeChip>
        <WorkTypeChip type="web"></WorkTypeChip>
        <WorkTypeChip type="other"></WorkTypeChip>
      </div>
    </div>
  ),
  args: {
    type: 'app',
  },
};
