import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary:     "#333333",

        black:       "#000000",  

        white:       "#ffffff",
        
        lightGrey:   "#f8f8f8",

        grey:        "#d6d6d6",

        darGrey:     "#666666",

        green:       "#BEDEB1",

        yellow:      "#FEE892",

        lightGreen:  "#EEEFE7",

        lightYellow: "#EFEAC9",

        lightBlue:   "#B5CAF3",

        lightRed:    "#D18889",

        borderColor: "#ECECEC"
      },

      screens:{
          sm: "640px",          // => @media (min-width: 640px) { ... }

          md: "768px",          // => @media (min-width: 768px) { ... }

          lg: "1024px",         // => @media (min-width: 1024px) { ... }

          xl: "1280px",         // => @media (min-width: 1280px) { ... }

          "2xl": "1536px"       // => @media (min-width: 1536px) { ... }
      },

      fontSize:{
            sm: "14px",            // => Font-size : 14px;

            base: "16px",          // => Font-size : 16px;

            md: "18px",            // => Font-size : 18px;

            lg: "20px",            // => Font-size : 20px;

            xl: "22px",            // => Font-size : 22px;

            "2xl": "24px",         // => Font-size : 24px;

            "3xl": "32px",         // => Font-size : 32px;

            "4xl": "42px",         // => Font-size : 42px;

            "5xl": "50px",         // => Font-size : 50px;
      },

    },
  },
  plugins: [],
};
export default config;
