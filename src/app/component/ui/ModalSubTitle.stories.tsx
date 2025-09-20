import type { Meta, StoryObj } from '@storybook/react';
import ModalSubTitle from './ModalSubTitle';

const meta: Meta<typeof ModalSubTitle> = {
  title: 'UI/ModalSubTitle',
  component: ModalSubTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModalSubTitle>;

export const Primary: Story = {
  args: {
    firstTxt: '첫글자',
    title: '그외 제목',
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark bg-black p-6 min-h-[calc(100vh_-_40px)]">
      <ModalSubTitle {...args} />
    </div>
  ),
  args: {
    firstTxt: '첫',
    title: '글자외 제목',
    moreStyles: '!text-[#cacacad8]',
  },
};
