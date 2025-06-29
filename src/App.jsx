import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <BrowserRouter>
        {/* Wrapped in routes for all segues */}
        <Routes>
          <Route index element={<Home />} />
          {/* React's version of a 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
