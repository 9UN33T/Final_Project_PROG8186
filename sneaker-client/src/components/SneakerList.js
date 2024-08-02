import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const SneakerList = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const { data } = await axios.get('http://localhost:5005/api/sneakers');
        setSneakers(data);
      } catch (error) {
        console.error('Error fetching sneakers:', error);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {sneakers.map(sneaker => (
          <div className="col-md-4" key={sneaker._id}>
            <Card>
              <Card.Img variant="top" src={sneaker.imageUrl} />
              <Card.Body>
                <Card.Title>{sneaker.name}</Card.Title>
                <Card.Text>{sneaker.description}</Card.Text>
                <Button as={Link} to={`/sneaker/${sneaker._id}`} variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SneakerList;
