import { Button } from "flowbite-react";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { changeLanguage, LanguageContext } from "../Context/LanguageContext";
import { ThemeContext, themeVerifier } from "../Context/ThemeContext";

const Navbar = (): JSX.Element => {

    const { locale } = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const location = useLocation();

    const navItems = [
        {
            key: 0,
            text: 'inicio',
            route: '/Inicio'
        },
        {
            key: 1,
            text: 'acerca-de',
            route: '/SobreMi'
        },
        {
            key: 2,
            text: 'resumen',
            route: '/Resumen'
        },
        {
            key: 3,
            text: 'portafolio',
            route: '/Portafolio'
        },
        {
            key: 4,
            text: 'contacto',
            route: '/Contacto'
        }
    ];

    const localesDropdownItems = [
        {
            key: 0,
            text: 'espanol',
            value: 'es',
        },
        {
            key: 1,
            text: 'ingles',
            value: 'en',
        }
    ];

    const onLocaleItemClick = useCallback((loc: string) => changeLanguage(locale, loc), [locale]);

    const onNavItemClick = useCallback((route: string) => navigate(route), []);

    const onThemeBtnClick = useCallback(() => {
        localStorage.setItem('theme', themeVerifier(theme));
        setTheme(themeVerifier(theme));
    }, [theme]);

    const onMobileNavBtnClicked = useCallback(() => {
        (mobileNavRef.current as HTMLDivElement).classList.toggle('!w-0');
    }, []);

    const onMobileNavItemClick = useCallback((route: string) => {        
        (mobileNavRef.current as HTMLDivElement).classList.add('!w-0');
        navigate(route);
    }, []);

    const mobileNavRef = useRef<any>();

    return (
        <nav className="py-5 h-[10vh]">
            <div className="flex flex-wrap justify-between items-center">
                {/* Nav logo */}
                <a className="flex font-bold tracking-tighter text-lg cursor-pointer tablet:text-2xl" onClick={() => onNavItemClick('/Inicio')}>
                    <span>Jeremy <strong className="text-green-600">Solano</strong></span>
                </a>

                {/* Nav items */}
                <div className="hidden laptop:flex ">
                    {
                        navItems.map(item => (
                            <a key={item.key} className={`mx-2 text-base2 text-gray-800 cursor-pointer px-2 py-3 hover:border-b-2 hover: border-b-green-600 dark:text-gray-100
                            ${location.pathname.includes(item.route) ? '!text-green-600 border-b-2 border-b-green-600 font-bold' : ''}
                            `}
                                onClick={() => onNavItemClick(item.route)}
                            >
                                {t(item.text)}
                            </a>
                        ))
                    }
                </div>
                <div className="flex items-center" >
                    <div className="items-center flex">
                        {/* Theme buttom switcher*/}
                        <Button
                            size={'xs'}
                            className={'!bg-gray-100 border-0 !text-gray-600 hover:!bg-gray-200 focus:!ring-5 focus:!ring-transparent dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-gray-700 '}
                            onClick={onThemeBtnClick}
                        >
                            <i className={`fa-regular ${themeVerifier(theme) == 'dark' ? 'fa-moon' : 'fa-sun'} text-base`}></i>
                        </Button>

                        {/* Language dropdown selector*/}
                        <Dropdown arrowIcon={false} placement="bottom-end" className="w-[75px] bg-gray-100" inline={true} label={
                            <div className="tablet:text-lg bg-gray-100 text-gray-600 px-[9px] py-[6px] rounded-lg hover:!bg-gray-200 dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-gray-700 ">
                                {locale?.toUpperCase()}
                            </div>}>
                            {localesDropdownItems.map(loc => (
                                <Dropdown.Item key={loc.key} onClick={() => onLocaleItemClick(loc.value)}>{`${loc.value.toUpperCase()} - ${t(loc.text)}`}</Dropdown.Item>
                            ))}
                        </Dropdown>
                        <button className="hidden">
                            <i className="fa-regular fa-moon"></i>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>

                    {/* Nav mobile button trigger*/}
                    <Button
                        size={'xs'}
                        className={`laptop:hidden !bg-gray-100 border-0 !text-gray-600 hover:!bg-gray-200 focus:!ring-5 focus:!ring-transparent dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-gray-700`}
                        onClick={onMobileNavBtnClicked}
                    >
                        <i className={`fa-solid fa-bars text-base mt-[2px] tablet:text-xl`}></i>
                    </Button>

                    {/* Nav mobile */}
                    <div ref={mobileNavRef} className="!w-0 absolute transition-width ease-in-out duration-500 shadow-xl border-l-1 bg-white text-gray-100 top-[9vh] right-0 z-[5] py-3 h-[90vh] mobile:w-[65vw] laptop:w-[30vw] laptop:hidden tablet:w-[40vw] mobile:top-[10vh] mobile:h-[90vh] dark:bg-gray-700 ">
                        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden">
                            {
                                navItems.map(item => (
                                    <a key={item.key} className={`mx-2 text-base2 text-gray-800 cursor-pointer px-2 py-3 hover:border-l-2 hover: border-l-green-600 dark:text-gray-100
                            ${location.pathname.includes(item.route) ? '!text-green-600 border-l-2 border-l-green-600 font-bold' : ''}
                            `}
                                        onClick={() => onMobileNavItemClick(item.route)}
                                    >
                                        {t(item.text)}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;