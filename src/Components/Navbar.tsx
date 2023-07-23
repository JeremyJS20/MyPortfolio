import { Button } from "flowbite-react";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { changeLanguage, LanguageContext } from "../Context/LanguageContext";
import { ThemeContext, themeVerifier } from "../Context/ThemeContext";
import { Link } from "react-scroll";

const Navbar = (): JSX.Element => {

    const { locale } = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const { t } = useTranslation();


    const navItems = [
        {
            key: 0,
            text: 'inicio',
            route: 'home'
        },
        {
            key: 1,
            text: 'sobremi',
            route: 'aboutme'
        },
        {
            key: 2,
            text: 'habilidades',
            route: 'skills'
        },
        {
            key: 3,
            text: 'portafolio',
            route: 'portfolio'
        },
        {
            key: 4,
            text: 'contacto',
            route: 'contact'
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

    const onThemeBtnClick = useCallback(() => {
        localStorage.setItem('theme', themeVerifier(theme));
        setTheme(themeVerifier(theme));
    }, [theme]);

    const onMobileNavBtnClicked = useCallback(() => {
        (mobileNavRef.current as HTMLDivElement).classList.toggle('!w-0');
    }, []);

    const onMobileNavItemClick = useCallback(() => {
        (mobileNavRef.current as HTMLDivElement).classList.add('!w-0');
    }, []);

    const mobileNavRef = useRef<any>();

    // useEffect(() => {
    //     console.log(scrollDirection)
    //     console.log(isScrolling);
        
    // }, [scrollDirection, isScrolling])

    return (
        <nav className="py-5 h-[10vh] z-50 bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm sticky top-0 ">
            <div className="flex flex-wrap justify-between items-center w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                {/* Nav logo */}
                {/* <a className="flex font-bold tracking-tighter text-lg cursor-pointer tablet:text-2xl" onClick={() => onNavItemClick('/Inicio')}>
                </a> */}
                <Link to={'home'}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                    className="flex font-bold tracking-tighter text-lg cursor-pointer tablet:text-2xl"
                    onAnimationEnd={(e) => {
                        console.log(e);
                        
                    }}
                >
                    <span>Jeremy <strong className="text-green-700">Solano</strong></span>
                </Link>

                {/* Nav items */}
                <div className="hidden laptop:flex ">
                    {
                        navItems.map(item => (
                            <Link
                                to={item.route}
                                key={item.key}
                                className={`mx-2 text-base font-bold tracking-wide cursor-pointer px-2 py-3 hover:text-green-700`}
                                spy={true}
                                smooth={true}
                                offset={item.route == "home" ? -100 : 0}
                                duration={700}
                                activeClass="text-green-700 "
                            >
                                {t(item.text)}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex items-center" >
                    <div className="items-center flex">
                        {/* Theme buttom switcher*/}
                        <Button
                            size={'xs'}
                            className={'!bg-gray-100 border-0 !text-gray-900 hover:!bg-gray-200 focus:!ring-5 focus:!ring-transparent dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-gray-700 hidden tablet:inline-block'}
                            onClick={onThemeBtnClick}
                        >
                            <i className={`fa-regular ${themeVerifier(theme) == 'dark' ? 'fa-moon' : 'fa-sun'} text-lg`}></i>
                        </Button>

                        {/* Language dropdown selector*/}
                        <Dropdown arrowIcon={false} placement="bottom-end" className="w-[75px] bg-gray-100" inline={true} label={
                            <div className="tablet:text-lg bg-gray-100 font-bold text-gray-900 px-[9px] py-[6px] rounded-lg hover:!bg-gray-200 dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-gray-700 ">
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
                    <div ref={mobileNavRef} className="!w-0 absolute transition-width ease-in-out duration-500 shadow-xl border-l-1 bg-white text-gray-100 top-[9vh] right-0 z-[5] py-3 mobile:w-[65vw] laptop:w-[30vw] laptop:hidden tablet:w-[40vw] mobile:top-[10vh]  dark:bg-gray-700 ">
                        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden">
                            {
                                navItems.map(item => (
                                    <Link
                                    to={item.route}
                                    key={item.key}
                                    className={`mx-2 text-sm text-gray-800 font-bold tracking-wide cursor-pointer px-2 py-3 tablet:text-base dark:text-gray-100 hover:text-green-700`}
                                    spy={true}
                                    smooth={true}
                                    offset={item.route == "home" ? -100 : 0}
                                    duration={700}
                                    activeClass="!text-green-700 "
                                    onClick={() => onMobileNavItemClick()}
                                >
                                    {t(item.text)}
                                </Link>
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