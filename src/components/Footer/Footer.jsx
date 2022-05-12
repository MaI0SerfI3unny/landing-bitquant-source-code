import React from "react";
import insta from '../../assets/insta.svg'
import whatsapp from '../../assets/whatsapp.svg'
import youtube from '../../assets/youtube.svg'
import link from '../../assets/Linkedin.svg'
import shape from '../../assets/Shape.svg'
import combin from '../../assets/Combined-Shape.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();
    return(
        <footer>
            <div className="container text-center">
                <p className="footer_title">{t('footerTitle')}</p>
                <a className='text-white' href="https://bitquant.online/"><button>{t('footerButt')}</button></a>
                <div className="row align-items-center pb-4 pt-4">
                    <div className="col-md-4">
                        <p className="supp-text mb-0"><p className="mb-0">{t('supp')}:</p> support@bitquant.online</p>
                    </div>
                    <div className="col-md-4">
                        <div className="row justify-content-center">
                            <img src={shape}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="text-copy mb-0">Bitquant © {new Date().getFullYear()}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer