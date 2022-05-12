import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {depositArr} from '../../storage/storage.js'
import next from '../../vector-next.png'
import prev from '../../vector-prev.png'
import { useTranslation } from 'react-i18next'

const Pricing = () => {
    const { t } = useTranslation();
    const [currentDeposit,setCurrentDeposit] = useState(0)
    const [my_swiper, set_my_swiper] = useState({});
    return(
        <div className='pricing_container'>
            <div className='container'>
                <h2 className='text-white text-center'>{t('pricing')}</h2>
                <p className='text-white text-center'>{t('pricingDesc')}</p>
                <div className='deposit_panel'>
                    {depositArr.map((el,key) => 
                       <div key={key}
                       onClick={() => setCurrentDeposit(key)}
                       className={key === currentDeposit? "active_deposit" :""}>
                        {el.num}$</div>)}
                </div>
                <div className='deposit_list_mobile'>
                <img className='arrow_next' src={next} onClick={() => my_swiper.slideNext()}/>
                <img className='arrow_prev' src={prev} onClick={() => my_swiper.slidePrev()}/>
                <Swiper
                        spaceBetween={24}
                        slidesPerView={1}
                        onInit={(ev) => {
                            set_my_swiper(ev)
                        }}>
                            {depositArr[currentDeposit].content.map((el,key) =>
                            <SwiperSlide key={key}> 
                                <div className='col-md-3 '>
                                <div className='list_deposit_item m-1'>
                                    <h3>{el.name}</h3>
                                    <p className='period'>{t('period')}</p>
                                    <p className='period_time'>{el.period} {t('month')}</p>
                                    <p className='price'>{t('price')}</p>
                                    <p className='price_item'>${el.price}</p>
                                </div>
                                <button>{t('pricingBtn')}</button>
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                </div>
                <div className='row container_list_deposit'>
                        {depositArr[currentDeposit].content.map((el,key) => 
                        <div key={key} className='col-md-3 '>
                        <div className='list_deposit_item m-1'>
                            <h3>{el.name}</h3>
                            <p className='period'>{t('period')}</p>
                            <p className='period_time'>{el.period} {el.period === 1 ? t('month'): el.period === 12 ? t('montss') : t('months')}
                            </p>
                            <p className='price'>{t('price')}</p>
                            <p className='price_item'>${el.price}</p>
                        </div>
                        <a className='text-white' href="https://bitquant.online/"><button>{t('pricingBtn')}</button></a>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Pricing