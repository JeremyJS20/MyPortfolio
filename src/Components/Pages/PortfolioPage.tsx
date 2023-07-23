import { Button } from "flowbite-react/lib/esm/components/Button";
import { useTranslation } from "react-i18next";
import { ImagesCollection } from "../../Assets/Img/ImagesCollection";
import { MyProjectsSVG } from "../../Assets/Img/ImagesComponentCollection";
import { onSiteBtnClick } from "../../Utils/CommonFunctions.utils";

interface IPortfolioPageProps {
}


function Card() {

    const proyectItems = [
        {
            key: 0,
            name: 'React Chat App',
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
        },
        {
            key: 1,
            name: 'Aliens VS Balloons',
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
        }
    ];

    return (
        <>
            {
                proyectItems.map(pi => (
                    <div key={pi.key} className="flex flex-col items-center rounded-xl w-full h-[29%] relative m-1 overflow-hidden group shadow-lg desktopW:w-[32%] desktopW:h-[26%] laptop:w-[32%] laptop:h-[26%] tablet:w-[75%] tablet:h-[32%]">
                        <div className="absolute flex top-3 right-3 z-[1]">
                            {
                                pi.buttons.map(btn => (
                                    <Button
                                        key={btn.pbKey}
                                        size={'xs'}
                                        className={' backdrop-blur-sm mr-1 !rounded-full !p-0 !bg-gray-800/50 border-0 !text-gray-100 focus:!ring-5 focus:!ring-transparent dark:!text-gray-800 dark:!bg-gray-100/50'}
                                        onClick={() => onSiteBtnClick(btn.route)}
                                    >
                                        <i className={`${btn.icon} text-xl`}></i>
                                    </Button>
                                ))
                            }
                        </div>

                        <img src={pi.img} style={{ objectFit: 'cover' }} className="rounded-xl w-full  scale-100 hover:scale-110 transition duration-[1s]" />

                        <div className="absolute bottom-0 left-0 z-[1]  w-full backdrop-blur-sm bg-gray-800/50 dark:bg-gray-100/50 h-[0%] desktopW:group-hover:h-[15%] mobile:group-hover:h-[20%] transition-all duration-500" >
                            <div className="text-gray-100 dark:text-gray-800 font-bold p-3">{pi.name}</div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props): JSX.Element => {

    const { t } = useTranslation();

    // return (
    //     <div className='h-[100%] pt-[10%] flex flex-col tablet:pt-0'>
    //         <div className="flex flex-col-reverse items-center justify-around my-[140px] desktopW:my-[270px] tablet:my-[205px] tablet:flex-row">
    //             <span className="font-bold text-2xl mt-10 desktopW:text-3xl tablet:mt-0">{t('portafolio')}</span>
    //             <MyProjectsSVG />
    //         </div>
    //         <div className="flex flex-col shadow-xl rounded-lg p-8 dark:bg-gray-700">
    //             <span className="font-bold text-2xl mb-5 desktopW:text-2xl tablet:mt-0">{t('proyectos-personales')}</span>
    //             <div className="flex h-full flex-row flex-wrap justify-start ">
    //                 <Card />
    //             </div>
    //         </div>

    //     </div>
    // );

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
            description: 'Juego web que consiste en destruir los balones que ascienden en la nave alienigena.',
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
        }
    ];

    return (
        <section className=" dark:bg-gray-700" id="portfolio">
            <div className="flex flex-col items-center py-36 desktopW:py-[250px] laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-2xl font-bold mb-1 desktop:text-4xl tablet:text-3xl">{t('portafolio')}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-bold mb-5 laptop:text-base">{t('mis-proyectos')}</span>
                </div>
                <div className="grid grid-cols-1 gap-10 w-[90%] desktopW:w-[80%] laptop:w-[90%] tablet:w-[60%] laptop:grid-cols-2">
                    {
                        proyectItems.map(pi => (
                            <div key={pi.key} className="relative rounded-[15px] m-1 group shadow-lg">
                                <img src={pi.img} className=" z-0 rounded-[15px] w-full scale-100 group-hover:scale-105 transition duration-300" />

        
                                <div className="absolute bottom-0 left-0 font-bold z-20 pt-20 desktopW:pt-44 laptop:pt-28 tablet:pt-36 px-7 w-full bg-gradient-to-t from-gray-800/60 h-[100%] rounded-b-[15px] transition-all scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 duration-300" >
                                    <div className="text-xl text-gray-100 mb-2 desktop:text-2xl">{pi.name}</div>
                                    <div className="text-xs text-gray-300 mb-3 desktop:text-sm">{t(pi.description)}</div>

                                    <div className="flex flex-wrap">
                                        {
                                            pi.tags.map(tag => (
                                                <div key={tag.tagKey} className=" bg-gray-800 w-fit px-3 py-1 mx-1 text-gray-100 text-[9px] mb-2 desktopW:mb-0 laptop:text-xs rounded-xl">
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
                                                className={' backdrop-blur-sm mr-1 !rounded-full scale-100 z-20 !p-0 !bg-gray-800 border-0 !text-gray-100 focus:!ring-5 focus:!ring-transparent'}
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
