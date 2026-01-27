import { create } from "zustand";

const useStore = create((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang }),
}));

export default useStore;
