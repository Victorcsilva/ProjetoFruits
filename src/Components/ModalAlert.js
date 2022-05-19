import React from 'react'
import {
  Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

function AlertModal() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  return isVisible ? (
    <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
    Parabéns!!COMPRA REALIZADA COM SUCESSO !  </AlertTitle>
    <AlertDescription maxWidth='sm'>
   Em breve estaremos entregando suas frutas
    </AlertDescription>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>FINALIZAR COMPRA</Button>
  )
}

export default AlertModal
