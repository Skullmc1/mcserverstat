import localFont from "next/font/local";

export const firaCode = localFont({
  src: [
    {
      path: "../public/fonts/FiraCode-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FiraCode-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FiraCode-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FiraCode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fira-code",
});
