
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
      <GridItem rowSpan={2} colSpan={1} bg='white'> 
      <Cart marginTop={190}></Cart>
      </GridItem>  
      <GridItem display={'flex'} colSpan={4} bg='white'>{data.fruitsdata.map((item,index)=>{
                return(
                  <CardFruit 
                   defaultValue={item.price} 
                   image={item.image} 
                   title={item.title} 
                   desc={item.desc} 
                   price={item.price}
                   unit={item.unit} 
                   item={item} 
                   key={index} />)
               })}  
      </GridItem>
      <GridItem colSpan={4} ><img src={propaganda} w={'280px'} alt="logo" position="absolute"/></GridItem>   
    </Grid>

    )
  }
