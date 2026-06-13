
import AddEntryModal from "./AddEntryModal";

const Navigation = ({ openModal}) => {



    return (
        <div>
            <button className="cursor-pointer px-6 py-3 font-semibold text-slate-800 rounded-full bg-linear-to-r from-[#5BCEFA] via-[#F5A9B7] to-[#FFFFFF] border border-slate-300 shadow-md hover:scale-105 transition-all duration-200"
                onClick={openModal} >
                    New Entry</button>
        </div>

    );
};

export default Navigation;

//<button className="btn btn-soft btn-accent"

