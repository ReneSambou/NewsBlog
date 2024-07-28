import { useState } from "react";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/event.json';


const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {title, description, organiser, location, date}


        setIsPending(true);
        fetch('https://jsonbin.io/app/bins/66a64a05ad19ca34f88df73f', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(event)
        }).then(() => {
            setIsPending(false);
        })
        
    }

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
                <Link to = "/Event">{isPending && <button disabled>Adding Event</button>}</Link>

            </form>
        </div>
        </div>
    )
}

export default AddEvent;