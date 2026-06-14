

const EntryDetails = ({ date, title, imgUrl, content }) => {
    return (
        <div className=''>
			<figure className='rounded-t-md overflow-hidden w-full'>
                <img className='w-full h-full' src={imgUrl} alt={title} />
			</figure>
			<div className=''>
                <p className="text-end">{date}</p>
				<h2 className='text-xl'>{title}</h2>
				<p>{content} </p>
			</div>
		</div>
    );
	
};

export default EntryDetails;

// <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-50 rounded-md m-auto flex-flex-col'>