import EntryForm from "./EntryForm";

const AddEntryModal = ({openModal}) => {
    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-lg p-0 overflow-hidden">
            <EntryForm />
            <div className="modal-action">
            <button className="btn"
            onClick={() => openModal(false)} >X</button>
            </div>
        </div>
        </div>
    );
};

export default AddEntryModal;

