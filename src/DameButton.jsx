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

    const img = "spooky-log-cabin-dark-forest.jpg";
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rerum dolor unde nobis quae et debitis maxime odit vel molestiae in aperiam distinctio praesentium, sint delectus? Quos, sapiente? Culpa, alias.";
    const inverted = true;


    return (
        <>
            <button className="btn btn-primary" id="dame-button" onClick={ToggleComponent}>Barrow of the Writhing Prince</button><br/>
            {ShowComponent && <OneshotDetails img={img} text={text} inverted = {inverted}></OneshotDetails>}
        </>
    )
}