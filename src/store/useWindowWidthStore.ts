import { create } from 'zustand';

type width = number;

interface WidthState {
  width: width;
  setWidth: (val: width) => void;
}

export const useWindowWidthStore = create<WidthState>((set) => ({
  width: 0, // 기본값
  setWidth: (val: width) => set({ width: val }),
}));
