import { useState } from 'react';

type Props = {
  updateWork: (menu: string) => void;
  styles?: string;
};

export default function WorksNav(props: Props) {
  const navMenu = [
    { id: 'app', title: '앱' },
    { id: 'web', title: '웹' },
    { id: 'publishing', title: '퍼블리싱' },
    { id: 'personalWork', title: '개인작업' },
  ];
  const [activeMenu, setActiveMenu] = useState<string>('');

  const navActive = (menu: string) => {
    if (menu === activeMenu) {
      setActiveMenu('');
      props.updateWork('');
    } else {
      setActiveMenu(menu);
      props.updateWork(menu);
    }
  };

  return (
    <nav
      className={`w-[calc(100%_-_10px)] max-w-[32rem] sm:max-w-full sm:w-[34rem]
        h-[4rem] px-[3rem] py-[1rem] rounded-[24px] bg-background shadow-md
        ${props.styles}`}
    >
      <ul className="flex items-center justify-between">
        {navMenu.map((menu) => {
          return (
            <li
              key={menu.id}
              className={`text-[1.4rem] lg:text-[1.6rem] px-[10px]
              cursor-pointer pb-[1px]
              ${activeMenu === menu.id ? 'text-point' : 'text-txt-quaternary'}`}
              onClick={() => navActive(menu.id)}
            >
              {menu.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
