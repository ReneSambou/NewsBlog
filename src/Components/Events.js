import EventList from "./EventList";
import { useState, useEffect } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const eventsRef = ref(database, "blog/news");
        onValue(eventsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const eventsArray = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value
                }));
                setEvents(eventsArray);
            }
        });
    }, []);

  return (
    <>
    <h2>All Blogs</h2>
    <div className="event-page">
      <EventList events={events}/>
    </div>
    </>
  )
} 

export default Events;