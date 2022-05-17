import './effects.css'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import  Logo from '../img/gif/LOGO6.png';
import Imglogo from '../img/gif/logomelan.gif'
import banana from '../img/gif/whithe/banana.gif'
import morango from '../img/gif/whithe/morango.gif'
import maca from '../img/gif/whithe/maca.gif'
import grama from '../img/gif/grama3.png'

//import back from '../img/back/4.png'

const Links = ['Home', 'Carrinho'];

const NavLink = ({ children }) => (
  <Link
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white.', )} px={4} className="navbar" > 
        <Flex marginLeft={600}  h={526} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
      <HStack alignItems={'center'}>
                              <Box  display={'flex'}  alignItems={'center'}>
                                <img src={Logo} alt="logo" width={'900px'} position="absolute"/>
                                <img src={Imglogo} className='logo' alt="logo" width={'400px'} />
                                </Box>
                                      <Box  display={'flex'}  alignItems={'center'} position='absolute' top={280} left={510}>
                                    <img src={maca} alt="logo" width={'300px'} position="absolute"/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'} position='absolute' top={290} left={190}>
                                    <img src={morango} alt="logo" width={'308px'} position="absolute"/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'} position='absolute' top={300} left={420}>
                                    <img src={banana} alt="logo" width={'180px'} position="absolute"/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' left={300} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'780px'}height={'1780px'}/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' left={1000} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'780px'}height={'1780px'}/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' left={1700} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'780px'}height={'1780px'}/>
                              </Box>
                              <Box  display={'flex'}  alignItems={'center'}  position='absolute' right={1700} top={435} >
                                    <img src={grama} alt="logo" position="absolute"width={'780px'}height={'1780px'}/>
                              </Box>
                              <HStack
                                as={'nav'}
                                spacing={10}
                                display={{ base: 'none', md: 'flex'}}
                                color={'green'}
                                fontSize='40px'
                                >
                                {Links.map((link) => (
                                  <NavLink key={link}>{link}</NavLink>
                                ))}
                                
                              </HStack>                      
      </HStack>
          <Flex alignItems={'center'}>
                  <Menu>
                       <MenuButton
                                  as={Button}
                                  rounded={'full'}
                                  variant={'link'}
                                  cursor={'pointer'}
                                  minW={280}
                                  width={10}>
                       <Avatar size={'sm'}
                      src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'} />
                      </MenuButton>
                   <MenuList>
                   <MenuItem>Home</MenuItem>
                   <MenuItem >Carrinho</MenuItem>
                  </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}