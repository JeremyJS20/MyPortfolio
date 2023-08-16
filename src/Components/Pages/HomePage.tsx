import { Button, Tooltip } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { onSiteBtnClick } from "../../Utils/CommonFunctions.utils";
import { Link } from "react-scroll";

const Me2x2 = require("../../Assets/Img/Me2x2.jpg");

interface IHomePageProps { }

const HomePage: React.FunctionComponent<IHomePageProps> = (
    props
): JSX.Element => {
    const { t } = useTranslation();

    const soocialNetworks = [
        {
            key: "snkey0",
            text: "Github",
            route: "github.com/JeremyJS20",
            icon: "fa-brands fa-github",
        },
        {
            key: "snkey1",
            text: "LinkedIn",
            route: "www.linkedin.com/in/jerermy-michel-solano-frías-10ba9b218",
            icon: "fa-brands fa-linkedin-in",
        },
        {
            key: "snkey2",
            text: "Instagram",
            route: "www.instagram.com/jeremyjs20/",
            icon: "fa-brands fa-instagram",
        },
        {
            key: "snkey3",
            text: "Twitter",
            route: "twitter.com/JeremyJS20",
            icon: "fa-brands fa-twitter",
        },
    ];

    return (
        <section className=" " id="home">
            <div className="flex flex-col-reverse justify-between items-center py-32 desktopW:py-68 laptop:py-52 tablet:py-36 laptop:flex-row w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-row justify-center mt-5 laptop:mt-0 laptop:justify-end laptop:flex-col">
                    {soocialNetworks.map((sn) => (
                        <Tooltip content={sn.text} placement="right">
                            <Button
                                key={sn.key}
                                size={"xs"}
                                className={
                                    "!rounded-full !p-0 m-2 !bg-transparent border-0 !text-green-700 scale-100 hover:scale-125 transition hover:!bg-transparent focus:!ring-5 focus:!ring-transparent dark:!bg-transparent hover:!bg-gray-200  dark:hover:!bg-gray-700 "
                                }
                                onClick={() => onSiteBtnClick(sn.route)}
                            >
                                <i className={`${sn.icon} text-3xl `}></i>
                            </Button>
                        </Tooltip>
                    ))}
                </div>
                <div className="flex flex-col-reverse w-[100%] items-center gap-0 laptop:gap-10 laptop:w-[80%] laptop:flex-row">
                    <div className="flex flex-col gap-7 items-center w-[80%] laptop:items-start">
                        <div className="text-2xl desktop:text-5xl laptop:text-4xl tablet:text-3xl">
                            <p className="text-base laptop:text-2xl">{t("bienvenida")}</p>
                            <p className=" text-3xl tablet:text-4xl">{t("bienvenida2")} Jeremy</p>
                            <p className=" text-3xl tablet:text-4xl text-green-700">{t("ocupacion")}</p>

                        </div>
                        {/* <span className="text-base text-gray-500 dark:text-gray-400  mb-7 laptop:text-2xl tablet:text-xl">
                        </span> */}

                        <div>
                            <p className=" text-base text-center text-gray-500 tablet:text-base laptop:text-start">
                                {t("presentacion")}
                            </p>
                        </div>

                        <Link
                            to={"contact"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}
                            className=" bg-green-700 text-gray-100 rounded-xl ! cursor-pointer text-center p-6 hover:bg-green-600 focus:!ring-transparent w-[65%] desktopW:w-[40%] laptop:w-[55%] tablet:w-[35%]"
                        >
                            <i className="fa-solid fa-paper-plane pr-2"></i>
                            {t("ponte-en-contacto2")}
                        </Link>
                    </div>
                    <div className="w-[60%] mb-10 laptop:w-[75%] laptop:mb-0 tablet:w-[45%]">
                        <img src={Me2x2} alt='alt' className="h-auto rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
