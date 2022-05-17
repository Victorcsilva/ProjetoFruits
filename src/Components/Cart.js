import React from 'react'
import { useCart } from 'react-use-cart'
import { VStack,StackDivider,Box,Button} from '@chakra-ui/react'

const Cart = () => {
    const {
     items,
     isEmpty,
     totalUniqueItems,
     totalItems,
     cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
                    } = useCart();
if (isEmpty) return <h1 className='text'>Carrinho de Compra</h1>
    return (
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        justifyContent={'center'} alignItems={'center'}
 >
        <Box  className='text'  justifyContent={'center'} alignItems={'center'} h='890px' bg='white'>
            Carrinho de Compras({totalUniqueItems})
          {items.map((item,index)=>{
              return (
                      <tr key={index}>{item.title}
                 <img src={item.image} style={{height:'6rem'}} borderColor={'green'} />
     
                         
                     <td className='text'> Quantidade ({item.quantity})
                       <Button onClick={() =>updateItemQuantity  (item.id, item.quantity -1)}
                         size='md'
                         height='48px'
                         width='40px'
                         border='2px'
                         borderColor='green.500'> -
                         </Button>
                    
                       <Button onClick={() =>updateItemQuantity  (item.id, item.quantity +1)}
                         size='md'
                         height='48px'
                         width='40px'
                         border='2px'
                         borderColor='green.500'>+
                         </Button>
                         <Button onClick={() =>removeItem  (item.id)} 
                         size='md'
                         height='48px'
                         width='200px'
                         border='2px'
                         borderColor='green.500'>Remover item 
                         </Button>
                         
                         </td>
                     </tr>
              )   
                 })}

          <h2>Total Items:({totalItems})</h2> 
          <h2>Valor Total:R$ {cartTotal}</h2>
          <Button onClick={() => emptyCart()} 
                         size='md'
                         height='48px'
                         width='200px'
                         border='2px'
                         borderColor='green.500'>Limpar Carrinho
        </Button>
        </Box>        
 </VStack>
    )
  }

export default Cart