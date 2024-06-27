
import { Component } from 'react';
import Container from '@mui/material/Container';
import { Box, ListItem, ListItemText, IconButton, } from '@mui/material';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    description: string;
    images: string;
    price:number;
 
}

interface State {
    data: Product[];
    favorites: number[];
    count:number;
}

export default class Ecommerce extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: [],
            favorites: [],
            count:1,

        };
    }

    componentDidMount(): void {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                this.setState({ data: response.data.products });
                console.log(response)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    favouriteItem = (id: number) => {
        this.setState(pre => {
            const Fav = pre.favorites.includes(id);
            console.log(Fav)
            return {
                favorites: Fav ? pre.favorites.filter(favId => favId !== id) : [...pre.favorites, id]

            }
        });

    }
    increment=()=>{
       
        this.setState({count:this.state.count+1});
        console.log('increment')
    }

    render() {
        const { data, favorites } = this.state;
        return (
            <>
                <Box sx={{ backgroundColor: 'skyblue', width: 'full', height: '10vh' }}>
                    <Box>
                        <Container sx={{ height: '10vh' }}>
                            <ListItem>
                                <ListItemText> E-commerce</ListItemText>
                                <ListItemText sx={{ paddingLeft: '10rem' }}> Login</ListItemText>
                                <ListItemText> Add to cart</ListItemText>
                                <ListItemText> Favourite</ListItemText>
                            </ListItem>
                        </Container>
                    </Box>
                    <img style={{ marginTop: '10px', width: '99.7%' }} alt="" src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" />
                </Box>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '15rem' }}>

                    {
                        data.map((item, index) => {
                            return <div key={index} style={{ height: '450px', width: '300px', border: '2px solid black', marginTop: '10px' }}>
                                <img style={{ height: '30vh', width: '20vw' }} src={item.images[0]} alt="" />
                                <h3>ID:{item.id}</h3>
                                <h3>Title:{item.title}</h3>
                                <h3>price:{item.price}</h3>

                                <Button variant="contained" color="success">Add to cart</Button>
                                <h2>{this.state.count}</h2>
                                <IconButton onClick={() => this.favouriteItem(item.id)}>
                                    {favorites.includes(item.id) ? (
                                        <FavoriteIcon color="error" />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </IconButton>

                            </div>
                        })
                    }
                </div>

            </>
        );
    }
}
