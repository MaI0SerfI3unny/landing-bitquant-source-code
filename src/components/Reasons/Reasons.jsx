import React from 'react'
import bg from '../../assets/bg_reason.png'
import num1 from '../../assets/1.svg'
import num2 from '../../assets/2.svg'
import num3 from '../../assets/3.svg'
import { useTranslation } from 'react-i18next'

const Reasons = () => {
    const { i18n,t } = useTranslation();
    return(
        <div className='reasons_container'>
            <div className='container'>
                    <div className='content_container'>
                        <div>
                        <h2>{t('reasonTitleFirst')}</h2>
                        </div>
                        <div>
                        <p>{t('reasonTitleEnd')}</p>
                    </div>
                </div>
                </div>
                <div className='reasons_subcontainer' style={{backgroundImage: `url(${bg})`}}>
                <div className='container'>
                <div className='item_first'>
                    <div className='col-md-6 text-white item_reasons'>
                        <img src={num1} alt="1"/>
                        <p>{t('FirstReason')}</p>
                    </div>
                </div>
                <div className='item_second'>
                    <div className='col-md-6 text-white item_reasons'>
                    <img src={num2} alt="2"/>
                    <p><b>{t('bitquant')}</b> {t('SecondReason')} <b>{t('banner_end_title')}</b></p>
                    </div>
                </div>
                <div className='item_third'>
                    <div className='col-md-6 text-white item_reasons'>
                        <img src={num3} alt="3"/>
                        <p>{t('ThirdReason')}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Reasons