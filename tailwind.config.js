/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        geistregular: ["Geist-Regular", "sans-serif"],
        geistmedium: ["Geist-Medium", "sans-serif"],
        geistsemibold: ["Geist-SemiBold", "sans-serif"],
        geistbold: ["Geist-Bold", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        sora: ["Sora", "sans-serif"],
        Roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        gray: "#140401",
        lightgray: "#FAFAFA",
        inputPlaceholder: "#252622",
        list: "#9AA2A7",
        continue: "#E8705C",
        bottomLineOne: "#2A1410",
        bottomLineTwo: "#4C3834",
        walletLight: "#FFF2F0",
        passopacity: "#656663",
        confirmbackup: "#20110E",
        backupinnerbox: "#2B1D1A",
        activebackup: "#02F57A",
        popupclr: "#231B19",
        blurclr: "#1B1B1B",
        fixedbg: "#030202",
        dashbackground: "#261815",
        notificationvalue: "#2D9600",
        viewdetails: "#353232",
        qrborder: "#9D9D9D",
        loginwallet: "#30312C",
        btcinnerbg: "#2C1C18",
        btcbg: "#21100C",
        covertbtcborder: "#4E4E4E",
        btcvalue: "#525252",
        breakdown: "#565656",
        totalvaluebg: "#252525",
        profilebg: "#331E19",
        greendot: "#68E29F",
        currentfee: "#1C0C08",
        popupoutline: "#342d2b",
        buttondashboard: "#1C1513",
        reviewoutline: "#4B4B4B",
        reviewhead: "#B9ABA8",
        skeletonbg: "#5b3c35",
        skipline: "#514e4e",
        accountbg: "#231C19",
        accountline: "#282524",
        accounthighlightbg: "#161311",
        accounthighlightline: "#45403d",
        backupline: "#453f3d",
        backuphighlightbg: "#2E2825",
        dashboardbtnbg: "#1a1615",
        existaccount: "rgb(255 242 240 / 70%)",
        import: "rgb(250 250 250 / 30%)",
        clipboard: "rgb(255 255 255 / 5%)",
        currencyLine: "rgb(255 242 240 / 30%)",
        backupvaluecolor: "rgb(250 250 250 / 16%)",
        backgroundDark: "rgb(0 0 0 / 0.90)",
        headingcolor: "#968F8D",
        headingborder: "#3D2F2D",
        toastred: "#BD362F",
        toastyellow: "#f89406",
        toastsuccess: "#51a351",
        receiptline: "#2b2422",
      },
      backgroundImage: {
        checkboximage: "url('/public/assets/images/checkboxIcon.svg')",
        checkedboximage: "url('/public/assets/images/checkboxedIcon.svg')",
        radiobtnimage: "url('/public/assets/images/radio-uncheck.svg')",
        radiobtncheckedimage: "url('/public/assets/images/radio-checked.svg')",
        linearOne: "linear-gradient(0deg, #030202 0%, rgba(3, 2, 2, 0) 100%)",
        linearTwo:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(232, 112, 92, 0.1), rgba(232, 112, 92, 0.1))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
