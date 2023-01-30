import { t } from "i18next";
import { PropsWithChildren, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext, themeVerifier } from "../Context/ThemeContext";

const SinglePageContainer = ({ ...props }: PropsWithChildren) => {

  const { theme } = useContext (ThemeContext);
  const { locale } = useContext (LanguageContext);

  const params = useParams();

  useEffect(() => {
    document.body.classList.add('scrollbar');
  }, []);

  useEffect(() => { 
    document.title = `${t(String(params[Object.keys(params)[0]]).toLocaleLowerCase())} - Jeremy Solano`;
  }, [locale]);

  useEffect(() => {    
    if(theme === 'undefined') return; 

    document.body.classList.remove(themeVerifier(theme));
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className={`App`}>
      <div className={`bg-gray-100 text-gray-800 font-RB tracking-tight dark:bg-gray-800 dark:text-gray-100`}>
        <div className="w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default SinglePageContainer;