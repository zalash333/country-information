import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation()
    return (<div>
        {t('footer.rights')}
    </div>)
}

export default Footer