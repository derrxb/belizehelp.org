module.exports = {
  content: ["./app/**/**.{tsx,jsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      black: "#0D1210",
      "dark-gray": "#181818",
    }),
    extend: {
      spacing: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};
