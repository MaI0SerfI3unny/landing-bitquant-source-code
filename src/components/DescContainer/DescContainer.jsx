import { useTranslation } from 'react-i18next'
import React from 'react'
import mobile from '../../assets/mobile.png'


const DescContainer = () => {
    const { i18n, t } = useTranslation();
    return(
        <div className='desContainer about'>
            <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <img className='img-desc' src={mobile}/>
                </div>
                <div className='col-md-6'>
                    <p className='text-white'><b>{t('bitquant')}</b> {t('desContainerDescFirst')}</p>
                    <br/>
                    <p className='text-white'>{t('desContaierDescLast')}</p>
                    <a className='text-white' href="https://bitquant.online/"><button>{t('desContainerButt')}</button></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DescContainer