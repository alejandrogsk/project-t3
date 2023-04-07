import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "next-themes"
import DarkTogglerBtn from "~/components/DarkTogglerBtn";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps}  />
      <DarkTogglerBtn />
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
