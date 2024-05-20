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

    const img = "guy.jpg";
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat asperiores deserunt, officiis itaque voluptatibus iste voluptas perspiciatis quasi dolor reprehenderit a, nisi repellat voluptatem pariatur minus reiciendis corrupti sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rerum dolor unde nobis quae et debitis maxime odit vel molestiae in aperiam distinctio praesentium, sint delectus? Quos, sapiente? Culpa, alias.";
    const inverted = true;
    const title = "Barrow of the Writhing Prince"

    return (
        <>
            <button className="btn btn-primary" id="dame-button" onClick={ToggleComponent}>{title}</button><br/>
            {ShowComponent && <OneshotDetails img={img} text={text} inverted = {inverted} title={title}></OneshotDetails>}
        </>
    )
}