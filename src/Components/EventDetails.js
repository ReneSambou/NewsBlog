import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/loading.json';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://username.github.io/repository-name/db.json');
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched events:", data); // Debug log
          if (data.events && Array.isArray(data.events)) { // Ensure events is an array
            const foundEvent = data.events.find(event => event.id === id);
            if (foundEvent) {
              setEvent(foundEvent);
            } else {
              setError("Event not found");
            }
          } else {
            setError("Fetched data is not an array");
          }
        } else {
          setError("Failed to fetch events");
        }
      } catch (err) {
        setError("Failed to fetch events");
      } finally {
        setIsPending(false);
      }
    };

    fetchEvents();
  }, [id]);

  const style = {
    width: '25%',
    height: '50%',
    marginLeft: '40%',
    marginTop: '30%'
  };

  const textstyle = {
    fontWeight: 'Bold'
  };

  const url = `${window.location.origin}/Event/${id}`;

  return (
    <div className='event-details'>
      {isPending && <div><Lottie animationData={animationData} style={style} /></div>}
      {error && <div>{error}</div>}
      {event && (
        <article>
          <h2 className='event-title'>{event.title}</h2>
          <p style={textstyle}>{event.location}</p>
          <p style={textstyle}>{event.date}</p>
          <div>{event.description}</div>
        </article>
      )}

      <div className="shareButtons">
        <FacebookShareButton url={url} quote={event?.title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={event?.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={event?.title} summary={event?.description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={url} title={event?.title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default EventDetails;
