import EntryDetails from "./EntryDetails";

const EntryDetailsModal = ({openModal, title, date, imgUrl, content }) => {
    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-lg p-0"
            >
            <EntryDetails title={title}
                          date={date}
                          imgUrl={imgUrl}
                          content={content}
            />
            <div className="modal-action mt-0 mr-2 mb-2">
            <button className="btn btn-circle btn-soft btn-primary"
            onClick={() => openModal(false)} >X</button>
            </div>
        </div>
        </div>
    );
};

export default EntryDetailsModal;

