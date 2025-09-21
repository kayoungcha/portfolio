import type { Meta, StoryObj } from '@storybook/react';
import WorkCard from './WorkCard';

const meta: Meta<typeof WorkCard> = {
  title: 'UI/WorkCard',
  component: WorkCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const AppCard: Story = {
  render: (args) => (
    <div className="flex w-full h-full gap-[40px]">
      <div className="light h-full min-w-[380px] p-[40px]">
        <p className="text-[1.6rem] font-bold mb-[20px]">라이트 모드 App</p>
        <WorkCard {...args} />
      </div>
      <div className="bg-black min-w-[380px] h-full p-[40px]" data-theme="dark">
        <p className="text-[1.6rem] font-bold text-white mb-[20px]">
          다크 모드 App
        </p>
        <WorkCard {...args} />
      </div>
    </div>
  ),
  args: {
    item: {
      id: 'story-app',
      type: 'app',
      title: 'storybook 앱',
      img: '/assets/img_none_image.png',
      url: '',
      platforms: ['Android', 'iOS'],
      description: 'storybook app',
      duration: '2개월',
      role: ``,
      skill: ['Ionic', 'Angular', 'Firebase', 'Cordova'],
      keyFeatures: [
        { key: '쇼핑몰', value: '' },
        { key: '커뮤니티', value: '' },
        { key: '채팅', value: '' },
      ],
      design: ['Sketch'],
      challenges: [],
      achievements: [],
    },
    index: 1,
    work: 'app',
  },
};

export const WebCard: Story = {
  render: (args) => (
    <div className="flex flex-col w-full h-full gap-[40px]">
      <div className="light h-full min-w-[380px] p-[40px]">
        <p className="text-[1.6rem] font-bold mb-[20px]">라이트 모드 Web</p>
        <WorkCard {...args} />
      </div>
      <div className="bg-black min-w-[380px] h-full p-[40px]" data-theme="dark">
        <p className="text-[1.6rem] font-bold text-white mb-[20px]">
          다크 모드 Web
        </p>
        <WorkCard {...args} />
      </div>
    </div>
  ),
  args: {
    item: {
      id: 'story-Web',
      type: 'web',
      title: 'storybook 앱',
      img: '/assets/img_none_image.png',
      url: '',
      platforms: ['Web'],
      description: 'storybook Web',
      duration: '2개월',
      role: ``,
      skill: [
        'React',
        'Vite',
        'TypeScript',
        'Zustand',
        'React Query',
        'Axios',
        'React Virtuoso',
        'Recharts',
        'Electron',
      ],
      keyFeatures: [
        { key: '쇼핑몰', value: '' },
        { key: '커뮤니티', value: '' },
        { key: '채팅', value: '' },
      ],
      design: [
        'MUI',
        'Swiper',
        'SCSS Modules',
        'Storybook',
        'React Quill',
        'Figma',
      ],
      challenges: [],
      achievements: [],
    },
    index: 0,
    work: 'web',
  },
};
