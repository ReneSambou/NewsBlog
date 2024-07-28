import { useState, useEffect } from "react";
import EventList from "./EventList";

const Events = () => {

  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch('https://jsonbin.io/app/bins/66a6472bacd3cb34a86c713f')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setEvents(data);
    });
  }, [])
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