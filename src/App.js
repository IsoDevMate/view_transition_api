import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./Home";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import About from "./About";
import Download from "./Download";

export default function App() {
  let isViewTransition =
    "Opss, Your browser doesn't support View Transitions API";
  if (document.startViewTransition) {
    isViewTransition = "Yess, Your browser support View Transitions API";
  }
  return (
    <>
      <Header />
      <Routes>
        {/* Routes */}
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="download" element={<Download />} />

        {/* 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <p style={{ marginBottom: 50 }}>{isViewTransition}</p>
      <footer
        style={{
          padding: 5,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#cccc",
          margin: "0, auto",
          position: "fixed",
          bottom: 0,
          left: 0
        }}
      >
        <a href="https://javascript.plainenglish.io/page-transitions-in-reactjs-with-react-router-v6-and-the-built-in-view-transitions-api-no-73ab52c6fd7b">
          Complete tutorial on Medium
        </a>
      </footer>
    </>
  );
}
