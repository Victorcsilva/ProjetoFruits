import React from 'react'
import {
  /*Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,*/
  Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
/*{
function ModalButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Finalizar compra</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ModalButton}*/

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
