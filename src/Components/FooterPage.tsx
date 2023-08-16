import { useTranslation } from 'react-i18next';

interface IFooterPageProps {
}

const FooterPage: React.FunctionComponent<IFooterPageProps> = (props) => {

    const { t } = useTranslation();

    return (
        <section className="bg-green-700 text-gray-100 " id="footer">
            <div className="flex flex-row justify-between items-center py-12 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <span className='text-base laptop:text-xl'>{t('copyright')}</span>
                {/* <div className='flex flex-col'>
                    <span className='text-4xl  mb-5'>Jeremy</span>
                    <span className='text-xl '>{t('ocupacion')}</span>
                </div>
                <div className='flex flex-col'>
                    <div></div>
                </div>
                <div>ddd</div> */}

            </div>
        </section>
    );
};

export default FooterPage;