

const EntryDetails = ({ date, title, imgUrl, content }) => {

	const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");

    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

    return (
        <div className=''>
			<figure className='rounded-t-md w-full'>
                <img className='w-full h-full' src={imgUrl} alt={title} />
			</figure>
			<div className='p-4'>
                <p className="text-end text-gray-600 text-sm">{formatDate(date)}</p>
				<h2 className='text-xl text-center font-heading'>{title}</h2>
				<div className="mt-3 h-0.5 w-[80%] mx-auto bg-linear-to-r  from-[#fd1892] via-[#b827fc] to-[#2c90fc] " />
				<p className="mt-2">{content} </p>
			</div>
		</div>
    );
	
};

export default EntryDetails;

// <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-50 rounded-md m-auto flex-flex-col'>