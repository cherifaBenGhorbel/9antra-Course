import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';
import React from 'react';
import LOGO from '../assets/logo.png';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const primaryColor = useColorModeValue('#b5356a', '#0068fa');
  const secondaryColor = useColorModeValue('#ffba59', '#61f2d5');
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box
      as="nav"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top="0"
      zIndex="50"
      backdropFilter="blur(10px)"
      backgroundColor={useColorModeValue(
        'rgba(255, 255, 255, 0.9)',
        'rgba(26, 32, 44, 0.9)'
      )}
    >
      <Container maxW="7xl">
        <Flex
          h="20"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex 
            alignItems="center"
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-2px',
              left: '0',
              width: '0%',
              height: '2px',
              backgroundColor: primaryColor,
              transition: 'width 0.3s ease',
            }}
            _hover={{
              _after: {
                width: '100%',
              }
            }}
          >
          <img
            src={LOGO}
            alt="Logo"
            style={{
              height: "80px",
              width: "auto",
              transition: "all 0.2s ease-in-out",
              filter:
                colorMode === "dark" ? "invert(1) brightness(1.5)" : "none",
            }}
          />
          </Flex>

          <HStack spacing={4}>
            <IconButton
              icon={colorMode === 'light' 
                ? <Moon size={20} /> 
                : <Sun size={20} />
              }
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle color mode"
              size="lg"
              rounded="full"
              color={primaryColor}
              transition="all 0.3s"
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
                transform: 'rotate(15deg)',
                color: secondaryColor,
              }}
              _active={{
                bg: useColorModeValue('gray.200', 'gray.600'),
                transform: 'scale(0.95)',
              }}
              sx={{
                '& svg': {
                  transition: 'transform 0.3s ease',
                },
                '&:hover svg': {
                  transform: 'rotate(360deg)',
                }
              }}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;