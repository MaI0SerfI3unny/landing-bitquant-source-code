import React from 'react'
import testi1 from '../../assets/testi1.png'
import testi2 from '../../assets/testi2.png'
import testi3 from '../../assets/testi3.png'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
    const { i18n, t } = useTranslation();
    return(
        <div className='testimonials_container testimonial'>
            <div className='container'>
                <div className='content_container'>
                    <div>
                    <h2>{t("testimonialsFirst")}</h2>
                    </div>
                    <div>
                    <p className='p-0'>{t('testimonialsEnd')}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <div className='m-1 testi_item'>
                        <img src={testi1}/>
                        <p>{t('commentOne')}</p>
                        </div>
                    </div>
                    <div className='col-md-4 text-center '>
                    <div className='m-1 testi_item'>
                    <img src={testi2}/>
                        <p>{t('commentTwo')}</p>
                    </div>
                    </div>
                    <div className='col-md-4 text-center'>
                    <div className='m-1 testi_item'>
                    <img src={testi3}/>
                        <p>{t('commentThree')}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials