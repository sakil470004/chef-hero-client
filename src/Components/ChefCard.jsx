import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import LoveIcon from '../assets/icons/LoveIcon';
import { Button } from 'react-bootstrap';

function ChefCard({ id }) {
    const [chef, setChef] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={chef?.imageLink} />
                <Card.Body>
                    <Card.Title>{chef?.chefName}</Card.Title>
                    <Card.Text>
                        <small>Hi I am  
                        <span className='text-danger'> {chef.chefName}</span>
                        . Good to See you here, I have <span className='text-danger'> {chef.yearOfExperience}</span> year Experience.</small>
                    </Card.Text>
                    <h4><LoveIcon className="me-2"/> {chef.likes}</h4>
                    <Button variant="outline-secondary"></Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ChefCard;