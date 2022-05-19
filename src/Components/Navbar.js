import './effects.css'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import  Logo from '../img/gif/LOGO6.png';
import Imglogo from '../img/gif/logomelan.gif'
import banana from '../img/gif/whithe/banana.gif'
import coco from '../img/gif/whithe/coco.gif'
import morango from '../img/gif/whithe/morango.gif'
import maca from '../img/gif/whithe/maca.gif'
import grama from '../img/gif/grama3.png'
import arvore from '../img/gif/arvore.gif'

import {  Link as ReachLink } from 'react-router-dom';
//import back from '../img/back/4.png'

export default function Simple() {
 
  return (
    <>
      <Box bg={useColorModeValue('white.', )} px={4} className="navbar" > 
        <Flex marginLeft={600}  h={526} alignItems={'center'} justifyContent={'space-between'}>
      <HStack alignItems={'center'} >
                              <Box  display={'flex'}  alignItems={'center'}>
                                <img src={Logo} alt="logo" width={'900px'} position="absolute"/>
                                <img src={Imglogo} className='logo' alt="logo" width={'400px'} />
                                </Box>
                                <Box className='image' display={'flex'} flexWrap={'wrap'} maxWidth="1975">
                               <Box  display={'flex'}  alignItems={'center'} position='absolute' top={280} left={610}>
                                   <img src={coco} alt="logo" width={'180px'} position="absolute"/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'} position='absolute' top={270} left={190}>
                                    <img src={morango} alt="logo" width={'308px'} position="absolute"/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'} position='absolute' top={300} left={420}>
                                    <img src={banana} alt="logo" width={'180px'} position="absolute"/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'} position="absolute"right={523} top={230} >
                                    <img src={maca} alt="logo"  width={'300px'} left={100} />
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'} position="absolute"left={1300} top={8} >
                                    <img src={arvore} alt="logo" width={'480px'} left={100} />
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' left={300} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'780px'}height={'1780px'}/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' left={1000} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'680px'}/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' left={1400} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'880px'}/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' right={1200} top={431} >
                                    <img src={grama} alt="logo" position="absolute"width={'880px'}/>
                              </Box>
                             
                              </Box>
                       
      </HStack>
      <Flex alignItems={'center'} displa={Flex} flexWrap={'wrap'}>
                  <Menu>
                        <MenuButton
                                          as={Button}
                                          rounded={'full'}
                                          variant={'link'}
                                          cursor={'pointer'}
                                          minW={20}
                                          width={10}
                                          right={400}>
                              <Avatar size={'80'}
                              src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'} />
                        </MenuButton>
                        <MenuList>
                              <MenuItem  as={ReachLink} to='/home' >Home</MenuItem>
                              <MenuItem  as={ReachLink} to='/cart'>Carrinho</MenuItem>
                        </MenuList>
                 </Menu>
          </Flex>
        </Flex>     
      </Box>
    </>
  );
}