import { Button } from "flowbite-react/lib/esm/components/Button";
import { t } from "i18next";
import { PropsWithChildren, useCallback, useContext, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext, themeVerifier } from "../Context/ThemeContext";
import Navbar from "./Navbar";
import HomePage from "./Pages/HomePage";
import AboutMePage from "./Pages/AboutMePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import SkillsPage from "./Pages/SkillsPage";
import EducationAndExperiencePage from "./Pages/EducationAndExperiencePage";
import FooterPage from "./FooterPage";


function ThemeFloatingBtn() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onThemeBtnClick = useCallback(() => {
    localStorage.setItem('theme', themeVerifier(theme));
    setTheme(themeVerifier(theme));
  }, [theme]);

  return (
    <div className="fixed z-10 bottom-0 right-0 m-5 visible tablet:hidden">
      {/* Theme buttom switcher*/}
      <div className="shadow-sm rounded-xl bg-gray-200 dark:bg-gray-700">
        <Button
          size={'sm'}
          className={'!bg-transparent border-0 !text-gray-700 hover:!bg-transparent focus:!ring-5 focus:!ring-transparent dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-transparent'}
          onClick={onThemeBtnClick}
        >
          <i className={`fa-regular ${themeVerifier(theme) == 'dark' ? 'fa-moon' : 'fa-sun'} text-xl`}></i>
        </Button>
      </div>
    </div>
  );
};

const SinglePageContainer = ({ ...props }: PropsWithChildren) => {

  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LanguageContext);

  const location = useLocation();

  const params = useParams();


  useEffect(() => {
    document.title = `${t('portafolio')} - Jeremy Solano`;
  }, [locale, location]);

  useEffect(() => {
    if (theme === 'undefined') return;

    document.body.classList.remove(themeVerifier(theme));
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.add('scrollbar');
  }, []);

  const pages = ['Navbar', 'HomePage', 'AboutMePage']

  return (
    <div className={`App `}>
      <div className={`bg-gray-100 text-gray-900 font-RB tracking-tight dark:text-gray-100 dark:bg-gray-800`}>

        <Navbar />
        <HomePage />
        <AboutMePage />
        <SkillsPage />
        <EducationAndExperiencePage />
        <PortfolioPage />
        <ContactPage />
        <FooterPage/>
        <ThemeFloatingBtn />
      </div>
    </div>
  );
}

export default SinglePageContainer;