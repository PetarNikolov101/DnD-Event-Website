import DameButton from "./DameButton"
import PeroButton from "./PeroButton"
import NikButton from "./NikButton"
import { useState } from "react";

export default function Buttons(){
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    };

    return (
        <div>
            <DameButton isActive={activeButton === 'dame'} onClick={() => handleButtonClick('dame')} />
            <PeroButton isActive={activeButton === 'pero'} onClick={() => handleButtonClick('pero')} />
            <NikButton isActive={activeButton === 'nik'} onClick={() => handleButtonClick('nik')} />
        </div>
    )
}