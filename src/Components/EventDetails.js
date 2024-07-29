import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/loading.json';
import { database } from "../firebaseConfig";
import { ref, get } from "firebase/database";
import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
  WhatsappShareButton, WhatsappIcon
} from 'react-share';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventRef = ref(database, `blog/news/${id}`);
    get(eventRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEvent(snapshot.val());
          setIsPending(false);
        } else {
          setError('Event not found');
          setIsPending(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
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

  return (
    <div className='event-details'>
      {isPending && <div><Lottie animationData={animationData} style={style} /></div>}
      {error && <div>{error}</div>}
      {event && (
        <article>
          <h2 className='event-title'>{event.title}</h2>
          <p style={textstyle}>Written by {event.organiser}</p>
          <p style={textstyle}>{event.location}</p>
          <p style={textstyle}>{event.date}</p>
          <div>{event.description}</div>
          <div className="shareButtons">
            <FacebookShareButton url={`${window.location.origin}/event/${id}`} quote={event.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={`${window.location.origin}/event/${id}`} title={event.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={`${window.location.origin}/event/${id}`} title={event.title} summary={event.description}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={`${window.location.origin}/event/${id}`} title={event.title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </article>
      )}
    </div>
  );
};

export default EventDetails;
