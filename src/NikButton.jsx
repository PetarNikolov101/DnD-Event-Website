import { useState } from "react";
import OneshotDetails from "./OneshotDetails";
import { useTranslation } from "react-i18next";

export default function NikButton({isActive, onClick}){
    const[t, i18next] = useTranslation("global")

    const img = "nik_img.jpg";
    const text = t("story_desc.desc3")
    const inverted = true;
    const title = t("story_titles.title3")
    const link = "https://docs.google.com/forms/d/e/1FAIpQLSdL2HVlR7h-7NzEJLhlVs7jUmX4PN5GznADcAepSgfqqS1ntQ/viewform?usp=sf_link"

    return(
        <>
        <button className="btn" id="nik-button" onClick={onClick}>{title}</button><br/>
        {isActive && <OneshotDetails img={img} text={text} inverted = {inverted} title={title} link = {link}></OneshotDetails>}
        </>
    )
}