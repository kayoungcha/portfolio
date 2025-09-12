import { create } from 'zustand';

type Section =
  | 'heroSection'
  | 'worksSection'
  | 'skillsSection'
  | 'contactSection'
  | null;

interface ActiveSectionState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const useActiveSectionStore = create<ActiveSectionState>((set) => ({
  activeSection: null,
  setActiveSection: (section) => set({ activeSection: section }),
}));
