import axios from 'axios';
import { Alert } from 'flowbite-react/lib/esm/components/Alert';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IFooterPageProps {
}

const FooterPage: React.FunctionComponent<IFooterPageProps> = (props) => {

    const { t } = useTranslation();

    return (
        <section className="hidden bg-green-700" id="footer">
            <div className="flex flex-col items-center py-40 desktopW:py-24 laptop:py-52 tablet:py-48 w-[95vw] mx-auto desktop:w-[70vw] laptop:w-[85vw] laptop:container">
footer
            </div>
        </section>
    );
};

export default FooterPage;