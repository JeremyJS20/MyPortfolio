import axios from 'axios';
import { Alert } from 'flowbite-react/lib/esm/components/Alert';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContactSVG } from '../../Assets/Img/ImagesComponentCollection';

interface IContactPageProps {
}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {

    const { t } = useTranslation();

    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [formAlertProperties, setFormAlertProperties] = useState({
        visible: false,
        type: "",
        message: "",
    });

    const handleOnChange = useCallback((event: any) => {
        event.persist();
        setInputs((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    }, [inputs]);

    // Server State Handling

    const handleOnSubmit = useCallback(async (event: any) => {
        event.preventDefault();

        try {
            await axios({
                method: "POST",
                url: "https://formbold.com/s/9EEbA",
                data: inputs,
            });

            setFormAlertProperties({
                visible: true,
                type: 'success',
                message: t('formulario-enviado-msg')
            });

            setInputs({
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setFormAlertProperties({
                visible: true,
                type: 'failure',
                message: t('formulario-error-msg')
            });
        }
    }, [inputs]);

    const [infoData, setInfoData] = useState<{
        key: string,
        text: string,
        value: string,
        icon: string
    }[]>([
        {
            key: 'infoData1',
            text: 'llamame',
            value: '+1 829-264-4164',
            icon: 'fa-solid fa-phone'
        },
        {
            key: 'infoData2',
            text: 'correo',
            value: 'jsjeremy4@gmail.com',
            icon: 'fa-solid fa-envelope'
        },
        {
            key: 'infoData3',
            text: 'ubicacion',
            value: 'Dominican Republic - Bajos de Haina, San Cristobal',
            icon: 'fa-solid fa-location-dot'
        },
    ]);

    return (
        <section className="" id="contact">
            <div className="flex flex-col items-center py-40 desktopW:py-[245px] laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
                <div className="flex flex-col items-center mb-12">
                    <span className="text-2xl font-bold mb-1 desktop:text-4xl tablet:text-3xl">{t('contacto')}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-bold mb-5 laptop:text-base">{t('ponte-en-contacto')}</span>
                </div>

                <div className="flex flex-col justify-between w-[90%] laptop:w-[80%] tablet:w-[70%] laptop:flex-row">
                    <div className='flex flex-col font-bold laptop:w-[50%]'>
                        {
                            infoData.map(i => (
                                <div key={i.key} className='flex items-center mb-10'>
                                    <i className={`${i.icon} text-3xl laptop:text-4xl text-green-700 mr-5`} />
                                    <div className='flex flex-col'>
                                        <span className='text-xl desktop:text-2xl mb-1'>{t(i.text)}</span>
                                        <span className='text-xs text-gray-400 dark:text-gray-500 desktop:text-base laptop:text-sm'>{i.value}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-0 tablet:mt-0 laptop:w-[45%]'>
                        <Alert
                            color={formAlertProperties.type}
                            onDismiss={() => setFormAlertProperties({ ...formAlertProperties, visible: false })}
                            className={`${formAlertProperties.visible ? '' : 'hidden'} mb-5`}
                        >
                            <span>
                                {formAlertProperties.message}
                            </span>
                        </Alert>
                        <form onSubmit={handleOnSubmit}>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input value={inputs.email} onChange={handleOnChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder={`${t('correo')}`} required />
                            </div>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                                    </svg>
                                </div>
                                <input value={inputs.subject} onChange={handleOnChange} type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder={`${t('asunto')}`} required />
                            </div>
                            <textarea value={inputs.message} onChange={handleOnChange} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-700 focus:border-green-700 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-600" placeholder={`${t('mensaje')}`} required />
                            <button type="submit" className="bg-green-700 text-gray-100 mt-7 rounded-xl !font-bold cursor-pointer text-center p-6 hover:bg-green-600 focus:!ring-transparent w-[50%] desktopW:w-[40%] laptop:w-[60%] tablet:w-[35%]">{t('enviar')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;