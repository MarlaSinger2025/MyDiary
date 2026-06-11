const EntryCard = ({ date, title, imgUrl }) => {
    return (
        <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-50 rounded-md m-auto flex-flex-col'>
			<figure className='rounded-t-md overflow-hidden w-full'>
				<img className='w-full h-full' src='https://placedog.net/800/640?id=185' alt={title} />
                {/* <img className='w-full h-full' src={imgUrl} alt={title} /> */}
			</figure>
			<div className='flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40'>
                <p className="text-end">{date}</p>
				<h2 className='text-2xl'>My best friend</h2>
			</div>
		</div>
    );
};

export default EntryCard;