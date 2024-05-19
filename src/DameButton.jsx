import { useState } from "react";
import OneShotDetails from "./OneshotDetails";
import OneshotDetails from "./OneshotDetails";

export default function DameButton(){
    const [ShowComponent, SetShowComponent] = useState(false)

    const ToggleComponent = () =>{
        if(ShowComponent == false){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    return (
        <>
            <button className="btn btn-primary" id="dame-button" onClick={ToggleComponent}>Barrow of the Writhing Prince</button><br/>
            {ShowComponent && <OneshotDetails></OneshotDetails>}
        </>
    )
}