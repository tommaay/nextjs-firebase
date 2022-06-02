import Navbar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../lib/context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserProvider>
  );
}

export default MyApp;
