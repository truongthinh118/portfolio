import { Inter, Jomhuria, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: ["400"],
});

export const font = {
  inter,
  poppins,
  jomhuria,
};
