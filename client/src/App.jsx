import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import AppRouter from "@/routes/AppRouter";

import ScrollToTopButton from "@/components/shared/ScrollToTopButton";


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster richColors position="bottom-right" duration={2000} />
      <ScrollToTopButton />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;