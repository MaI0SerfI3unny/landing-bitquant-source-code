import React,{useRef} from 'react'
import logo from '../../assets/logo.svg'
import Lang from '../Lang/Lang'
import {Link} from 'react-scroll';
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation();

    return(
        <header>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-3'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='col-md-9 list_container'>
                        <ul className='list_ul_container'>
                            <li className='text-white'>
                            <Link
                            activeClass = "active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>{t('about')}</Link>
                            </li>
                            <li className='text-white'>
                            <Link
                            activeClass = "active"
                            to="benifits"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>{t('feauters')}</Link>
                            </li>
                            <li className='text-white'>
                            <Link
                            activeClass = "active"
                            to="testimonial"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>{t('testi')}</Link>
                            </li>
                            <li className='text-white'>
                            <Link
                            activeClass = "active"
                            to="pricing_container"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>{t('pricing')}</Link>
                            </li>
                        </ul>
                        <Lang/>
                        <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu__box">
                            <img src={logo} alt="logo"/>
                            <li><a className="menu__item">
                                <Link
                                activeClass = "active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>{t('about')}</Link>
                                </a></li>
                            <li><a className="menu__item">
                                <Link
                                activeClass = "active"
                                to="benifits_container"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>{t('feauters')}</Link>
                                </a></li>
                            <li><a className="menu__item">
                                <Link
                                activeClass = "active"
                                to="testimonials_container"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>{t('testi')}</Link>
                                </a></li>
                            <li><a className="menu__item">
                                <Link
                                activeClass = "active"
                                to="pricing_container"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>{t('pricing')}</Link>
                            </a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header