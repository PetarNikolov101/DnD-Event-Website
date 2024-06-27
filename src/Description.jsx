import { useTranslation } from "react-i18next"

export default function Description(){
    const[t, i18next] = useTranslation("global")
    var desc = t("event_desc.desc")
    return(
        <div className="desc">
            <div className="desc-text">
                <p>
                    {desc}
                </p>
            </div>
            <div className = "desc-img">
                <img className="desc-img" src="dice.jpg"></img>
            </div>
        </div>
    )
}