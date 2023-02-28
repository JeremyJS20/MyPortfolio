import { Suspense } from "react";
import "./App.css";
import SinglePageContainer from "./Components/Container";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import ThemeContextProvider from "./Context/ThemeContext";
import LanguageContextProvider from "./Context/LanguageContext";
import HomePage from "./Components/Pages/HomePage";
import AboutMePage from "./Components/Pages/AboutMePage";
import PortfolioPage from "./Components/Pages/PortfolioPage";
import ContactPage from "./Components/Pages/ContactPage";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <LanguageContextProvider>
          <ThemeContextProvider>
            <Routes>
              <Route path="/" element={<Navigate replace to={'/Inicio'} />} />
              <Route path="*" element={<>Not Found</>} />

              <Route path="/*" element={
                <SinglePageContainer>
                  <Outlet />
                </SinglePageContainer>
              }>
                <Route index path="Inicio" element={<HomePage />} />
                <Route path="SobreMi" element={<AboutMePage />} />
                <Route path="Portafolio" element={<PortfolioPage />} />
                <Route path="Contacto" element={<ContactPage/>} />
              </Route>
            </Routes>
          </ThemeContextProvider>
        </LanguageContextProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
