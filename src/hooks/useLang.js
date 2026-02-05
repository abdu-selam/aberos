import { useEffect } from "react";

const useLang = (lang) => {
  useEffect(() => {
    const html = document.querySelector("html");
    
    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
    } else {
      html.removeAttribute("dir");
    }
  }, [lang]);
};

export default useLang;
