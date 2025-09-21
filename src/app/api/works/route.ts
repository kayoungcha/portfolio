import { NextResponse } from 'next/server';

export interface ProjectData {
  id: string; // 고유 ID
  type: 'app' | 'web' | 'publishing' | 'personalWork';
  title: string; // 프로젝트명
  img: string;
  url?: string;
  liveUrl?: string;
  description: string; // 한 줄 설명
  duration: string; // 개발 기간
  platforms: string[]; // 배포 플랫폼 (예: ["Android", "iOS", "Web"])
  role: string; // 참여 범위
  skill: string[]; //프론트엔드 개발 & 데이터 관리
  keyFeatures: { key: string; value: string }[]; //주요기능
  design: string[]; //UI 스타일링 & 협업 생산성 도구
  challenges: { key: string; value: string }[]; // 도전 과제
  achievements: string[]; // 주요 성과
}

// ***** 프로젝트 데이터
export const ProjectDatas: ProjectData[] = [
  {
    id: 'streaum',
    type: 'web',
    title: 'Streaum',
    img: '/assets/worksImages/img_streaum.png',
    url: '',
    liveUrl: 'https://streaum.com',
    platforms: ['WEB'],
    description: '크리에이터 팬덤 기반 게임 랭킹 커뮤니티 웹사이트',
    duration: '2024.03 ~ 2025.04',
    role: `기획 20%\n데스크톱 앱 -> 웹사이트 전환 과정에서 추가 페이지 기획 참여메인 모달 화면, 스트리머 선택화면, 모바일 화면 설계 기획 참여 \n\n 프론트엔드 개발 100%\n전체 퍼블리싱 및 반응형 UI 구현 테블릿/모바일 레이아웃 & 에니메이션 구현 HTTP API 연동 및 상태관리`,
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
      { key: '소셜 로그인', value: 'Google, Naver, Discord 소셜 로그인 기능' },
      { key: '게임 로그인 연동', value: 'riot 로그인 연동' },
      { key: '회원 게임 랭킹', value: '연동 아이디 회원 게임 랭킹 정보' },
      {
        key: '커뮤니티',
        value: '게시글, 댓글, 대댓글, 베스트 댓글, 좋아요, 해시태그',
      },
      { key: '유튜브 api 연결', value: '추천 유튜브 컨텐츠 연결' },
      { key: '스트리밍 플랫폼 api 연결', value: '게임 스트리머 정보 api' },
    ],
    design: [
      'MUI',
      'Swiper',
      'SCSS Modules',
      'Storybook',
      'React Quill',
      'Figma',
    ],
    challenges: [
      {
        key: '데스크톱 앱 마이그레이션',
        value: 'C++ 기반 MVP 프론트 → React Electron으로 3주 만에 마이그레이션',
      },
      {
        key: 'CRA 기반 Electron의 버전 충돌 문제',
        value: 'SEO 적용보단 속도감 개선을 목표로 Vite Electron으로 전환 ',
      },
      {
        key: '데스크톱 앱에서 웹사이트로 기획 변경',
        value: '데스크톱 앱과 웹 동시 대응을 위한 구조 재설계',
      },
      {
        key: 'Virtual Scroll의 동적 높이 적용의 한계',
        value:
          '피드형 커뮤니티 특성상 이미지, 영상의 유무에 따라 피드의 높이가 동적으로 변해 virtual Scroll 라이브러리로는 한계를 느낌 React Virtuoso로 교체후 재적용',
      },
      {
        key: '실시간 랭킹의 지연시간',
        value:
          '실시간 랭킹 효과 증대를 위해 React Query로 캐시 조절 및 로딩과 애니메이션 효과를 적용하여 좀더 매끄러운 효과를 적용함',
      },
    ],
    achievements: [
      '6년간 기획만 진행되던 프로젝트를 웹 전환 후 6개월 만에 프론트엔드 80% 개발 완료',
      'Electron 기반 데스크톱 앱과 Vite 웹사이트를 동시에 충족하는 구조 설계',
      'React Query + IndexedDB 캐싱으로 성능 최적화 및 트래픽 절감',
      'Atomic Design Pattern + Storybook 도입 시도로  컴포넌트 재사용성과 협업 효율성 강화',
    ],
  },
  {
    id: 'anidar-customer',
    type: 'app',
    title: 'ANIDAR 고객앱',
    img: '/assets/worksImages/img_anidar.png',
    url: 'https://anidar-test.firebaseapp.com/login',
    platforms: ['Android', 'iOS'],
    description:
      '여성 건강과 라이프스타일을 위한 헬스·스파·테라피·산후조리원 커뮤니티 센터 앱',
    duration: '약 2개월',
    role: `채팅 페이지 제외 프론트엔드 & firebase 백엔드 모두 개발수정 및 신규 기능 퍼블리싱 직접 구현`,
    skill: ['Ionic', 'Angular', 'Firebase', 'Cordova'],
    keyFeatures: [
      { key: '예약 기능', value: '테라피, 식사, 카페시설 등 예약 기능' },
      { key: 'QR 인증', value: '시설 이용 시 QR 체크로 노쇼 확인' },
      { key: '채팅', value: '버틀러 앱과 1대1 혹은 다대1 채팅 기능' },
      { key: '쇼핑몰', value: '상품 장바구니, 구매, 배송 조회' },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: '회원가입',
        value:
          '관리자 페이지를 통한 원격 가입 필요 → Firebase Functions(Node.js) 기반 원격 연동 구현',
      },
      {
        key: '기간제 회원 시스템',
        value:
          'Firebase Functions(Node.js)로 하루마다 만료일 주기적 체크 및 앱 사용 가능 여부 제어',
      },
    ],
    achievements: [
      '고객앱·버틀러앱·관리자페이지가 연동된 방대한 프로젝트를 약 7개월 만에 80% 단독 개발 완료',
      '전체 프론트엔드 및 Firebase 백엔드 연동 구현 → 앱-버틀러-관리자 3축 구조 안정화',
      'Firebase Functions를 활용한 자동화로 회원/기간제 관리 효율성 강화',
      '클라이언트 피드백 과정에서 별다른 클레임 없이 서비스 제공',
    ],
  },
  {
    id: 'startapp-main',
    type: 'web',
    title: '스타트앱 공식 홈페이지',
    img: '/assets/worksImages/img_startapp.png',
    url: 'https://startapp-copy.web.app/home',
    platforms: ['web'],
    description: 'KN 큐레이션 회사 메인 홈페이지',
    duration: '약 6개월',
    role: `초기 기획 단계부터 참여하여 카피라이트 톤 & 애니메이션 컨셉회의 기여 전체 퍼블리싱 중 전체 뼈대, 업무서비스(Android,iOS 개발), 포트폴리오(한라 제외), 간편견적 등을 담당 퍼블리셔 총 3명의 협업으로 진행된 프로젝트  그외 모든 프론트&firebase 이용한 백엔드 개발은 100% 담당`,
    skill: [
      'Angular',
      'Typescript',
      'Scss',
      'PDF.js',
      'Node.js',
      'Firebase',
      'Chart.js',
    ],
    keyFeatures: [
      {
        key: '간편견적',
        value: `장바구니 기능 + PDF 다운로드`,
      },
      {
        key: '문의하기',
        value: `이메일 연동으로 데이터 송신`,
      },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: '다수 인원의 협업',
        value:
          '다수 인원이 협업하는 프로젝트로 글로벌 CSS 규칙/ 애니메이션등을 정립 및 공유하여 원할한 협업에 기여',
      },
      {
        key: '라이브러리 비용 절감',
        value: '라이브러리 사용 대신 비용 절감을 위해 애니메이션 직접 구현',
      },
    ],
    achievements: [
      '자체 구현한 패럴렉스 및 텍스트 애니메이션을 팀과 공유해 생산성 향상',
      'PDF 다운로드 및 이메일 연동 기능을 구현하여 기술적 기여',
      '회사 메인 홈페이지로 실제 운영 및 배포, 안정적인 사용자 경험 제공',
    ],
  },
  {
    id: 'anidar-butler',
    type: 'app',
    title: 'ANIDAR 버틀러앱',
    img: '/assets/worksImages/img_anidarforbtuler.png',
    url: 'https://anidar-staff.firebaseapp.com/login',
    platforms: ['Android', 'iOS'],
    description: '시설 직원 전용 운영 관리 앱',
    duration: '약 2개월',
    role: `신생아실 일부 기능 제외 프론트엔드 & firebase 백엔드 모두 개발수정 및 신규 기능 퍼블리싱 직접 구현`,
    skill: ['Ionic', 'Angular', 'Firebase', 'Cordova'],
    keyFeatures: [
      { key: '예약 확인기능', value: '테라피, 식사, 카페시설 등 예약 기능' },
      { key: 'QR 확인 기능', value: '시설 이용 시 QR 체크로 노쇼 확인' },
      { key: '채팅', value: '고객앱과 1대1 혹은 다대1 채팅 기능' },
      {
        key: '각 로그인 유형별 개별 기능',
        value: `버틀러: 회원 스케줄·일정 확인, 회원 채팅, 예약 확인 및 현장 포인트 차감, 휴무일 관리' '바디 테라피스트: 예약 일정 확인, 예약 완료 처리, 현장 QR 차감' '신생아실 간호사: 회원별 신생아 관찰지 입력' '주차 직원: 발렛 완료 및 상태 확인' '카페·델리 직원: 주문 접수 및 결제 처리 (키오스크 형태)' '쉐프·배달 서버: 조리·배달 상태 확인 및 완료 처리`,
      },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: 'QR 코드 확인 기능',
        value:
          '한번 켜진 카메라엔 QR 코드가 단 한번만 찍힘 → 오류 발생 시 Alert 창 발생 후 카메라를 리프레시해 카메라가 계속 켜있는 상태처럼 보이게 함',
      },
      {
        key: '버틀러가 자동으로 바뀌는 채팅 시스템 문제',
        value:
          '버틀러 교대/퇴사 시 채팅 버틀러가 자동으로 바뀌어야하는 채팅 기능에 문제 발생 → 도움 받은 코드를 직접 수정해 안정화',
      },
      {
        key: '월별 휴일 표시',
        value:
          '한국 공휴일 API를 활용, 매년 Firebase Functions로 자동 업데이트',
      },
    ],
    achievements: [
      '다양한 직원 직군(버틀러, 테라피스트, 주차, 카페, 신생아실 등)의 기능을 하나의 앱에 통합, 복잡한 운영 요구사항 해결',
      'Firebase Functions와 공휴일 API를 활용한 스케줄 자동화로 운영 효율성과 정확성 강화',
      '방대한 기능과 회원 데이터 연동을 안정적으로 구현하여 서비스 운영에 기여',
    ],
  },
  {
    id: 'admin',
    type: 'web',
    title: '모든 어플의 페어 관리자 페이지 (예시: anidar)',
    img: '/assets/worksImages/img_admin.png',
    url: 'https://anidar-copy.firebaseapp.com/dashboard',
    platforms: ['web'],
    description:
      '회원 정보, 예약, 스케줄, 쇼핑몰 등 어플의 전반적인 서비스 운영을 관리하는 통합 웹 관리자 페이지',
    duration: '약 2주 - 3개월까지 (분량별로 상이)',
    role: `단독 개발 (1:1문의, 커뮤니티 클럽, 서비스 정보 관리, 채팅관리 기능 제외)Angular 기반 샘플 페이지를 활용해 퍼블리싱 및 기능 구현`,
    skill: ['Angular', 'Firebase', 'Chart.js'],
    keyFeatures: [
      {
        key: '통계 대시보드',
        value: '회원 현황, 마일리지 순위, 직원 실적 확인 등',
      },
      {
        key: '회원 관리',
        value: '직원 포함 전체 회원 등록/관리, 전체 푸시 알람 발송',
      },
      {
        key: '채팅 관리',
        value: `운영자, 버틀러 채팅 및 모든 채팅 확인 가능`,
      },
      {
        key: '예약 관리 및 스케줄 관리',
        value: `달별 확인, 시간대별 예약 인원 제한 적용`,
      },
      {
        key: '컨텐츠 관리',
        value: `앱 내 배너 관리`,
      },
      {
        key: '쇼핑몰 관리',
        value: `재고, 판매량, 인기상품 On/Off, 배송 상태 관리`,
      },
      {
        key: '엑셀 다운로드',
        value: `회원 내역 및 쇼핑몰 내역 엑셀 다운로드`,
      },
    ],
    design: [],
    challenges: [
      {
        key: '관리자 페이지 특성상 연동 데이터가 많음',
        value:
          'Firebase의 실시간 subscribe 비용 절감을 위해 fetch/subscribe 타이밍 최적화 설계 및 Angular 컴포넌트 구조 설계에 집중, 부모-자식 간 데이터 연동 최적화',
      },
      {
        key: '스케줄 관리',
        value:
          '달력에 전달 다음달 여유분을 위해 달별 데이터 ±15일 확장 기능 구현',
      },
      {
        key: '시간대별 예약 인원 제한 기능',
        value:
          '인원을 제한하지 않으면 한 시간대에 많은 사람이 신청 할 수 있기때문에 기획 추가 후 기능 추가',
      },
    ],
    achievements: [
      '방대한 관리 기능을 하나의 통합 관리자 페이지로 집약, 운영 효율성 극대화',
      'Firebase 최적화로 비용 절감 및 성능 개선',
      'Chart.js 기반 통계 시각화로 운영팀의 모니터링 편의성 향상',
      '운영팀이 직접 정책을 변경/관리할 수 있는 시스템 구축 → 클라이언트 만족도 제고',
    ],
  },

  {
    id: 'heyo',
    type: 'app',
    title: 'HEYO',
    img: '/assets/worksImages/img_heyo.png',
    url: 'https://heyo-copy.web.app/intro',
    platforms: ['Android', 'iOS'],
    description: '이웃 간 재능과 시간을 나누는 지역 기반 커뮤니티 앱',
    duration: '약 1개월',
    role: `퍼블리싱(수정 및 추가 페이지) 인앱결제를 제외한 모든 페이지 개발`,
    skill: ['Ionic', 'Angular', 'Firebase', 'Cordova', 'Google Maps API'],
    keyFeatures: [
      {
        key: '지역 기반 위치 설정',
        value: 'Google Maps API 활용하여 사용자 접속 위치 확인',
      },
      {
        key: '서비스 매칭',
        value: '해주세요,해줄게요,함께해요 카테고리별 유저 서비스 매칭',
      },
      {
        key: '포인트 시스템',
        value: '시간 단위로 거래 가능한 포인트 시스템 (충전·차감·환급)',
      },
      {
        key: '번호 인증',
        value: '휴대전화로 회원 가입 및 로그인',
      },
      {
        key: '채팅',
        value: '채팅 기능을 통한 요청·응답·거래 확정',
      },
      {
        key: '실명인증',
        value: '아임포트를 이용한 실명인증 (지금의 포트원) ',
      },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: '잦은 페이지 이동',
        value:
          '어플 특성상 피드에서 상세 상세에서 채팅등 페이지 이동이 잦아 사용자 경험이 중요함 -> 스켈레톤 UI와 중간 로딩 화면을 추가하여 디자인부터 직접 구현',
      },
    ],
    achievements: [
      '사용자 중심의 로딩 경험 개선으로 앱 완성도 강화',
      '고객 시연 전 기획자와 협업하여 실사용 버전 게시물 구성 → 클라이언트로부터 극찬 피드백 획득',
    ],
  },
  {
    id: 'maum',
    type: 'app',
    title: 'MAUM',
    img: '/assets/worksImages/img_maum.png',
    url: 'https://maum-capy.web.app/login',
    platforms: ['Android', 'iOS'],
    description: '마음을 나누고 세상을 바꾸는 것을 목표로 한 커뮤니티 앱',
    duration: '약 3주',
    role: `퍼블리싱(수정 및 추가 페이지) 모든 페이지 단독 개발`,
    skill: ['Ionic', 'Angular', 'Firebase', 'Cordova'],
    keyFeatures: [
      {
        key: '커뮤니티',
        value:
          'My(일반 글), Our(투표), Your(지식인형 답변) 카테고리의 커뮤니티와 모든 카테고리의 글과 댓글 작성 가능, 표정 이모지로 감정 표현',
      },
      {
        key: '포인트 시스템',
        value: '글/댓글 작성 시 차감·추가',
      },
      {
        key: '배경 이미지 셔플',
        value: '글마다 다른 6개 배경이 겹치지 않게 자동 배치',
      },
      {
        key: '투표 시스템',
        value:
          'Our 카테고리에서 사용 작성자 허용 시 다른 유저가 옵션 추가 가능 투표 종료 시 Firebase Functions로 자동 업데이트 및 푸시 발송',
      },
      {
        key: '푸시 알람',
        value: '관심글, 댓글, 대댓등 설정 알람에 푸시알람 기능',
      },
      {
        key: '외부 공유',
        value: 'Firebase Dynamic Link로 글 상세 외부 공유 가능',
      },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: '슬라이드 형 커뮤니티',
        value:
          '슬라이드 형 커뮤니티 특성상 글이 쌓이거나 배경을 셔플할때 로딩 시간이 지연되 보일 수 있음 -> 스켈레톤 UI 및 로딩 화면 추가',
      },
      {
        key: '포인트 시스템',
        value:
          '처음으로 맡는 포인트 시스템의 어플이었기 때문에 Angular service를 적극 이용하고 Firebase increment 쿼리로 성능 최적화',
      },
      {
        key: '투표 시스템 커스터마이징',
        value:
          '다른 사람 글에 옵션이 추가 허용되어야 했기 때문에 기존 글 수정에서 수정 할 수있는 부분 없는 부분을 설정해 타입화 함 투표 종료시 투표 작성자에게 Push를 보내야 했기때문에 Functions를 활용하여 스케줄화 함',
      },
    ],
    achievements: [
      '유지보수 과정에서 새로운 요구사항(지역 기반 카테고리) 유연하게 반영',
      '짧은 시간안에 완성도 있는 어플을 완성 클라이언트 피드백 과정에서 별다른 클레임 없이 서비스 제공',
      'Firebase Functions 및 Dynamic Link 활용으로 사용자 경험 확장',
    ],
  },
  {
    id: 'missiongo',
    type: 'app',
    title: 'MISSIONGO',
    img: '/assets/worksImages/img_missiongo.jpg',
    url: '',
    platforms: ['Android', 'iOS'],
    description: '미션 기반 참여형 피드를 제공하는 커뮤니티 앱',
    duration: '약 1개월',
    role: `Ionic3 → Ionic5 마이그레이션 담당퍼블리셔에서 개발자로 전환하게 된 첫 프로젝트`,
    skill: ['Ionic', 'Angular', 'Firebase', 'Cordova'],
    keyFeatures: [
      {
        key: '커뮤니티',
        value:
          '미션 기반 커뮤니티 피드 사용자가 특정 주제에 참여 가능 (피드, 댓글, 참여 피드)',
      },
      {
        key: '영상 업로드 기능',
        value: '이미지 외에 영상도 업로드 할수있는 기능',
      },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: 'Ionic5 마이그레이션',
        value:
          'Ionic5와 Ionic3는 Angular 대규모 업데이트 후 문법 자체가 바뀌어서 Angular 당시 버전을 독학 하며 개발 진행',
      },
      {
        key: '인피티니 스크롤 피드 타입',
        value:
          '피드 마다 접기 더보기 버튼의 동적 높이와 인피니티 스크롤이 충동나 최대한 ngClass등의 angular의 양방향을 사용하며 css로 해결하려고 노력함',
      },
      {
        key: '다른 사람의 코드',
        value:
          '첫 개발 프로젝트였는데 다른 사람의 코드를 마이그레이션 하는 과제를 받아서 난해했지만 구조를 분석 수정하며 코드 리딩 역량을 강화함',
      },
      {
        key: '영상 업로드 속도와 비용',
        value:
          '영상 업로드 속도가 무리 업을만큼 영상을 올릴수있는 시간을 쪼개 개발 진행',
      },
      {
        key: 'Cloud Firestore 데이터 전환',
        value:
          'Firebase Realtime DB에서 Cloud Firestore로 전환하며 데이터 구조 및 쿼리 최적화를 경험함',
      },
    ],
    achievements: [
      '개발자로의 전환 계기를 마련한 첫 프로젝트',
      '난해한 코드 구조를 성공적으로 분석·수정하여 성능 개선 평가 획득',
      '코드 독학과 리팩토링 과정을 통해 개발자로서 성장 기반 확보',
    ],
  },
  {
    id: 'startapp-solution',
    type: 'app',
    title: '스타트앱 솔루션 앱',
    img: '/assets/worksImages/img_solution.png',
    url: '',
    platforms: ['Android', 'iOS'],
    description:
      '커뮤니티, 채팅, 쇼핑몰 모듈을 조합해 빠르게 배포할 수 있는 솔루션 앱',
    duration: '약 2개월',
    role: `신사업 회의에 참여하며 앱 기초 뼈대와 개발 방향 제안`,
    skill: ['Ionic', 'Angular', 'Firebase', 'Cordova', 'Google Cloud Platform'],
    keyFeatures: [
      {
        key: '커뮤니티',
        value: '카드뷰의 기본형 커뮤니티',
      },
      {
        key: '채팅',
        value: '1:1 기본형 채팅',
      },
      {
        key: '쇼핑몰',
        value: '장바구니, 구매, 택배 현황 조회 기능',
      },
    ],
    design: ['Sketch'],
    challenges: [
      {
        key: '솔로션 프로젝트',
        value:
          '기존 모듈의 스타일·기능 차이로 인한 불일치 문제와 여러 인원이 동시에 코드 수정 시 충돌 및 오해 발생 협업을 고려한 컴포넌트화를 진행 하며 글로벌 css를 설계함',
      },
      {
        key: '솔루션 프로젝트의 예시 데이터',
        value:
          '모든 어플엔 예시데이터가 필요함 매번 새로운 예시 데이터를 추가할 수는 없음으로 Cloud Firestore Export/Import (gcloud CLI 기반)를 활용해 Firebase 구조와 데이터를 복사·재사용, 빠른 배포 환경 구축',
      },
    ],
    achievements: [
      '신사업 프로젝트의 기획·개발에 직접 참여하여 확장성 있는 앱 구조 설계 경험',
      '모듈화·컴포넌트화 시도로 협업 효율성을 높였으나, 이후 경량화 필요성을 깨닫는 학습 경험 확보',
      '마지막 앱 프로젝트로서 협업과 아키텍처 설계에 대한 깊은 학습 경험을 얻음',
    ],
  },
  {
    id: 'anidar-service-site',
    type: 'web',
    title: 'ANIDAR 서비스 페이지',
    img: '/assets/worksImages/img_anidar_web.png',
    url: '',
    platforms: ['web'],
    description: 'ANIDAR 서비스 홍보를 위한 부가 홈페이지',
    duration: '약 1주',
    role: `다른 담당자의 업무였지만 도움 기여`,
    skill: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    keyFeatures: [],
    design: [],
    challenges: [
      {
        key: '워드프레스 템플릿',
        value:
          '워드프레스 템플릿의 구조적 제약으로 원하는 커스터마이징 어려웠음 -> 직접 HTML파일을 내려 받아 수정하여 문제 해결',
      },
    ],
    achievements: [
      '고객 요구사항을 반영해 WordPress 환경에서도 커스터마이징 역량 입증',
      '협업 과정에서 다른 퍼블리셔의 어려운 작업을 대신 해결하여 프로젝트 완성도 향상',
    ],
  },
  {
    id: 'blossom',
    type: 'publishing',
    title: 'BLOSSOM',
    img: '/assets/worksImages/img_blossom.jpg',
    url: '',
    description: '온라인 매칭부터 실제 만남까지 지원하는 이성 소개팅 서비스',
    duration: '약 2주',
    platforms: ['Android', 'iOS'],
    role: `전체 퍼블리싱 담당 및 기본 프론트엔드 작업`,
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['XD', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '클라이언트 디자인',
        value:
          '기존 사내 디자인 규칙과 XD 전달 디자인 가이드와 사용법이 달라 독학으로 진행함',
      },
      {
        key: '슬라이더  UI',
        value:
          '라이브러리 기본 스타일과 XD 디자인이 달라 직접 커스터마이징 작업',
      },
    ],
    achievements: [
      '외부 디자인을 성공적으로 융합 결과적으로 퍼블리싱 프로젝트 중 가장 예쁘다는 평가를 들음',
    ],
  },
  {
    id: 'movingday-company',
    type: 'publishing',
    title: '이삿날 사장님 버전',
    img: '/assets/worksImages/img_movingday_c.jpg',
    url: '',
    description:
      '영상 기반 견적을 확인하고 관리할 수 있는 이사 견적 사장님 전용 앱',
    duration: '약 2주',
    platforms: ['Android', 'iOS'],
    role: `사장님용 어플 전체 퍼블리싱 담당 및 기본 프론트엔드 작업`,
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['Sketch', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '퍼블리셔 협업',
        value:
          '고객용 앱 사장님용 앱을 서로 다른 퍼블리셔가 작업하고 있어 해당 어플에 동일한 카드 뷰를 맞추기 위해 카드 퍼블리싱 결과를 서로 공유하며 협업',
      },
      {
        key: '홈 화면 UI',
        value:
          '8개의 버튼을 모든 디바이스 화면에 가득차고 균형 있게 배치하기 위해 Flex기반의 레이아웃 조절',
      },
    ],
    achievements: [
      '고객용 앱과 사장님용 앱의 UI 일관성을 확보하여 서비스 신뢰도 향상',
    ],
  },
  {
    id: 'semonam',
    type: 'publishing',
    title: '세모남',
    img: '/assets/worksImages/img_semonam.jpg',
    url: '',
    description: '남성 전용 뷰티 앱',
    duration: '약 2주',
    platforms: ['Android', 'iOS'],
    role: `전체 퍼블리싱 담당 및 기본 프론트엔드 작업`,
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['Sketch', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '테스트 UI',
        value:
          '질문 흐름이 길어 지루하지 않도록 애니메이션·전환 효과를 적극 반영',
      },
    ],
    achievements: [
      '피부 타입 테스트(그루밍 솔루션)를 직관적이고 지루하지 않게 퍼블리싱하여 사용자 경험 개선',
    ],
  },
  {
    id: 'yourname',
    type: 'publishing',
    title: '네이름 (나만의 카드 만들기)',
    img: '/assets/worksImages/img_yourname.png',
    url: '',
    description: '사용자가 직접 명함을 제작할 수 있는 모바일 앱',
    duration: '약 2주',
    platforms: ['Android', 'iOS'],
    role: `전체 퍼블리싱 담당 및 기본 프론트엔드 작업`,
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['Sketch', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '반응형 명함 레이아웃',
        value:
          '디바이스 기기마다 명함 UI가 글꼴/텍스트 길이에 따라 깨지지 않도록 세밀한 반응형 설계',
      },
      {
        key: '명함의 input마다 사용자 지정 글씨체',
        value:
          '처음으로 ngClass를 도입하여 동적 스타일 제어(글꼴, 굵기 등) 구현 끊기거나 짤리지 않게 하기 위해서 반응형으로 확인하며 잘리는 굵기 글자수등 세밀하게 체크',
      },
      {
        key: '개발 협업',
        value:
          '개발자가 스크립트로 구현에 어려움을 겪던 부분을 직접 ngClass등 퍼블리싱으로 해결',
      },
    ],
    achievements: [
      '퍼블리싱 난도가 높은 명함 제작 UI를 성공적으로 구현하여 팀의 개발 생산성 향상',
      'CSS와 Angular의 동적 클래스 활용 경험을 쌓으며 퍼블리싱 역량 강화',
    ],
  },
  {
    id: 'some',
    type: 'publishing',
    title: 'Some',
    img: '/assets/worksImages/img_some.jpg',
    url: '',
    description:
      '태국인을 대상으로 맞춤 성형 정보를 제공하는 한국 성형외과 예약 앱',
    duration: '약 1주',
    platforms: ['Android', 'iOS'],
    role: '추가 퍼블리싱 및 수정 작업 담당',
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['Sketch', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '유지 보수',
        value:
          '기존 작업을 진행했던 퍼블리셔 공백으로 인해 짧은 기간 안에 추가 작업 및 수정 진행',
      },
      {
        key: 'UI 정리',
        value:
          '기존 퍼블리싱을 유지 보수 하며 같은 레이아웃임에도 간격이 맞지 않는 부분의 피드백을 위해 전면 수정하여 일관성 확보',
      },
      {
        key: '태국어 대응',
        value:
          '태국어 어플임으로 한국어를 주석처리해 개발자와의 소통을 원활하게 진행함 그외 태국어가 한국어보다 길어지는 특성을 반영해 반응형을 촘촘히 체크하여 레이아웃이 깨지지않게 방지',
      },
    ],
    achievements: [
      '다국어 환경에서 안정적인 퍼블리싱 수정 완료',
      '이모티콘 기반 견적 UI를 매끄럽게 구현하여 사용자 경험 개선',
      '퍼블리셔 공백 상황에서도 프로젝트 연속성을 유지하며 팀에 기여',
    ],
  },
  {
    id: 'ofix',
    type: 'publishing',
    title: 'OFIX',
    img: '/assets/worksImages/img_ofix.png',
    url: '',
    description: '클라이언트 내수용 업무 앱',
    duration: '약 1주',
    platforms: ['Android', 'iOS'],
    role: 'Ionic3 → Ionic4 마이그레이션',
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['Sketch', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '가로 버전 어플',
        value: '가로로 되어있는 어플 구성상 가로 구조에 맞게 퍼블리싱을 진행함',
      },
    ],
    achievements: [
      '퍼블리셔로 첫 프로젝트에서 Ionic·Angular를 직접 다루며 새로운 프레임워크 습득',
      '추후 모바일 퍼블리싱 및 프론트엔드 개발의 기반 역량을 확보',
    ],
  },
  {
    id: 'coveru',
    type: 'publishing',
    title: 'Cover U',
    img: '/assets/worksImages/img_coveru.png',
    url: '',
    description: '유학생을 위한 커뮤니티 앱',
    duration: '약 2주',
    platforms: ['Android', 'iOS'],
    role: '전체 퍼블리싱 담당',
    skill: ['Ionic', 'Angular', 'Typescript'],
    keyFeatures: [],
    design: ['Sketch', 'HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: '카테고리 다양성',
        value:
          '상단 카테고리가 많고 슬라이드 되면서 카테고리와 피드가 바뀌어야하는 기능이있어 슬라이드와 클릭기능이 겹치지 않게 노력',
      },
    ],
    achievements: [
      '다양한 카테고리를 수용하면서도 사용자 친화적인 화면 구성을 완성',
    ],
  },
  {
    id: 'chzzk',
    type: 'personalWork',
    title: 'Chzzk Streamer List',
    img: '/assets/worksImages/img_streamerList.png',
    liveUrl: 'https://streamerlist-fc911.web.app/',
    description: 'Streaum 프로젝트 진행 중 Api 실험 페이지',
    duration: '하루',
    platforms: ['web'],
    role: '전체 개발',
    skill: ['Angular', 'Typescript', 'Firebase'],
    keyFeatures: [
      {
        key: 'Chzzk streamer Api',
        value: '라이브 중인 스트리머 데이터 받아오기',
      },
      {
        key: 'Youtube Api',
        value: '특정 키워드 정보 가져오기',
      },
    ],
    design: ['HTML', 'CSS', 'SCSS'],
    challenges: [
      {
        key: 'Streaum 프로젝트 진행 중 스트리머 데이터와 추천 youtube 컨텐츠를 가져오는데 마찰이 생김',
        value:
          '직접 시범 사이트를 만들면 문제 해결이 빠를것 같아 Firebase Functions(node.js 베이스)를 활용해 2시간에 한번씩 라이브 채널 중 카테고리가 Game인 스트리머만 2000개 리미트로 가져와 중복을 데이터를 체크 후 데이터를 쌓음 이후 받아온 치지직 게임 스트리머 데이터 중 특정 스트리머의 키워드로 (사이트 상에선 편의상 배열 인덱스0~2 3명) youtube search api로 추천 영상 리스트를 가져오는게 가능한지 실험해 봄',
      },
    ],
    achievements: [
      '전 파트에 해당 마찰에 대한 이해도를 높일 수 있었음',
      '기획+벡엔드 개발자분들에게 방향을 제시함으로써 프로젝트 진행 속도가 향상 됨',
      'https://www.notion.so/api-api-1c6f9546edb980cea0a2eea18f89550e?source=copy_link 관련 문서를 작성해 놓음으로써 협업에 더욱 기여함',
    ],
  },
  {
    id: 'storybook',
    type: 'personalWork',
    title: '포트폴리오 스토리북',
    img: '/assets/worksImages/img_my_storybook.png',
    liveUrl: 'https://portfolio-storybook-pink.vercel.app/',
    description: '포트폴리오 재사용 가능 ui 컴포넌트들의 간단 스토리북',
    duration: '하루',
    platforms: ['Web'],
    role: '퍼블리싱 및 프론트엔드 작업',
    skill: ['React', 'Next.js', 'Storybook', 'Vercel'],
    keyFeatures: [
      {
        key: '컴포넌트 문서화',
        value: '재사용 가능한 UI 컴포넌트를 예시로 문서화 함',
      },
      {
        key: '상태별 프리뷰',
        value: 'props 별로 변화를 확인 할 수 있음 ',
      },
      {
        key: '배포 자동화',
        value: 'Vercel로 Storybook 전용 사이트 자동 배포',
      },
    ],
    design: ['Tailwind CSS'],
    challenges: [
      {
        key: '다크모드 지원',
        value:
          '포트폴리오의 차별점 중 하나인 다크 모드를 스토리북에도 적용하고자 했으나, 스토리북 다크 모드 애드온이 버전 충돌로 설치되지 않아 data-theme, dark class 등을 활용해 직접 구현',
      },
      {
        key: '환경 충돌 해결',
        value:
          'Next.js + Turbopack 환경에서 storybook-vite 설치 시 충돌 발생 → 공식 문서를 참고해 Next.js 전용 스토리북으로 재설치하여 문제 해결',
      },
    ],
    achievements: [
      'Vercel을 활용해 스토리북을 Next.js 기반 포트폴리오와 함께 자동 배포하며, 최적화된 배포 환경을 구축하고 운영 경험을 쌓음',
    ],
  },
];

// route.js 를 통해 api 형식 구현하기
export async function GET() {
  return NextResponse.json(ProjectDatas);
}
