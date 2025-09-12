export const heroIcons = [
  {
    name: 'angular',
    img: '/assets/icon_angular_logo.svg',
    size: 46,
    position: { x: 230, y: 350 },
  },
  {
    name: 'firebase',
    img: '/assets/icon_firebase_logo.svg',
    size: 48,
    position: { x: -390, y: 310 },
  },
  {
    name: 'git',
    img: '/assets/icon_git_logo.svg',
    size: 36,
    position: { x: -360, y: -20 },
  },
  {
    name: 'ionic',
    img: '/assets/icon_ionic_logo.svg',
    size: 31,
    position: { x: 215, y: -60 },
  },
  {
    name: 'react',
    img: '/assets/icon_react_logo.svg',
    size: 45,
    position: { x: 390, y: 170 },
  },
  {
    name: 'typescript',
    img: '/assets/icon_typescript_logo.svg',
    size: 33,
    position: { x: -290, y: 140 },
  },
];

export const workNavDesc = [
  {
    id: '앱',
    desc: `모바일 앱은 Ionic과 Angular를 이용한 하이브리드 앱으로 \nFirebase를 통해 서버리스 백엔드를 설계 및 구현까지 직접 진행하였습니다.`,
  },
  {
    id: '웹',
    desc: `웹 작업은 각각 React, Angular, WordPress 세가지 작업 버전이 있습니다. \n React 작업은 퍼블리싱과 HTTP 프론트엔드 작업을 진행하였고 \nAngular 작업은 Firebase를 통한 서버리스 백엔드 설계 및 구현까지 진행하였습니다.`,
  },
  {
    id: '퍼블리싱',
    desc: `퍼블리셔로 시작해 퍼블리싱 작업이 많습니다. \n모든 퍼블리싱 작업은 Ionic/Angular로 작업되어있습니다.`,
  },
  {
    id: '개인작업',
    desc: `포트폴리오 및 프로젝트를 진행하며 만들었던 실험용 개인작업`,
  },
];

export interface work {
  type: string;
  name: string;
  mainImg: string;
  desc: string;
  year: string;
  skill: string[];
  keyFeatures: string[];
  design: string[];
}

export const workList: work[] = [
  {
    type: 'web',
    name: 'Streaum',
    mainImg: '/assets/worksImages/img_streaum.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2024',
    skill: [
      'React',
      'vite',
      'zustand',
      'Restful Api',
      'React Query',
      'Electron',
      'Recharts',
      'React quill',
      'Storybook',
      'FramerMotion',
    ],
    keyFeatures: [
      '랭킹',
      '커뮤니티',
      '유튜브 api 연결',
      '스트리밍 플랫폼 api 연결',
      '주요 게임 api 연결',
    ],
    design: ['Figma'],
  },
  {
    type: 'app',
    name: 'ANIDAR',
    mainImg: '/assets/worksImages/img_anidar.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'Capacitor'],
    keyFeatures: ['예약기능', 'QR', '쇼핑몰', 'push 알람', '채팅'],
    design: ['Sketch'],
  },
  {
    type: 'web',
    name: 'StartApp 메인 홈페이지',
    mainImg: '/assets/worksImages/img_startapp.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Angular', 'Firebase'],
    keyFeatures: ['문의하기', '간편 견적', '견적 다운'],
    design: ['Sketch'],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
];

export const frontEndSkill = [
  'React',
  'Angular',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'WordPress',
  'Electron',
  'Capacitor',
  'Cordova',
  'Firebase ',
  'Zustand',
  'React Query',
  'Chart.js',
  'Recharts',
  'React quill',
];

export const workToolsSkill = [
  'HTML',
  'CSS',
  'SCSS',
  'Tailwindcss',
  'GitHub',
  'GitLab',
  'Figma',
  'Photoshop',
  'XD',
  'Sketch',
  'Storybook',
];
