import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'

export default function TopMenu(){
    const[t, i18n] = useTranslation("global")
    var apply = t("top_menu.apply")

    const handleChangeLanguage = (lang)=>{
        i18n.changeLanguage(lang)
    }
    return(
    <nav>
        <span id="nav_block"></span>
        <ul id="top_menu">
            
            <li id="logo">
                <span>
                <img alt="logo" id='logo_img' src="logo.png"></img>
                </span>
            </li>
            <li id="apply">
                <button className="lang" onClick={()=>handleChangeLanguage("en")}>EN</button>
                <button className="lang" onClick={()=>handleChangeLanguage("mk")}>MK</button>
                <button id="application_button" className="btn btn-primary right_side_clickable">{apply}</button>
            </li>
        </ul>
    </nav>
    )
}