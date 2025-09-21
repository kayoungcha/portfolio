import type { Meta, StoryObj } from '@storybook/react';
import WorkTagChip from './WorkTagChip';

const meta: Meta<typeof WorkTagChip> = {
  title: 'UI/WorkTagChip',
  component: WorkTagChip,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['skill', 'design', 'keyFeatures'],
      description: '태그 타입',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkTagChip>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex gap-[40px]">
      <div className="flex flex-col items-center">
        <WorkTagChip {...args} />
      </div>
      <div className="flex flex-col items-center">
        <WorkTagChip type="skill" text="프론트엔드 기술" />
      </div>
      <div className="flex flex-col items-center">
        <WorkTagChip type="design" text="Ui/협업 기술" />
      </div>
      <div className="flex flex-col items-center">
        <WorkTagChip type="keyFeatures" text="주요 기능" />
      </div>
    </div>
  ),
  args: {
    text: 'type 변경 예시',
  },
};

export const DarkModeWorkTagChip: Story = {
  render: (args) => (
    <div
      className="dark bg-black p-6 min-h-[calc(100vh_-_40px)] flex gap-[40px]"
    >
      <div className="flex flex-col items-center">
        <WorkTagChip {...args} />
      </div>
      <div className="flex flex-col items-center" data-theme="dark">
        <WorkTagChip type="skill" text="프론트엔드 기술" />
      </div>
      <div className="flex flex-col items-center" data-theme="dark">
        <WorkTagChip type="design" text="Ui/협업 기술" />
      </div>
      <div className="flex flex-col items-center" data-theme="dark">
        <WorkTagChip type="keyFeatures" text="주요 기능" />
      </div>
    </div>
  ),
  args: {
    text: 'type 변경 예시',
  },
};
