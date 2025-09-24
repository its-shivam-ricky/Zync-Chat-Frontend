import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("zync-theme") || "synthwave",
  setTheme: (theme) => {
    localStorage.setItem("zync-theme", theme);
    set({ theme });
  },
}));