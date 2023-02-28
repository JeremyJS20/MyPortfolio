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

    return (
        <div className='h-[100%] pt-[10%] flex flex-col tablet:pt-0'>
            <div className="flex flex-col-reverse items-center justify-around my-[140px] desktopW:my-[270px] tablet:my-[205px] tablet:flex-row">
                <span className="font-bold text-2xl mt-10 desktopW:text-3xl tablet:mt-0">{t('contacto')}</span>
                <ContactSVG />
            </div>
            <div className="mb-10 flex justify-between h-full flex-col shadow-xl rounded-lg p-8 dark:bg-gray-700 tablet:flex-row">
                <div className='tablet:w-[45%]'>
                    <div className='mb-10'>
                        <span className='text-2xl font-bold'>{t('ponte-en-contacto')}</span>
                    </div>
                    <div className='mb-10 hidden'>
                        map area
                    </div>
                    <div className='flex flex-col'>
                        <div className='my-2 flex items-center justify-between'>
                            <div className='px-[10px] py-[4px] text-center text-green-600 bg-gray-200 dark:bg-gray-700 rounded-[50%]'>
                                <i className="fa-solid fa-location-dot" />
                            </div>
                            <span className='w-[92%]'>San Cristóbal, {t('repdominicana')}.</span>
                        </div>
                        <div className='my-2 flex items-center justify-between'>
                            <div className='px-2 py-[3px] text-center text-green-600 bg-gray-200 dark:bg-gray-700 rounded-[50%]'>
                                <i className="fa-solid fa-envelope" />
                            </div>
                            <span className='w-[92%]'>jsjeremy4@gmail.com</span>
                        </div>
                        <div className='my-2 flex items-center justify-between'>
                            <div className='px-2 py-[3px] text-center text-green-600 bg-gray-200 dark:bg-gray-700 rounded-[50%]'>
                                <i className="fa-solid fa-phone" />
                            </div>
                            <span className='w-[92%]'>+1 (829)-264-4164</span>
                        </div>
                    </div>
                </div>
                <div className='mt-10 tablet:mt-0 tablet:w-[45%]'>
                    <div className='mb-10'>
                        <span className='text-2xl font-bold'>{t('formulario-de-contacto')}</span>
                    </div>
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
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('tu-correo')}</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input value={inputs.email} onChange={handleOnChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                        </div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('asunto')}</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                                </svg>
                            </div>
                            <input value={inputs.subject} onChange={handleOnChange} type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${t('ejemplo-asunto')}`} required />
                        </div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('mensaje')}</label>
                        <textarea value={inputs.message} onChange={handleOnChange} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${t('escribe-mensaje')}`} required />
                        <button type="submit" className="text-gray-100 bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5">{t('enviar')}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;