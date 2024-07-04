import { useTranslation } from "react-i18next"
export default function OneshotDetails({img, text, inverted, title, link}){
    const[t, i18n] =  useTranslation("global")
    if(inverted){
        return(
        <div className="desc" id="oneshot-details">
        <br></br>
        <img src={img} className="desc-img"></img>
        <p className="desc-text">{text}<br></br><a class ="apliciraj" href={link} target="_blank">{t("top_menu.apply")}</a></p>
        <h4 className="title">{title}</h4>
        </div>
        )
    }else{
        return(
            <div className="desc" id="oneshot-details">
            <br></br>
            <h4 className="title">{title}</h4>
            <p className="desc-text">{text}<br></br><a class ="apliciraj" href={link} target="_blank">{t("top_menu.apply")}</a></p>
            <img src={img} className="desc-img"></img>
        </div>
        )
    }

}