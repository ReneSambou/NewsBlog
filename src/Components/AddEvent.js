import { useState } from "react";
import { database,  } from "../firebaseConfig";
import { ref, set, push } from "firebase/database";
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/event.json';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setIsPending(true); // Set pending state to true
        const newDocRef = push(ref(database, "blog/news"));
        set(newDocRef, {
            title,
            description,
            organiser,
            location,
            date
        }).then(() => {
            setIsPending(false); // Set pending state to false after successful write
            // Optionally, reset form fields
            setTitle('');
            setDescription('');
            setOrganiser('');
            setLocation('');
            setDate('');
        }).catch((error) => {
            console.error("Error adding document: ", error);
            setIsPending(false); // Set pending state to false on error
        });
    };

    return (
        <div className="add-event-container">
            <div className='event-lottie'>
                <Lottie animationData={animationData} />
            </div>
            <div className="create">
                <h2>Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label>Article</label>
                    <textarea required value={description} onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '500px', height: '200px', padding: '10px', fontSize: '16px' }}
                    ></textarea>

                    <label>Writer</label>
                    <input type="text" required value={organiser} onChange={(e) => setOrganiser(e.target.value)} />

                    <label>Category</label>
                    <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

                    <label>Date</label>
                    <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />

                    {!isPending && <button>Publish</button>}
                    {isPending && <button disabled>Adding Article</button>}
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
