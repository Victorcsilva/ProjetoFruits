
import {
    Box,
    Flex, 
  } from '@chakra-ui/react';
  import CardFruit from './CardFruit';
  import data from './Fruit';
  import Cart from './Cart';

  export default function Main() {
    return (
     <Flex  display='flex' h='500' className='backmain' >
           {data.fruitsdata.map((item,index)=>{
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
              <Box w='840px' h='990px' bg='green '>
      <Cart></Cart>          
    </Box>

     </Flex>
        
      
    )
  }
