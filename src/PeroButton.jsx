import { useState } from "react";
import OneshotDetails from "./OneshotDetails";
import { useTranslation } from "react-i18next";

export default function PeroButton(){
    const[ShowComponent, SetShowComponent] = useState(false);
    const[t, i18next] = useTranslation("global")
    const ToggleShowComponent = () =>{
        if(!ShowComponent){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    const img = "cool_ship.jpg";
    const text = t("story_desc.desc2")
    const inverted = false;
    const title = t("story_titles.title2");

    return(
        <>
        <button onClick={ToggleShowComponent} className="btn" id="pero-button">{title}</button>
        {ShowComponent && <OneshotDetails img={img} text={text} inverted={inverted} title={title}/>}
        </>
    )

}