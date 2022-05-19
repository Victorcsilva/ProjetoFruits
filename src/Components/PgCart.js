
import { Grid, GridItem  } from '@chakra-ui/react';
import CardFruit from './CardFruit';
import data from './Fruit';
import Cart from './Cart';
import propaganda from '../img/gif/prop.gif'
import carrinho from "../img/carrinho.png"



  export default function Main() {
    return (
      <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >      
      <GridItem display={'flex'} colSpan={4} bg='white'>
      <Cart></Cart>
      <img src={carrinho} alt="logo" top={1000} width={'780px'}height={'1780px'}/>
      </GridItem>
      <GridItem colSpan={4} ><img src={propaganda} w={'280px'} alt="logo" position="absolute"/></GridItem>   
    </Grid>
    )
  }
