import type { Meta, StoryObj } from '@storybook/react';
import WorksNav from './WorksNav';

const meta: Meta<typeof WorksNav> = {
  title: 'UI/WorksNav',
  component: WorksNav,
  tags: ['autodocs'],
  argTypes: {
    updateWork: { action: 'active' },
  },
};

export default meta;
type Story = StoryObj<typeof WorksNav>;

export const WorksNavigate: Story = {
  render: (args) => <WorksNav {...args} />,
};

export const DarkModeWorksNavigate: Story = {
  render: (args) => (
    <div data-theme="dark">
      <WorksNav {...args} />
    </div>
  ),
};
