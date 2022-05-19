
import Cart from './Cart';
import propaganda from '../img/gif/prop.gif'
import carrinho from "../img/carrinho.png"
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import {  Link as ReachLink } from 'react-router-dom';




  export default function Main() {
    return (
     <><Box textAlign="center" py={10} px={6}>
     <Heading
       display="inline-block"
       as="h2"
       size="2xl"
       bgGradient="linear(to-r, teal.400, teal.600)"
       backgroundClip="text">
Ops     </Heading>
     <Text fontSize="18px" mt={3} mb={2}>
     Seu Carrinho está Vazio     </Text>
     <Text color={'gray.500'} mb={6}>Vamos fazer umas comprinhas ?

     </Text>

     <Button
      as={ReachLink} to='/home'
       colorScheme="teal"
       bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
       color="white"
       variant="solid">
      Fazer Compras
     </Button>
   </Box>
      <Cart></Cart>
      <Box alignItems={'center'} justifyContent={'center'}
      > <img src={propaganda} w={'280px'}  alt="logo" position="absolute"/> </Box>
    </>
    )
  }
