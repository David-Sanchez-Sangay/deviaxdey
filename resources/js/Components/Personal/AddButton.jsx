import { useState } from "react";
import { Popup } from "./Popup";

export const AddButton = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

    return (
        <div className="flex items-center justify-center">
            <button 
            onClick={togglePopup}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                Agregar personal
            </button>
            {showPopup && <Popup onClose={togglePopup} />}
        </div>
    );
};
