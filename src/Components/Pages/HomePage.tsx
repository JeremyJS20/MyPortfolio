import { Button } from "flowbite-react/lib/esm/components/Button";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { onSiteBtnClick } from "../../Utils/CommonFunctions.utils";

const Me2x2 = require('../../Assets/Img/Me2x2.jpg');

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props): JSX.Element => {

    const { t } = useTranslation();

    const soocialNetworks = [
        {
            key: 0,
            text: 'Github',
            route: 'github.com/JeremyJS20',
            icon: 'fa-brands fa-github'
        },
        {
            key: 1,
            text: 'LinkedIn',
            route: 'www.linkedin.com/in/jerermy-michel-solano-frías-10ba9b218',
            icon: 'fa-brands fa-linkedin-in'
        },
        {
            key: 2,
            text: 'Instagram',
            route: 'www.instagram.com/jeremyjs20/',
            icon: 'fa-brands fa-instagram'
        },
        {
            key: 3,
            text: 'Twitter',
            route: 'twitter.com/JeremyJS20',
            icon: 'fa-brands fa-twitter'
        },
    ];

    return (
        <div className='h-[90vh] pt-[10%] flex items-center tablet:h-[90vh] tablet:pt-0'>
            <div className='desktop:w-[90%] text-center tablet:text-right flex justify-between items-center flex-col-reverse laptop:flex-row laptop:items-stretch'>
                <div className="flex flex-col justify-around mt-4 h-[40vh] w-[100%]  laptop:h-[40vh] tablet:h-[30vh] desktopW:my-28 tablet:my-14 laptop:w-[50%] text-center laptop:text-right">
                    <div className="w-[100%] ml-auto desktopW:w-[70%] desktop:w-[90%]">
                        <span>{t('bienvenida')}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl text-green-600 font-bold mb-0 desktopW:text-5xl tablet:text-4xl desktopW:mb-2">Jeremy Solano</span>
                        <span className="text-base text-gray-400 font-bold desktopW:text-heading-base tablet:text-xl">{t('ocupacion')}</span>
                    </div>
                    <div className="flex justify-center laptop:justify-end">
                        {
                            soocialNetworks.map(sn => (
                                <Button
                                    key={sn.key}
                                    size={'xs'}
                                    className={'!rounded-full !p-1 !bg-gray-100 border-0 !text-gray-600 hover:!bg-gray-200 focus:!ring-5 focus:!ring-transparent dark:!bg-transparent dark:!text-gray-300 dark:hover:!bg-gray-700 '}
                                    onClick={() => onSiteBtnClick(sn.route)}
                                >
                                    <i className={`${sn.icon} text-3xl `}></i>
                                </Button>
                            ))
                        }
                    </div>
                </div>
                <div className='w-[70%] laptop:w-[35%] tablet:w-[50%] tablet:my-auto'>
                    <img src={Me2x2} className='h-auto rounded-full' />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
