import { Button } from "flowbite-react/lib/esm/components/Button";
import { useTranslation } from "react-i18next";
import { ImagesCollection } from "../../Assets/Img/ImagesCollection";
import { onSiteBtnClick } from "../../Utils/CommonFunctions.utils";

interface IPortfolioPageProps {
}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props): JSX.Element => {

    const { t } = useTranslation();

    const proyectItems = [
        {
            key: 0,
            name: 'React Chat App',
            description: 'proyectodesc',
            img: ImagesCollection.ReactChatApp,
            buttons: [
                {
                    pbKey: 'pbKey1',
                    text: 'Github',
                    route: 'github.com/JeremyJS20/ReactChatApp2',
                    icon: 'fa-brands fa-github'
                },
                {
                    pbKey: 'pbKey2',
                    text: 'Website',
                    route: 'react-chat-app-6vjz.onrender.com',
                    icon: 'fa-solid fa-globe'
                }
            ],
            tags: [
                {
                    tagKey: 'tagKey1',
                    text: 'ReactTS'
                },
                {
                    tagKey: 'tagKey2',
                    text: 'TailwindCSS'
                },
                {
                    tagKey: 'tagKey3',
                    text: 'NodeJS'
                },
                {
                    tagKey: 'tagKey4',
                    text: 'MongoDB'
                },
                {
                    tagKey: 'tagKey5',
                    text: 'Socket.io'
                }
            ]
        },
        {
            key: 1,
            name: 'Aliens VS Balloons',
            description: 'proyectodesc2',
            img: ImagesCollection.AliensVSBalloons,
            buttons: [
                {
                    pbKey: 'pbKey1',
                    text: 'Github',
                    route: 'github.com/JeremyJS20/ProyectoAlienVSBalloons',
                    icon: 'fa-brands fa-github'
                },
                {
                    pbKey: 'pbKey2',
                    text: 'Website',
                    route: 'aliens-vs-balloons.onrender.com',
                    icon: 'fa-solid fa-globe'
                }
            ],
            tags: [
                {
                    tagKey: 'tagKey1',
                    text: 'HTML'
                },
                {
                    tagKey: 'tagKey2',
                    text: 'JavaScript'
                },
                {
                    tagKey: 'tagKey3',
                    text: 'Phaser 3'
                },
            ]
        },
        {
            key: 1,
            name: 'AnyCommerce',
            description: 'proyectodesc3',
            img: ImagesCollection.AnyCommerce,
            buttons: [
                {
                    pbKey: 'pbKey1',
                    text: 'Github',
                    route: 'github.com/JeremyJS20/AnyCommerce',
                    icon: 'fa-brands fa-github'
                },
                {
                    pbKey: 'pbKey2',
                    text: 'Website',
                    route: 'anycommerce.onrender.com/',
                    icon: 'fa-solid fa-globe'
                }
            ],
            tags: [
                {
                    tagKey: 'tagKey1',
                    text: 'ReactTS'
                },
                {
                    tagKey: 'tagKey2',
                    text: 'TailwindCSS'
                },
                {
                    tagKey: 'tagKey3',
                    text: 'In Building'
                },
            ]
        }
    ];

    return (
        <section className="bg-white dark:bg-gray-700" id="portfolio">
            <div className="flex flex-col items-center py-36 desktopW:py-[250px] laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-2xl  mb-1 desktop:text-4xl tablet:text-3xl">{t('portafolio')}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500  mb-5 laptop:text-base">{t('mis-proyectos')}</span>
                </div>
                <div className="grid grid-cols-1 gap-10 w-[90%] desktopW:w-[80%] laptop:w-[90%] tablet:w-[60%] laptop:grid-cols-2">
                    {
                        proyectItems.map(pi => (
                            <div key={pi.key} className="relative rounded-[15px] m-1 group shadow-lg">
                                <img src={pi.img} alt="alt" className=" z-0 rounded-[15px] w-full scale-100 group-hover:scale-105 transition duration-300" />

        
                                <div className="absolute bottom-0 left-0  z-20 pt-20 desktopW:pt-44 laptop:pt-28 tablet:pt-36 px-7 w-full bg-gradient-to-t from-gray-800/90 h-[100%] rounded-b-[15px] transition-all scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 duration-300" >
                                    <div className="text-xl text-gray-100 mb-2 desktop:text-2xl">{pi.name}</div>
                                    <div className="text-xs text-gray-300 mb-3 desktop:text-sm">{t(pi.description)}</div>

                                    <div className="flex flex-wrap">
                                        {
                                            pi.tags.map(tag => (
                                                <div key={tag.tagKey} className=" bg-gray-800/80 w-fit px-3 py-1 mx-1 text-gray-100 text-[9px] mb-2 desktopW:mb-0 laptop:text-xs rounded-xl">
                                                    {tag.text}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="absolute flex top-3 right-3 z-20 transition-all scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 duration-300">
                                    {
                                        pi.buttons.map(btn => (
                                            <Button
                                                key={btn.pbKey}
                                                size={'xs'}
                                                className={' backdrop-blur-sm mr-1 !rounded-full scale-100 z-20 !p-0 !bg-gray-800/80 border-0 !text-gray-100 focus:!ring-5 focus:!ring-transparent'}
                                                onClick={() => onSiteBtnClick(btn.route)}
                                            >
                                                <i className={`${btn.icon} text-base tablet:text-xl`}></i>
                                            </Button>
                                        ))
                                    }
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default PortfolioPage;
