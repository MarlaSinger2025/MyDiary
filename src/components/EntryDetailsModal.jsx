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
            <div className="modal-action">
            <button className="btn"
            onClick={() => openModal(false)} >X</button>
            </div>
        </div>
        </div>
    );
};

export default EntryDetailsModal;

