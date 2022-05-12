import React from 'react'
import mobile_pay from '../../assets/mobile_pay.png'
import visa from '../../assets/visa.svg'
import sera from '../../assets/sera.svg'
import usdt from '../../assets/usdt.svg'
import master from '../../assets/master.svg'
import sofort from '../../assets/sofort.svg'
import krrx from '../../assets/krrx.svg'
import { useTranslation } from 'react-i18next'

const Payments = () => {
    const { i18n,t } = useTranslation();
    const payArrImg = [visa,sera,usdt,master,sofort,krrx]
    return(
        <div className='pay_container'>
            <div style={{display: 'flex',justifyContent: 'center'}}>
            <hr style={{width: '50%'}}/>
            </div>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='img-pay' src={mobile_pay} alt="pay_container"/>
                </div>
                <div className='col-md-6 pay_info'>
                    <div>
                    <h2>{t('subTitleFirst')} <b>BitQuant</b> {t('subTitleLast')}</h2>    
                    <p>{t('subscribtionDesc')}</p>
                    <div className='pay_type_container'>
                        <div style={{marginTop:48}} className='row align-items-center'>
                            {payArrImg.map((el,key) => 
                                <div key={key} className='col-md-4'>
                                  <img style={{marginBottom:32}} src={el}/>
                                </div>)}
                        </div>
                    </div>
                    <a className='text-white' href="https://bitquant.online/"><button>{t('subscribtionButt')}</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Payments