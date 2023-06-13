import { twMerge } from "tailwind-merge";

export const headingStyle =
  "sm:text-center text-4xl/snug sm:text-5xl/snug md:text-6xl/snug font-bold tracking-tight text-white mb-4";

export const subHeadingStyle = "text-white text-xl md:text-2xl lg:text-3xl mb-8 mx-auto";

export const secondaryHeaderStyles =
  "sm:text-center text-2xl/snug sm:text-3xl/snug md:text-4xl/snug font-bold tracking-tight text-white";

export const btnStyles = "py-4 px-8 text-sm lg:text-lg lg:mr-4 rounded-md mb-2 font-bold";

export const primaryBtnStyles = twMerge("bg-slate-900 text-white", btnStyles);
export const secondaryBtnStyles = twMerge("bg-blue-500 text-white", btnStyles);
