import { useState } from "react";
import OneshotDetails from "./OneshotDetails";

export default function NikButton(){
    const[ShowComponent, SetShowComponent] = useState(false)

    const ToggleShowComponent = () =>{
        if(!ShowComponent){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    
    const img = "circus.jpg";
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi quia beatae autem culpa. Voluptatem eaque totam quod, culpa voluptate beatae blanditiis error obcaecati repellendus a, esse rem illo incidunt!";
    const inverted = true;
    const title = "Clownfest"

    return(
        <>
        <button className="btn btn-primary" id="nik-button" onClick={ToggleShowComponent}>{title}</button><br/>
        {ShowComponent && <OneshotDetails img={img} text={text} inverted = {inverted} title={title}></OneshotDetails>}
        </>
    )
}