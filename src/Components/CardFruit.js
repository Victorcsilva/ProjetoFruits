import {
Box,
Button,
Image,
  } from '@chakra-ui/react';
import {useCart} from 'react-use-cart';
import React from 'react';
const CardFruit = (props) =>{
const {addItem} = useCart ();
  console.log (props.price)
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={props.image} alt={props.image} />
            <Box className='text'>R${props.price}{props.unit}</Box>

            <Box display='flex' mt='2' alignItems='center' justifyContent={'center'}>
             <Box
               mt='1'
               fontWeight='semibold'
               as='h4'
               lineHeight='tight'
              noOfLines={1}>

              <p>{props.title}</p>
             </Box>
                {props.des}
            <Box as='span' color='gray.600' fontSize='sm'></Box>
   </Box>

  <Button onClick={() =>addItem (props.item)}
      size='md'
      height='48px'
      width='200px'
      border='2px'
      borderColor='green.500'
    > Adicionar</Button>
 </Box>
  )
}    

export default CardFruit