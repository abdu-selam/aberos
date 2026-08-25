export const browserTheme = () => {
  let theme = localStorage.getItem("theme");

  if (!["dark", "light"].includes(theme)) {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    theme = isDark ? "dark" : "light";

    localStorage.setItem("theme", theme);
  }

  return theme;
};
