
import  { Component } from 'react';
import axios from 'axios';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

interface Props {
  id: string;
}

interface State {
  product: Product | null;
  cart: { product: Product; quantity: number }[];
}

class ProductDetail extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      product: null,
      cart: [],
    };
  }

  componentDidMount(): void {
    const { id } = this.props;
    axios.get<Product>(`https://dummyjson.com/products/${id}`)
      .then(response => {
        this.setState({ product: response.data });
   
 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // componentDidUpdate(prevProps: Props): void {
  //   if (prevProps.id !== this.props.id) {
  //     this.componentDidMount();
  //   }
  // }

  

  addToCart = (): void => {
    const { product, cart } = this.state;
    if (product) {
      const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
        this.setState({ cart: updatedCart });
      } else {
        this.setState({ cart: [...cart, { product, quantity: 1 }] });
      }
    }
  };

  incrementQuantity = (productId: number): void => {
    this.setState((prevState) => ({
      cart: prevState.cart.map(item =>
        item.product.id === productId ? { ...item, quantity: item.quantity += 1 } : item
      ),
    }));
  };

  decrementQuantity = (productId: number): void => {
    this.setState((prevState) => ({
      cart: prevState.cart
        .map(item =>
          item.product.id === productId ? { ...item, quantity: item.quantity -= 1 } : item
        )
        .filter(item => item.quantity > 0),
    }));
  };

  removeFromCart = (productId: number): void => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter(item => item.product.id !== productId),
    }));
  };

  render() {
    const { product, cart } = this.state;

    if (!product) {
      return <Typography variant="h6">Product not found</Typography>;
    }

    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
      <Box display="flex" justifyContent="space-around" style={{ marginTop: '1rem', padding: '1rem' }}>
        <Box style={{ border: '2px solid skyblue', padding: '1rem' }}>
          <img src={product.images[0]} alt={product.title} style={{ width: '20vw', height: '30vh' }} />
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="h6">Price: ${product.price}</Typography>
          <IconButton color="primary" onClick={() => this.incrementQuantity(product.id)}>
            <AddIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={this.addToCart}>
            Add to Cart
          </Button>

          <IconButton color="secondary" onClick={() => this.decrementQuantity(product.id)}>
            <RemoveIcon />
          </IconButton>
        </Box>
        <Box style={{ border: '2px solid skyblue', width: '48%', padding: '1rem' }}>

          {cart.length === 0 ? (
            <Typography variant="body1">Cart</Typography>
          ) : (
            cart.map((item) => (
              <Box key={item.product.id} style={{ marginBottom: '1rem' }}>

                <Typography variant="body1">Price: ${item.product.price}</Typography>
                <Typography variant="body1">Quantity: {item.quantity}</Typography>
                <Box display="flex" alignItems="center">


                  <Button variant="contained" color="secondary" onClick={() => this.removeFromCart(item.product.id)}>
                    Remove
                  </Button>
                </Box>
              </Box>
            ))
          )}
          <Typography variant="h6">Total Price: ${totalPrice}</Typography>
        </Box>
      </Box>
    );
  }
}

export default function ProductDetailWrapper() {
  const { id } = useParams<{ id: string }>();
  return <ProductDetail id={id!} />;
}



