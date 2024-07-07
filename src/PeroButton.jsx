import { useState } from "react";
import OneshotDetails from "./OneshotDetails";
import { useTranslation } from "react-i18next";

export default function PeroButton({isActive, onClick}){
    const[t, i18next] = useTranslation("global")

    const img = "cool_ship.jpg";
    const text = t("story_desc.desc2")
    const inverted = false;
    const title = t("story_titles.title2");
    const link ="https://docs.google.com/forms/d/1Zp-wTon1BrwQN4nOxG16DUqSL5eeuXUlezB1BKOKyo4/edit"

    return(
        <>
        <button onClick={onClick} className="btn" id="pero-button">{title}</button>
        {isActive && <OneshotDetails img={img} text={text} inverted={inverted} title={title} link = {link}/>}
        </>
    )

}