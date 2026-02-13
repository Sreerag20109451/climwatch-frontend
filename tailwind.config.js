// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(badge|button|card|chip|code|divider|dropdown|form|image|input|kbd|link|navbar|select|skeleton|snippet|toggle|ripple|spinner|menu|popover|listbox|scroll-shadow).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
