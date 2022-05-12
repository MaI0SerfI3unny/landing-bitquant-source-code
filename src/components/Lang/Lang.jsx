import React,{useState} from 'react'
import polygon from '../../assets/polygon.svg'
import { useTranslation } from 'react-i18next'

const Lang = () => {
    const { i18n } = useTranslation();
    const [open,setOpen] = useState(false)

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false)
      }

    const arrLang = ['en','ru']
    return(
        <div style={{marginLeft:52}} className='lang_container'>
            <div className='current_lang' onClick={() => setOpen(!open)}>
                <p>{i18n.language}</p>
                <img
                style={{transform: open ? 'rotate(180deg)': 'rotate(0deg)'}}
                src={polygon} alt="polygon"/>
            </div>
            <div 
            style={{display: open ? 'block': 'none'}} 
            className='list_lang_conteinaer'>
                {arrLang.filter(el => el !== i18n.language).map((res,key) => 
                <p key={key} onClick={() => handleClick(res)}>{res}</p>)}
                </div>
        </div>
    )
}

export default Lang