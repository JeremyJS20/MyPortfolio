import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { onSiteBtnClick } from "../../Utils/CommonFunctions.utils";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const Me2x2 = require('../../Assets/Img/Me2x2.jpg');

interface ISkillsPageProps {
}

const SkillsPage: React.FunctionComponent<ISkillsPageProps> = (props): JSX.Element => {

    const { t } = useTranslation();

    const [skills, setSkills] = useState<any[]>([
        {
            key: 'skillskey0',
            text: 'front-end',
            icon: 'fa-solid fa-code',
            selected: true,
            items: [
                {
                    key: 'subskillkey0',
                    progress: 80,
                    label: 'HTML'
                },
                {
                    key: 'subskillkey1',
                    progress: 80,
                    label: 'CSS'
                },
                {
                    key: 'subskillkey2',
                    progress: 75,
                    label: 'Javascript'
                },
                {
                    key: 'subskillkey3',
                    progress: 75,
                    label: 'Typescript'
                },
                {
                    key: 'subskillkey4',
                    progress: 85,
                    label: 'React'
                }
            ]
        },
        {
            key: 'skillskey1',
            text: 'back-end',
            icon: 'fa-solid fa-server',
            selected: false,
            items: [
                {
                    key: 'subskillkey0',
                    progress: 70,
                    label: 'NodeJS'
                },
                {
                    key: 'subskillkey1',
                    progress: 40,
                    label: 'C# .Net'
                },
                {
                    key: 'subskillkey2',
                    progress: 50,
                    label: 'SQL'
                },
                {
                    key: 'subskillkey3',
                    progress: 60,
                    label: 'Git'
                }
            ]
        }
    ]);

    return (
        <section className="" id="skills">
            <div className="flex flex-col items-center py-40 desktopW:py-72 laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-2xl font-bold mb-1 desktop:text-4xl tablet:text-3xl">{t('habilidades')}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-bold mb-5 laptop:text-base">{t('mi-nivel')}</span>
                </div>
                <div className="flex justify-between mb-10 w-[80%] laptop:w-[40%] tablet:w-[50%]">
                    {skills.map(i => (
                        <Button
                            size={'xl'}
                            key={i.key}
                            className={`!bg-transparent !text-gray-800 dark:!text-gray-100 !rounded-xl !font-bold hover:!bg-transparent focus:!ring-transparent ${i.selected ? '!text-green-700 dark:!text-green-700' : ''}`}
                            onClick={() => {
                                const temp = skills.slice();
                                temp.forEach(skill => {
                                    if (skill.key == i.key) skill.selected = true;
                                    else skill.selected = false;
                                });

                                setSkills(temp);
                            }}
                        >
                            <i className={`${i.icon} text-base mr-3 tablet:text-xl`}></i> <span className=" text-base tablet:text-xl">{t(i.text)}</span>
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col w-[90%] tablet:w-[70%]">
                    {skills.find(skill => skill.selected)?.items.map((i: any) => (
                        <div className="my-3" key={i.key}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium tablet:text-base">{i.label}</span>
                                <span className="text-sm font-medium tablet:text-base">{i.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{
                                    width: `${i.progress}%`
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
