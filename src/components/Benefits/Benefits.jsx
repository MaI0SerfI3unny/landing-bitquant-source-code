import React from 'react'
import testi1 from '../../assets/stock-market.svg'
import testi2 from '../../assets/margin.svg'
import testi3 from '../../assets/instructions.svg'
import testi4 from '../../assets/technical-support.svg'
import huobi from '../../assets/huobi.svg'
import binance from '../../assets/binance.svg'
import binanceMobile from '../../assets/binance_mobile_ver.svg'
import { useTranslation } from 'react-i18next'

const Benefits = () => {
    const { i18n, t } = useTranslation();
    return(
        <div className='benifits_container benifits'>
            <div className='container'>
            <div className='content_container'>
                    <div>
                        <h2>{t('benefitTitleFirst')}</h2>
                    </div>
                    <div>
                    <p>{t('benefitTitleEnd')}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-center'>
                        <div className='m-1 testi_item'>
                        <img src={testi1}/>
                        <p>{t('benefitOne')}</p>
                        </div>
                    </div>
                    <div className='col-md-3 text-center'>
                    <div className='m-1 testi_item'>
                    <img src={testi2}/>
                        <p>{t('benefitTwo')}</p>
                    </div>
                    </div>
                    <div className='col-md-3 text-center'>
                    <div className='m-1 testi_item'>
                    <img src={testi3}/>
                        <p>{t('benefitThree')}</p>
                    </div>
                    </div>
                    <div className='col-md-3 text-center'>
                    <div className='m-1 testi_item'>
                    <img src={testi4}/>
                        <p>{t('benefitFour')}</p>
                    </div>
                    </div>
                </div>
                
                <div className='support_container text-center'>
                    <h2 className='text-white'>{t('suppTitle')}</h2>
                    <div>
                    <p className='text-white mb-0'>{t('supDesc')}</p>
                    </div>
                    <div className='support_image'>
                        <img src={huobi} alt="huobi"/>
                        <img className='desc-binance-market' src={binance} alt="binance"/>
                        <img className='desc-mobile-market' src={binanceMobile} alt="binance"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits