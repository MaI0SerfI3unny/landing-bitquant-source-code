import React from 'react'
import laptop from '../../assets/Laptop.png'
import { useTranslation } from 'react-i18next'

const Banner = () => {
    const { i18n,t } = useTranslation();
    return(
        <div className='banner home'>
            <div className='container'>
                <div className='row'>
                    <div className='mobile_laptop_container'>
                    <img src={laptop} alt="laptop"/>
                    </div>
                    <div className='col-md-5 banner_first_block'>
                        <div className='container_title_banner'>
                            {i18n.language === 'ru' ? 
                                <h1 className='banner_title'>
                              
                                   {t('banner_start_title')}
                                   <p style={{display:'-webkit-inline-box',marginLeft:10,marginBottom:0}}>{t("banner_end_title")}</p> 
                                   <p style={{display:'inline',marginRight:10}}>{t("up_banner")}</p> 
                                 {t('banner_main_title')}
                                </h1>
                             : 
                                <h1 className='banner_title'>
                                <p style={{display:'inline',marginRight:10}}>{t('banner_start_title')}</p> 
                                {t('banner_main_title')}<p style={{display:'inline',marginLeft:10}}>{t("banner_end_title")}</p></h1>
                            }

                        <p className='text-white banner_desc'>{t('banner_desc')}</p>
                        <a className='text-white' href="https://bitquant.online/"><button>{t('banner_butt')}</button></a>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div>
                            <img src={laptop} alt="laptop"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner