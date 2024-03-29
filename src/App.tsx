import React, { useEffect, useMemo } from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import { AppRoutes } from "./AppRoutes";
import ProjectInfoPage from "./pages/ProjectInfoPage/ProjectInfoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useTheme } from "./context/ThemeContext/useTheme";
import LeftLinks from "./components/LeftLinks/LeftLinks";
import Cursor from "./components/Cursor/Cursor";
import HoverSkew from "./components/HoverSkew/HoverSkew";
import Background from "./components/Background/Background";

function App() {
  const { pathname } = useLocation();
  const { theme: currentTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const Components = useMemo(
    () => (
      <>
        <Cursor />
        <Header />
        <LeftLinks />
        <Background />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={AppRoutes.PROJECTS} element={<ProjectsPage />} />
          <Route
            path={AppRoutes.PROJECTS + "/:projectId"}
            element={<ProjectInfoPage />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </>
    ),
    []
  );
  return <div className={`App ${currentTheme}`}>{Components}</div>;
}

export default App;
