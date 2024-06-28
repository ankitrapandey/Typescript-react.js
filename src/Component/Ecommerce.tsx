
import  { Component } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

interface State {
  data: Product[];
  favorites: number[];
}

export default class Ecommerce extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      favorites: [],
    };
  }

  componentDidMount() {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        this.setState({ data: response.data.products });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  favouriteItem = (id: number) => {
    this.setState(prevState => {
      const isFav = prevState.favorites.includes(id);
      return {
        favorites: isFav ? prevState.favorites.filter(favId => favId !== id) : [...prevState.favorites, id],
      };
    });
  }

  render() {
    const { data, favorites } = this.state;
    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '2rem' }}>
          {data.map((item, index) => (
            <div key={index} style={{ height: '450px', width: '300px', border: '2px solid black', marginTop: '10px' }}>
              <IconButton onClick={() => this.favouriteItem(item.id)}>
                {favorites.includes(item.id) ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <Link to={`/productdetail/${item.id}`}>
                <div>
                  <img style={{ height: '30vh', width: '20vw' }} src={item.images[0]} alt={item.title} />
                </div>
              </Link>
              <h3>ID: {item.id}</h3>
              <h3>Title: {item.title}</h3>
              <h3>Price: {item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
