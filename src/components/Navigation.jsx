import { useState } from "react";
import AddEntryModal from "./AddEntryModal";

const Navigation = () => {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <button className="btn btn-soft btn-accent"
                onClick={() => {setModal(true)}} >
                    New Entry</button>
            {modal && <AddEntryModal openModal={setModal} />}
        </div>

    );
};

export default Navigation;

