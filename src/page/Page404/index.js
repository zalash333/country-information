import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './style.module.scss'

const Page404 = () => {
    const {t} = useTranslation()
    return (<div className={cls.container}>
        <h2> 404 {t('page.notFound')}</h2>
    </div>)
}

export default Page404