import { Suspense } from "react";
import "./App.css";
import SinglePageContainer from "./Components/Container";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import ThemeContextProvider from "./Context/ThemeContext";
import LanguageContextProvider from "./Context/LanguageContext";
import HomePage from "./Components/Pages/HomePage";
import AboutMePage from "./Components/Pages/AboutMePage";

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
                <Route path="Resumen" element={<>Resume</>} />
                <Route path="Portafolio" element={<>Portfolio</>} />
                <Route path="Contacto" element={<>Contact</>} />
              </Route>
            </Routes>
          </ThemeContextProvider>
        </LanguageContextProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
