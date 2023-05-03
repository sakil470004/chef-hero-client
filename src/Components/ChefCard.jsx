import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import LoveIcon from '../assets/icons/LoveIcon';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <h4><LoveIcon className="me-2" /> {chef.likes}</h4>
                    <Link to={`/chef/${id}`}><Button
                        className='mt-2 w-100'
                        variant="outline-secondary">
                        View Recipes
                    </Button></Link>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ChefCard;