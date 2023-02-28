import { Timeline } from "flowbite-react/lib/esm/components/Timeline";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AboutMeSVG } from "../../Assets/Img/ImagesComponentCollection";
import { LanguageContext } from "../../Context/LanguageContext";

interface IAboutMePageProps {
}


const LabolExperienceTimeline = ({ ...props }): JSX.Element => {

    const experienceTimeLineItems = [
        {
            key: 0,
            beginnigDate: new Date('02/16/2022'),
            endDate: undefined,
            title: 'explab1',
            enterprise: 'Camsoft SRL',
            description: 'explabdesc1'
        }
    ]

    return (
        <div className="flex flex-col my-0 w-[100%]  ">
            <span className="font-bold text-2xl">{props.t('experiencia')}</span>
            <Timeline className="m-5">
                {
                    experienceTimeLineItems.map((exp) => (
                        <Timeline.Item key={exp.key}>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Title>
                                    {props.t(exp.title)}
                                </Timeline.Title>
                                <Timeline.Time>
                                    <span className="text-green-600">
                                        {`${exp.beginnigDate.toLocaleDateString((props.locale === 'en' ? 'en-US' : 'es-MX'), { month: 'long', year: 'numeric' })} 
                                    - ${exp.endDate === undefined ? props.t('actualidad') : new Date(exp.endDate).toLocaleDateString((props.locale === 'en' ? 'en-US' : 'es-MX'), { month: 'long', year: 'numeric' })}`}
                                    </span>
                                    <span> | </span>
                                    <span >{props.t(exp.enterprise)}</span>
                                </Timeline.Time>
                                <Timeline.Body className="text-justify mt-3 !text-gray-800 dark:!text-gray-100">
                                    {props.t(exp.description)}
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    );
}

const FormationTimeline = ({ ...props }): JSX.Element => {

    const formationTimeLineItems = [
        {
            key: 0,
            beginnigDate: new Date('08/01/2018'),
            endDate: new Date('08/01/2022'),
            title: 'edutitle1',
            place: 'edulugar1',
            description: 'edudesc1'
        }
    ]

    return (
        <div className="flex flex-col my-0 w-[100%] ">
            <span className="font-bold text-2xl">{props.t('educacion')}</span>
            <Timeline className="m-5">
                {
                    formationTimeLineItems.map((edu) => (
                        <Timeline.Item key={edu.key}>
                            <Timeline.Point className=" first:m-5" />
                            <Timeline.Content>
                                <Timeline.Title>
                                    {props.t(edu.title)}
                                </Timeline.Title>
                                <Timeline.Time>
                                    <span className="text-green-600">
                                        {`${edu.beginnigDate.toLocaleDateString((props.locale === 'en' ? 'en-US' : 'es-MX'), { month: 'long', year: 'numeric' })} 
                                    - ${edu.endDate === undefined ? props.t('actualidad') : new Date(edu.endDate).toLocaleDateString((props.locale === 'en' ? 'en-US' : 'es-MX'), { month: 'long', year: 'numeric' })}`}
                                    </span>
                                    <span> | </span>
                                    <span >{props.t(edu.place)}</span>
                                </Timeline.Time>
                                <Timeline.Body className="text-justify mt-3 !text-gray-800 dark:!text-gray-100">
                                    {props.t(edu.description)}
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    );
}

const Skills = ({ ...props }): JSX.Element => {

    const skillsItems = [
        {
            key: 0,
            progress: 85,
            label: 'HTML, CSS, JSX'
        },
        {
            key: 1,
            progress: 85,
            label: 'Javascript'
        },
        {
            key: 2,
            progress: 70,
            label: 'Typescript'
        },
        {
            key: 3,
            progress: 75,
            label: 'NodeJS'
        },
        {
            key: 4,
            progress: 60,
            label: 'SQL'
        },
        {
            key: 5,
            progress: 50,
            label: 'C# .Net'
        }
    ]

    return (
        <div className="flex items-center justify-between my-14 flex-col desktopW:my-20 tablet:flex-row-reverse tablet:items-center">
            <div className="flex flex-col w-[90%] tablet:w-[45%] ">
                <span className="font-bold text-2xl">{props.t('habilidades')}</span>
                <span className="text-justify my-4">{props.t('habilidadesdesc')}</span>
            </div>
            <div className="flex flex-col w-[90%] tablet:w-[45%]">
                {skillsItems.map(skill => <div className="my-3" key={skill.key}>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium ">{skill.label}</span>
                        <span className="text-base font-medium ">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{
                            width: `${skill.progress}%`
                        }}></div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

const AboutMe = ({ ...props }): JSX.Element => {

    const personalDataItems = [
        {
            key: 0,
            label: 'edad',
            value: 'edadtext'
        },
        {
            key: 1,
            label: 'nacionalidad',
            value: 'dominicano'
        },
        {
            key: 2,
            label: 'residencia',
            value: 'repdominicana'
        },
        {
            key: 3,
            label: 'correo',
            value: 'jsjeremy4@gmail.com'
        },
        {
            key: 4,
            label: 'telefono',
            value: '+1(829)-264-4164'
        },
    ];

    return (
        <div className="flex items-center justify-between my-14 shadow-xl rounded-lg p-8 dark:bg-gray-700 desktopW:my-20 flex-col tablet:flex-row tablet:items-center">
            <div className="flex flex-col w-[90%] tablet:w-[45%]  ">
                <span className="font-bold text-2xl">{props.t('sobremi')}</span>
                <span className="text-justify my-4">{props.t('presentacion')}</span>
            </div>
            <div className="flex flex-col w-[90%] tablet:w-[45%]">
                {personalDataItems.map(per => <div key={per.key} className="my-2 flex justify-between">
                    <span className="font-bold">{props.t(per.label)}:</span>
                    <span className="">{props.t(per.value)}</span>
                </div>)}
            </div>
        </div>
    );
}

const AboutMePage: React.FunctionComponent<IAboutMePageProps> = (props): JSX.Element => {

    const { t } = useTranslation();
    const { locale } = useContext(LanguageContext);

    return (
        <div className='h-[100%] pt-[10%] flex flex-col tablet:pt-0'>
            <div className="flex flex-col-reverse items-center justify-around my-[130px] desktopW:my-[250px] tablet:my-[200px] tablet:flex-row">
                <span className="font-bold text-2xl mt-10 desktopW:text-3xl tablet:mt-0">{t('sobremi')}</span>
                <AboutMeSVG />
            </div>
            <AboutMe t={t} />
            <Skills t={t} />
            <div className="flex flex-col shadow-xl rounded-lg my-14 p-8 dark:bg-gray-700 desktopW:flex-row">
                <LabolExperienceTimeline t={t} locale={locale} />
                <FormationTimeline t={t} locale={locale} />
            </div>
        </div>

    );
};

export default AboutMePage;