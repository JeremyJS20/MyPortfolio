import { Button, Timeline } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { onSiteBtnClick } from "../../Utils/CommonFunctions.utils";
import { Link, animateScroll as scroll } from "react-scroll";
import { useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

const Me2x2 = require('../../Assets/Img/Me2x2.jpg');

interface IEducationAndExperiencePageProps {
}

const EducationAndExperiencePage: React.FunctionComponent<IEducationAndExperiencePageProps> = (props): JSX.Element => {

    const { t } = useTranslation();
    const { locale } = useContext(LanguageContext);

    const [qualifications, setQualifications] = useState<any[]>([
        {
            key: 'qualificationkey0',
            text: 'educacion',
            icon: 'fa-solid fa-school',
            selected: true,
            items: [
                {
                    key: 'qualificationitemkey0',
                    beginnigDate: new Date('08/01/2018'),
                    endDate: new Date('08/01/2022'),
                    title: 'edutitle1',
                    place: 'edulugar1',
                    description: 'edudesc1'
                }
            ]
        },
        {
            key: 'qualificationkey1',
            text: 'experiencia',
            icon: 'fa-solid fa-briefcase',
            selected: false,
            items: [
                {
                    key: 'qualificationitemkey1',
                    beginnigDate: new Date('02/16/2022'),
                    endDate: undefined,
                    title: 'explab1',
                    place: 'Camsoft SRL',
                    description: 'explabdesc1'
                }
            ]
        }
    ]);

    return (
        <section className="hidden dark:bg-gray-700" id="skills">
            <div className="flex flex-col items-center py-36 desktopW:py-72 laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-2xl font-bold mb-1 desktop:text-4xl tablet:text-3xl">{t('qualifications')}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-bold mb-5 laptop:text-base">{t('mi-viaje')}</span>
                </div>
                <div className="flex justify-between mb-10 w-[90%] laptop:w-[40%] tablet:w-[50%]">
                    {qualifications.map(i => (
                        <Button
                            size={'xl'}
                            key={i.key}
                            className={`!bg-transparent !text-gray-800 dark:!text-gray-100 !rounded-xl !font-bold hover:!bg-transparent focus:!ring-transparent ${i.selected ? '!text-green-700 dark:!text-green-700' : ''}`}
                            onClick={() => {
                                const temp = qualifications.slice();
                                temp.forEach(qualification => {
                                    if (qualification.key == i.key) qualification.selected = true;
                                    else qualification.selected = false;
                                });

                                setQualifications(temp);
                            }}
                        >
                            <i className={`${i.icon} text-base mr-3 tablet:text-xl`}></i> <span className=" text-base tablet:text-xl">{t(i.text)}</span>
                        </Button>
                    ))}
                </div>
                <ol className="relative border-l border-green-700 dark:border-green-700 w-[90%] tablet:w-[70%]">
                    {qualifications.find(qualifications => qualifications.selected)?.items.map((i: any) => (
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-green-700 rounded-full mt-[7px] -left-1.5 border border-gray-800 dark:bg-green-700"></div>
                            <time className="mb-1 text-sm font-bold leading-none text-green-700">
                                {`${i.beginnigDate.toLocaleDateString((locale === 'en' ? 'en-US' : 'es-MX'), { month: 'long', year: 'numeric' })} 
                                - ${i.endDate === undefined ? t('actualidad') : new Date(i.endDate).toLocaleDateString((locale === 'en' ? 'en-US' : 'es-MX'), { month: 'long', year: 'numeric' })}`}
                            </time>
                            <p className="my-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
                                {t(i.place)}
                            </p>
                            <h3 className="text-base font-bold mb-2 text-gray-800 dark:text-gray-100 tablet:text-lg">{t(i.title)}</h3>
                            <p className="text-sm font-normal tablet:text-base">{t(i.description)}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default EducationAndExperiencePage;
