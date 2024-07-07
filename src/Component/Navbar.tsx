

import React, { Component } from 'react';
import Container from '@mui/material/Container';
import { Box, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface State {
  currentImage: number;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
}

export default class Ecommerce extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentImage: 0,
    
    };
  }

  images = [
    {
      id: 1,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20',
    },
    {
      id: 2,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20',
    },
  ];

  nextImage = () => {
    this.setState(prevState => ({
      currentImage: (prevState.currentImage + 1) % this.images.length,
    }));
  }

  componentDidMount(): void {
    setInterval(this.nextImage, 1000);
  }

  render() {
    const { currentImage} = this.state;
    const current = this.images[currentImage].image;

    return (
      <>
        <Box sx={{ backgroundColor: 'skyblue', width: 'full', height: '10vh' }}>
          <Container sx={{ height: '10vh' }}>
            <ListItem>
              <ListItemText><Link to={'/ecommerce'}>E-commerce</Link></ListItemText>
              <ListItemText sx={{ paddingLeft: '10rem' }}>Login</ListItemText>
              <ListItemText><Link to="/cart">Add to cart</Link></ListItemText>
              <ListItemText>Favourite</ListItemText>
            </ListItem>
          </Container>
        </Box>
        <img style={{ marginTop: '10px', height: '30vh', width: '99vw' }} alt="" src={current} />
      </>
    );
  }
}

