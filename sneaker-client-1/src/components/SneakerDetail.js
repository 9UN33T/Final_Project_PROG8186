import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const SneakerDetail = ({ match }) => {
  const [sneaker, setSneaker] = useState({});

  useEffect(() => {
    const fetchSneaker = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/sneakers/${match.params.id}`);
        setSneaker(data);
      } catch (error) {
        console.error('Error fetching sneaker:', error);
      }
    };
    fetchSneaker();
  }, [match.params.id]);

  return (
    <div className="container">
      <Card>
        <Card.Img variant="top" src={sneaker.imageUrl} />
        <Card.Body>
          <Card.Title>{sneaker.name}</Card.Title>
          <Card.Text>{sneaker.description}</Card.Text>
          <Card.Text>Category: {sneaker.category}</Card.Text>
          <Card.Text>Price: ${sneaker.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SneakerDetail;
