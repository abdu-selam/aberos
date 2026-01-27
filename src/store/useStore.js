const { create } = require("zustand");

const useStore = create((set)=>({
    lang: 'en',
    setLang: (lang) => set((state) => ({ count: lang })),
}))

export default useStore