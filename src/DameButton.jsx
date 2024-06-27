import { useState } from "react";
import OneshotDetails from "./OneshotDetails";
import { useTranslation } from 'react-i18next'

export default function DameButton(){
    const [ShowComponent, SetShowComponent] = useState(false)
    const [t, i18next] = useTranslation("global")
    const ToggleComponent = () =>{
        if(ShowComponent == false){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    const img = "dame_img.jpg";
    const text = t("story_desc.desc1");
    const inverted = true;
    const title = t("story_titles.title1")

    return (
        <>
            <button className="btn" id="dame-button" onClick={ToggleComponent}>{title}</button><br/>
            {ShowComponent && <OneshotDetails img={img} text={text} inverted = {inverted} title={title}></OneshotDetails>}
        </>
    )
}