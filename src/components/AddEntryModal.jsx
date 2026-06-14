import AddEntryForm from "./AddEntryForm";

const AddEntryModal = ({openModal}) => {
    return (
        <div className="modal modal-open"> 
            <div className="modal-box max-w-xl text-center">
                <h2 className="text-xl font-semibold">Add a new diary entry</h2>
                <div className="mt-3 h-[2px] bg-gradient-to-r from-[#b827fc] via-[#2c90fc] via-[#b8fd33] via-[#fec837] to-[#fd1892]" />
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

