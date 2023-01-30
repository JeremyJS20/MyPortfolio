import { Suspense } from "react";
import "./App.css";
import SinglePageContainer from "./Components/Container";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import ThemeContextProvider from "./Context/ThemeContext";
import LanguageContextProvider from "./Context/LanguageContext";
import HomePage from "./Components/Pages/HomPage";

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
                  <Navbar />
                  <Outlet />
                </SinglePageContainer>
              }>
                <Route index path="Inicio" element={<HomePage />} />
                <Route path="SobreMi" element={<>About Me</>} />
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
