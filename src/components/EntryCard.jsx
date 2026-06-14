import { useState } from "react";
import EntryDetailsModal from "./EntryDetailsModal";

const EntryCard = ({ date, title, imgUrl, content }) => {

	const [detailsModal, setDetailsModal] = useState(false);

    return (
		<>
        <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-50 rounded-md m-auto flex-flex-col'
			onClick={() => {setDetailsModal(true)}}
		>
			<figure className='rounded-t-md overflow-hidden w-full'>
                <img className='w-full h-full' src={imgUrl} alt={title} />
			</figure>
			<div className='flex flex-col p-6 pt-2 rounded-b-md bg-white'>
                <p className="text-end">{date}</p>
				<h2 className='text-xl'>{title}</h2>
			</div>
		</div>
		 {detailsModal && (
        <EntryDetailsModal openModal={setDetailsModal} 
							date={date}
							title={title}
							imgUrl={imgUrl}
							content={content}
							/>
    )}
		</>
    );
};

export default EntryCard;