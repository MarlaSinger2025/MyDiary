import { useState } from "react";

const EntryForm = () => {

    const [form, setForm] = useState({
        date: '',
        title:'',
        imgUrl:'',
        content: ''
         });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {}; 

    const today = new Date();

        const localToday =
         `${today.getFullYear()}-${
            String(today.getMonth() + 1).padStart(2, "0")
        }-${
            String(today.getDate()).padStart(2, "0")
        }`;

        if (form.date && form.date !== localToday) {
            newErrors.date = 'You can only create an entry for today';
        }     
        
		if (!form.title.trim())  {newErrors.title = 'Title is required';}
        if (!form.imgUrl.trim())  {newErrors.imgUrl = 'Image is required';}
        if (!form.content.trim())  {newErrors.content = 'Please write some content!';}
    
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
            <div className="card-body">
            <h2>Add a new diary entry for today</h2>
        <form className="flex flex-col gap-4"
        onSubmit={handleSubmit}>
            <label>
                <span>Date:</span>
                <input 
                    onChange={handleChange}
                    value={form.date}
                    name='date'
                    type='date'
                />
                {errors.date && <p>{errors.date}</p>}
            </label>
            <label>
                <span>Title:</span>
                <input 
                    onChange={handleChange}
                    value={form.title}
                    name='title'
                    type='text'
                />
                 {errors.title && <p>{errors.title}</p>}
            </label>
            <label>
                <span>Image Url:</span>
                <input 
                    onChange={handleChange}
                    value={form.imgUrl}
                    name='imgUrl'
                    type='text'
                />
                 {errors.imgUrl && <p>{errors.imgUrl}</p>}
            </label>
            <label>
                <span>Content:</span>
                <textarea 
                    onChange={handleChange}
                    value={form.content}
                    name='content'
                />
                 {errors.content && <p>{errors.content}</p>}
            </label>
            <button type='submit' className="btn btn-soft btn-accent">Add entry</button>
        </form>
        </div>
    );
};

export default EntryForm;