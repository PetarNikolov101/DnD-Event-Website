import { useState } from "react";
import OneshotDetails from "./OneshotDetails";

export default function PeroButton(){
    const[ShowComponent, SetShowComponent] = useState(false);

    const ToggleShowComponent = () =>{
        if(!ShowComponent){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }

    const img = "ship2.jpg";
    const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum tenetur saepe quas libero et voluptas deleniti explicabo accusantium, illum, ab cupiditate numquam deserunt optio nobis dolorum impedit in. Vero, obcaecati.";
    const inverted = false;
    const title = "The Depths Below Moonsickle Island";

    return(
        <>
        <button onClick={ToggleShowComponent} className="btn btn-primary" id="pero-button">{title}</button>
        {ShowComponent && <OneshotDetails img={img} text={text} inverted={inverted} title={title}/>}
        </>
    )

}