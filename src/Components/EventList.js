import { Link } from 'react-router-dom';


const EventList = (props) => {
  const events = props.events || [];
  return (      
    <div className='event-list'>
      {events.map((event) => (
        <div className='event-preview' key={event.id}>
          <Link to={`/Events/${event.id}`}>
            <h1>{event.title}</h1>
            <p>
              {event.location}
              <br />
              {event.date}
              <br />
            </p>
          </Link>

          
        </div>
      ))}
    </div>
    
  );
};

export default EventList;
