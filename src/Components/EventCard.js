import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const EventCard = (props) => {
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description} 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.location}</ListGroup.Item>
            <ListGroup.Item>{props.date}</ListGroup.Item>
            <ListGroup.Item>{props.time}</ListGroup.Item>
          </ListGroup>
        </Card>
    )
}

export default EventCard;