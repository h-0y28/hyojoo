module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 파일 경로 설정
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "serif"],
        hahmlet: ["Hahmlet", "serif"],
      },
      fontWeight: {
        "extra-light": "100",
        light: "200",
        normal: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
