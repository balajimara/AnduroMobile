// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        geistregular: ["Geist-Regular", "sans-serif"],
        geistmedium: ["Geist-Medium", "sans-serif"],
        geistsemibold: ["Geist-SemiBold", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        sora: ["Sora", "sans-serif"],
        Roboto: ["Roboto Mono", "monospace"]
      },
      colors: {
        gray: "#140401",
        lightgray: "#FAFAFA",
        customCheckbox: "#FF6347",
        lodercolor:"#534846",
        loginloader:"#e7e7e7",
        profilebg: "#331E19",
        inputPlaceholder:"#252622",
        btcbg: "#21100C",
        btcinnerbg: "#2C1C18",
        list:"#9AA2A7",
        continue:"#E8705C",
        reviewborder: "#4B4B4B",
        totalvaluebg: "#252525",
        bottomLineOne:"#2A1410",
        bottomLineTwo:"#4C3834",
        greendot: "#68E29F",
        breakdown: "#565656",
        btcvalue: "#525252",
        passopacity:"#656663",
        confirmbackup: "#20110E",
        backupinnerbox: "#2B1D1A",
        confrimvalue: "#474845",
        activebackup: "#02F57A",
        popupclr: "#250701",
        blurclr: "#1B1B1B",
        fixedbg: "#030202",
        cbtcbg: "#1C1A1A",
        dashbackground: "#372724",
        dashborder: "#2A2A2A",
        notificationvalue: "#2D9600",
        viewdetails: "#353232",
        qrborder: "#9D9D9D",
        collectibleborder: "#6F6F6F",
        loginwallet: "#30312C",
        covertbtcborder: "#4E4E4E",
        phrase:"#FFF2F0",
        existaccount:"rgb(255 242 240 / 30%)",
        import:"rgb(250 250 250 / 30%)",
        createwallet:"rgb(250 250 250 / 70%)",
        clipboard:"rgb(255 255 255 / 5%)",
        currencyLine:"rgb(255 242 240 / 70%)",
        backupvaluecolor: "rgb(250 250 250 / 16%)",
        buttonbackg: "rgb(16 16 16 / 50%)",
        recoveryphase: "rgb(255 255 255/ 20%)",
        importkeys: "rgb(250 250 250 / 94%)",
        recoverykeysbg:"rgb(232 112 92 / 10%)",
        recoverykeysborder:"rgb(0 0 0 / 20%)",
        phrasebutton:"rgb(250 250 250 / 55%)",
        confirmbackup:"rgb(2 245 122 / 50%) "
      },
      backgroundImage: {
        checkboximage: "url('/public/assets/images/checkbox-icon.png')",
        checkedboximage: "url('/public/assets/images/checked-image.png')",
        radiobtnimage: "url('/public/assets/images/radio-uncheck.svg')",
        radiobtncheckedimage: "url('/public/assets/images/radio-checked.svg')",
        linearOne:"linear-gradient(0deg, #030202 0%, rgba(3, 2, 2, 0) 100%)",
        linearTwo:"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(232, 112, 92, 0.1), rgba(232, 112, 92, 0.1))"
      },
    },
  },
  plugins: [

  ],
}