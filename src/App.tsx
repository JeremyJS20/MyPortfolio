import { Suspense } from "react";
import "./App.css";
import SinglePageContainer from "./Components/Container";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import ThemeContextProvider from "./Context/ThemeContext";
import LanguageContextProvider from "./Context/LanguageContext";

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
              <Route path="*" element={<>Not Found</>} />

              <Route path="/" element={
                <SinglePageContainer />
              }>
              </Route>
            </Routes>
          </ThemeContextProvider>
        </LanguageContextProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
