module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
          A700_42: "#ffffff42",
          A700_47: "#ffffff47",
          A700_2d: "#ffffff2d",
          A700_3d: "#ffffff3d",
          A700_44: "#ffffff44",
        },
        blue_gray: { 50: "#e9f1f5", "900_7f": "#3030307f", "900_01": "#313030", "900_02": "#2b2b2b" },
        black: { 900: "#030303", "900_01": "#000000", "900_19": "#00000019", "900_0c": "#0000000c" },
        gray: {
          200: "#efefef",
          300: "#e5e6e0",
          400: "#c6c6c6",
          700: "#555555",
          900: "#171717",
          "800_02": "#564545",
          "800_01": "#474747",
          "500_03": "#a4a4a4",
          "300_01": "#e5e5e5",
        },
        green: { A400: "#00c975" },
      },
      boxShadow: { xs: "0px 0px  11px 0px #0000000f", sm: "0px 0px  11px 0px #00000019" },
      fontFamily: { poppins: "Poppins", sfprodisplay: "SF Pro Display", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #000000a0,#73737300)",
        gradient1: "linear-gradient(180deg, #eaeaea,#a5a5a5)",
        gradient2: "radial-gradient(308deg, #353535,#000000)",
        gradient3: "linear-gradient(180deg, #c5e265,#8ac018)",
        gradient4: "linear-gradient(143deg, #004a40,#064a34)",
        gradient5: "linear-gradient(to right #eaeaeac1,#fcfbb900,#ebebeb00)",
        gradient6: "linear-gradient(to right #8297ad,#8499ae00)",
      },
      opacity: { 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
