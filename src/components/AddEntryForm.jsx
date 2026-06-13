import { useState } from "react";

const AddEntryForm = () => {

    // UNCOMMENT once EntryContext is finished
    // const { entries, addEntry } = useEntries(); 

    const [form, setForm] = useState({
        date: '',
        title:'',
        imgUrl:'',
        content: ''
         });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {}; 

    // const today = new Date();

    //     const localToday =
    //      `${today.getFullYear()}-${
    //         String(today.getMonth() + 1).padStart(2, "0")
    //     }-${
    //         String(today.getDate()).padStart(2, "0")
    //     }`;

    //     if (form.date && form.date !== localToday) {
    //         newErrors.date = 'You can only create an entry for today';
    //     }  
        
        
        if (!form.date) {newErrors.date = 'Please select a date.';}
		if (!form.title.trim())  {newErrors.title = 'Title is required';}
        if (!form.imgUrl.trim())  {newErrors.imgUrl = 'Image is required';}
        if (!form.content.trim())  {newErrors.content = 'Please write some content!';}
    
        /// UNCOMMENT once EntryContext is finished

    //     const entryExists = entries.some(  
    //     (entry) => entry.date === form.date
    // );

    // if (form.date && entryExists) {
    //     newErrors.date =
    //         "You've already written today's entry. Come back tomorrow!";
    // }

         return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return; // stop here, don't accept the submission
         }

        setErrors({});   // clear any old errors
       // addEntry(form); // NEEDS CODE FOR ADDING / localStorage!!  

       // closeModal(); // OR DO I WANT A SUCCESS MESSAGE Shown and people have to click X button to exit?
         console.log('Entry submitted:', form);
    };

    const handleChange = (e) => { //copied this from the react form workshop
        const { name, value } = e.target;
        setForm((prev) => ({
           ...prev, 
           [name]: value,
        }));
    };

    return (
            <div className="">
        <form className="w-full"
        onSubmit={handleSubmit}>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend"></legend>
                <legend className="fieldset-legend">Date</legend>
                <input 
                    className="input"
                    onChange={handleChange} 
                    value={form.date}
                    name='date'
                    type='date'
                />
                {errors.date && <p className="text-pink-600">{errors.date}</p>}
                <legend className="fieldset-legend">Title</legend>
                <input 
                    className="input w-full"
                    onChange={handleChange}
                    value={form.title}
                    name='title'
                    type='text'
                    placeholder="title..."
                />
                 {errors.title && <p className="text-pink-600">{errors.title}</p>}
                <legend className="fieldset-legend">Image Url</legend>
                <input 
                    className="input w-full"
                    onChange={handleChange}
                    value={form.imgUrl}
                    name='imgUrl'
                    type='url'
                    placeholder="Add an Image via https://"
                />
                 {errors.imgUrl && <p className="text-pink-600">{errors.imgUrl}</p>}
                    <legend className="fieldset-legend">Content</legend>
                <textarea 
                    className="textarea h-24 w-full"
                    onChange={handleChange}
                    value={form.content}
                    name='content'
                    placeholder="Write some words about your day..."
                />
                 {errors.content && <p className="text-pink-600">{errors.content}</p>}
            <button type='submit' className="btn btn-soft btn-secondary w-1/3 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                Add entry</button>
                    </fieldset>
        </form>
        </div>
    );
};

export default AddEntryForm;