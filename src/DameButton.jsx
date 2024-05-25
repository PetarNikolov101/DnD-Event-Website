import { useState } from "react";
import OneshotDetails from "./OneshotDetails";

export default function DameButton(){
    const [ShowComponent, SetShowComponent] = useState(false)
    const ToggleComponent = () =>{
        if(ShowComponent == false){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    const img = "guy.jpg";
    const text = "The youngest prince of a troubled kingdom has been kidnapped and you've tracked his captors to a crypt at the edge of an abandoned village. However, instead of meeting resistance you meet the helpless cries of a wounded thief.";
    const inverted = true;
    const title = "Barrow of the Writhing Prince"

    return (
        <>
            <button className="btn" id="dame-button" onClick={ToggleComponent}>{title}</button><br/>
            {ShowComponent && <OneshotDetails img={img} text={text} inverted = {inverted} title={title}></OneshotDetails>}
        </>
    )
}