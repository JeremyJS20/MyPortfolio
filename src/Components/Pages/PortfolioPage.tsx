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

    return (
        <div className='h-[100%] pt-[10%] flex flex-col tablet:pt-0'>
            <div className="flex flex-col-reverse items-center justify-around my-[140px] desktopW:my-[270px] tablet:my-[205px] tablet:flex-row">
                <span className="font-bold text-2xl mt-10 desktopW:text-3xl tablet:mt-0">{t('portafolio')}</span>
                <MyProjectsSVG />
            </div>
            <div className="flex flex-col shadow-xl rounded-lg p-8 dark:bg-gray-700">
                <span className="font-bold text-2xl mb-5 desktopW:text-2xl tablet:mt-0">{t('proyectos-personales')}</span>
                <div className="flex h-full flex-row flex-wrap justify-start ">
                    <Card />
                </div>
            </div>

        </div>
    );
};

export default PortfolioPage;
