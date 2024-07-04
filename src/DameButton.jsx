import { useState } from "react";
import OneshotDetails from "./OneshotDetails";
import { useTranslation } from 'react-i18next'

export default function DameButton({isActive, onClick}){
    const [t, i18next] = useTranslation("global")

    const img = "dame_img.jpg";
    const text = t("story_desc.desc1");
    const inverted = true;
    const title = t("story_titles.title1")
    const link = "https://www.instagram.com/zandana.mk/"

    return (
        <>
            <button className="btn" id="dame-button" onClick={onClick}>{title}</button><br/>
            {isActive && <OneshotDetails img={img} text={text} inverted = {inverted} title={title} link={link}></OneshotDetails>}
        </>
    )
}