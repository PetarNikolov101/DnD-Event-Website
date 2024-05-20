import { useState } from "react";

export default function NikButton({img, text, inverted, title}){
    const[ShowComponent, SetShowComponent] = useState(false)

    const ToggleShowComponent = () =>{
        if(!ShowComponent){
            SetShowComponent(true)
        }else SetShowComponent(false)
    }
}