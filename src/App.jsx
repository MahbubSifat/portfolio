import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

// Page বদলালে (hash ছাড়া) একদম উপরে নিয়ে যায়।
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-black text-white selection:bg-cyan-400 selection:text-black">
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
