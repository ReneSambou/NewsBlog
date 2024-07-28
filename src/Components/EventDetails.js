import { useParams } from 'react-router-dom';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/loading.json';
import useFetch from './useFetch';
import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
  WhatsappShareButton, WhatsappIcon
} from 'react-share';

const EventDetails = () => {
  const { id } = useParams();
  const {
    data: event,
    error,
    isPending,
  } = useFetch('http://localhost:8001/events/' + id);

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
            <FacebookShareButton url={`${window.location.origin}/Event/${id}`} quote={event.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={`${window.location.origin}/Event/${id}`} title={event.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={`${window.location.origin}/Event/${id}`} title={event.title} summary={event.description}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={`${window.location.origin}/Event/${id}`} title={event.title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </article>
      )}
    </div>
  );
};

export default EventDetails;
