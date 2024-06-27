import { useState } from "react";
import OneshotDetails from "./OneshotDetails";
import { useTranslation } from "react-i18next";

export default function NikButton(){
    const[ShowComponent, SetShowComponent] = useState(false)
    const[t, i18next] = useTranslation("global")
    const ToggleShowComponent = () =>{
        if(!ShowComponent){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    const img = "nik_img.jpg";
    const text = t("story_desc.desc3")
    const inverted = true;
    const title = t("story_titles.title3")

    return(
        <>
        <button className="btn" id="nik-button" onClick={ToggleShowComponent}>{title}</button><br/>
        {ShowComponent && <OneshotDetails img={img} text={text} inverted = {inverted} title={title}></OneshotDetails>}
        </>
    )
}