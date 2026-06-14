import AddEntryForm from "./AddEntryForm";

const AddEntryModal = ({openModal}) => {
    return (
        <div className="modal modal-open"> 
            <div className="modal-box max-w-xl text-center">
                <h2 className="text-xl font-semibold">Add a new diary entry</h2>
                <div className="mt-3 h-0.5 bg-linear-to-r from-[#ff218C] via-[#ffd800] to-[#21b1ff]" />
            <AddEntryForm 
                onSuccess={() => openModal(false)}/>
            <div className="modal-action mt-0">
            <button className="btn btn-circle btn-soft btn-secondary"
            onClick={() => openModal(false)} >X</button>
            </div>
        </div>
        </div>
    );
};

export default AddEntryModal;

