import { useState } from 'react';

type Props = {
  updateWork: (menu: string) => void;
  styles?: string;
};

export default function WorksNav(props: Props) {
  const navMenu = ['앱', '웹', '퍼블리싱', '개인작업'];
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
      className={`w-[36rem] h-[4rem] px-[3rem] py-[1rem] rounded-[24px]
        bg-background shadow-md ${props.styles}`}
    >
      <ul className="flex items-center justify-between">
        {navMenu.map((menu) => {
          return (
            <li
              key={menu}
              className={`text-[1.6rem] px-[10px] cursor-pointer pb-[1px]
              ${activeMenu === menu ? 'text-point' : 'text-txt-quaternary'}`}
              onClick={() => navActive(menu)}
            >
              {menu}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
