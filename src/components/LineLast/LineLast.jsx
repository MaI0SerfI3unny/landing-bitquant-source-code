import React from 'react'
import bg from '../../assets/bg_line.jpg'
import { useTranslation } from 'react-i18next'

const LineLast = () => {
    const { t } = useTranslation();
    return(
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
            }} className='line_list'>
            <div className='container'>
                <div style={{maxWidth: 700}}>
                <p className='line_list_title_last text-white'>{t('try')} <b>BitQuant</b> {t('lineLastNext')} <b>{t('lineLastFree')}</b></p>
                <p  className='line_list_desc_last last_text_line text-white mb-0'>{t('lineLastDesc')}</p>
                <a className='text-white' href="https://bitquant.online/"><button className='text-white'>{t('lineLastButt')}</button></a>
                </div>
            </div>
        </div>
    )
}

export default LineLast