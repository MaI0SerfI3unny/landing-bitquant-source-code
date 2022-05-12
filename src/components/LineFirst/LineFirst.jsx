import React from "react";
import bg from '../../assets/bg_.jpg'
import { useTranslation } from 'react-i18next'


const LineFirst = () => {
    const { i18n,t } = useTranslation();
    return(
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
            }} className='line_list'>
            <div className='container'>
                <div style={{maxWidth: 1000}}>
                {i18n.language === 'ru'?
                    <p className='line_list_title_last text-white'><b>{t('bitquant')}</b> {t('linFirstD')} <b>{t('lineNum')}</b> {t('lineFirstNext')}</p> 
                :
                <p className='line_list_title_last text-white'>{t('FirstlEnDesciption')} <b>{t('lineNum')}</b> {t('AverageEnDescription')} <b>{t('bitquant')}</b> {t('LastEnDescription')}</p> 
                }
               
                
                <p className='line_list_desc_last line-first-desc text-white mb-0'>{t('lineFirst')}</p>
                <a className='text-white' href="https://bitquant.online/"><button  className='text-white btn-line-first'>{t('lineRirstButt')}</button></a>
                </div>
            </div>
        </div>
    )
}

export default LineFirst