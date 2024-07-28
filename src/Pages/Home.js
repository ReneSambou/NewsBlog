import Carousel from 'react-bootstrap/Carousel';
import a from '../Components/Assets/a.jpg';
import b from '../Components/Assets/b.jpg';
import c from '../Components/Assets/c.jpg';
import d from '../Components/Assets/d.jpg';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/welcome4.json';
import Button from 'react-bootstrap/Button';
import EventCard from '../Components/EventCard';
import { Link } from 'react-router-dom';


const allEvents = [
  {
    img: a,
    title: 'Young Achievers Conference',
    description:
      'The YAC is the biggest conference for young brilliant individuals',
    location: 'Tema, Community 9',
    date: '24th February 2024',
    time: '10:00am',
  },

  {
    img: b,
    title: 'Heat DJ fest',
    description: 'Experience a world where the music never stops.',
    location: 'Accra',
    date: '13th February 2024',
    time: '10:00am',
  },

  {
    img: c,
    title: 'Cloud 9',
    description: 'Cloud 9 offers ravers the wildest experiences ever',
    location: 'Osu Oxford Street',
    date: '6th February 2024',
    time: '10:00pm',
  },

  {
    img: c,
    title: 'Around THe World Tour',
    description: 'Joins us as we travel across Europe in 3 weeks',
    location: 'Europe',
    date: '9th March 2024',
    time: '9:00am',
  },
];

const Home = () => {
  console.log('error');
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          fontStyle: 'bold',
          fontFamily: 'cursive',
        }}
      >
        <Carousel interval={2500}>
          <Carousel.Item>
            <img
              className='d-block w-100 mx-auto'
              src={a}
              alt='First slide'
              style={{ maxHeight: '500px' }}
            />
            <Carousel.Caption>
              <h3>Highlights</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 mx-auto'
              src={b}
              alt='Second slide'
              style={{ maxHeight: '500px' }}
            />
            <Carousel.Caption>
              <h3>Highlights</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 mx-auto'
              src={c}
              alt='Second slide'
              style={{ maxHeight: '500px' }}
            />
            <Carousel.Caption>
              <h3>Highlights</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 mx-auto'
              src={d}
              alt='Second slide'
              style={{ maxHeight: '500px' }}
            />
            <Carousel.Caption>
              <h3>Highlights</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='home-container'>
        <div className='home-text'>
          <h1>WELCOME TO MUSE</h1>
          <p>
            A reliable place to gain insight
            <br />
            An everyday blog
          </p>
          <Link to="/Event"><Button variant='primary' size='lg'>
            Start Reading
          </Button>
         </Link>
        </div>
        <div className='home-lottie'>
          <Lottie animationData={animationData} />
        </div>
      </div>

      <div className='latest-event'>
        <h6>GLIMPSE OF </h6>
        <h1>LATEST EVENTS</h1>
      </div>

      <div className='latest-card-container'>
        {allEvents.map((event) => {
          return (
            <div>
              <EventCard
                key={event.title}
                img={event.img}
                description={event.description}
                location={event.location}
                title={event.title}
                time={event.time}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
