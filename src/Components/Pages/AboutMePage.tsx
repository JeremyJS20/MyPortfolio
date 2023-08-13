import { Timeline } from "flowbite-react/lib/esm/components/Timeline";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AboutMeSVG } from "../../Assets/Img/ImagesComponentCollection";
import { LanguageContext } from "../../Context/LanguageContext";
import { Button } from "flowbite-react";

interface IAboutMePageProps {
}

const AboutMePage: React.FunctionComponent<IAboutMePageProps> = (props): JSX.Element => {

    const { t } = useTranslation();
    const { locale } = useContext(LanguageContext);

    return (
        <section className="bg-white dark:bg-gray-700" id="aboutme">
            <div className="flex flex-col items-center py-36 desktopW:py-72 laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-2xl font-bold mb-1 desktop:text-4xl tablet:text-3xl">{t('sobremi')}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-bold mb-5 laptop:text-base">{t('mi-introduccion')}</span>
                </div>
                <div className="flex flex-col justify-between items-center w-[90%] desktop:w-[80%] laptop:flex-row">
                        <AboutMeSVG />

                    <div className="flex flex-col mt-5 w-[90%] items-center text-center laptop:w-[50%] laptop:mt-0 laptop:text-start laptop:items-start">
                        <span className=" text-sm my-7 text-gray-400 font-bold tablet:text-base laptop:mt-0">{t('presentacion2')}</span>

                        <Button
                            size={'xl'}
                            className=" !bg-green-700 text-gray-100 !py-3 !rounded-xl !font-bold hover:!bg-green-600 focus:!ring-transparent w-[70%] desktopW:w-[45%] laptop:w-[55%] tablet:w-[40%]"
                            onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = require(`../../Assets/Doc/${locale} CV - Jerermy Solano.pdf`);
                                    link.download = `${locale} CV - Jerermy Solano.pdf`;
                                    document.body.appendChild(link);
                                    link.click();
                                    link.remove();
                            }}
                        >
                            <i className="fa-solid fa-download text-xl mr-2"></i>{t('descargar-cv')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMePage;