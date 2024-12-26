import React, { useState } from 'react';
import {
  Box,
  VStack,
  Icon,
  Text,
  Flex,
  IconButton,
  useColorModeValue,
  Tooltip,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useBreakpointValue
} from '@chakra-ui/react';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const primaryColor = useColorModeValue('#b5356a', '#0068fa');
  const secondaryColor = useColorModeValue('#ffba59', '#61f2d5');
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.100', 'gray.800');
  
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/dashboard' },
  ];

  const SidebarContent = () => (
    <VStack
      h="full"
      w={isCollapsed ? '16' : '64'}
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      py={4}
      spacing={4}
      align="stretch"
      transition="width 0.2s"
    >
      {!isMobile && (
        <Flex justify={isCollapsed ? 'center' : 'flex-end'} px={4}>
          <IconButton
            aria-label={isCollapsed ? 'Expand' : 'Collapse'}
            icon={isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            onClick={() => setIsCollapsed(!isCollapsed)}
            variant="ghost"
            color={primaryColor}
            _hover={{ color: secondaryColor }}
          />
        </Flex>
      )}

      <VStack spacing={2} align="stretch">
        {menuItems.map((item) => (
          <Tooltip
            key={item.label}
            label={isCollapsed ? item.label : ''}
            placement="right"
            isDisabled={!isCollapsed}
          >
            <Flex
              px={4}
              py={3}
              cursor="pointer"
              role="group"
              align="center"
              transition="all 0.2s"
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
                color: primaryColor
              }}
            >
              <Icon
                as={item.icon}
                boxSize={5}
                color={primaryColor}
                _groupHover={{ color: secondaryColor }}
              />
              {!isCollapsed && (
                <Text ml={4} fontSize="md">
                  {item.label}
                </Text>
              )}
            </Flex>
          </Tooltip>
        ))}
      </VStack>
    </VStack>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          aria-label="Open Menu"
          icon={<Menu size={24} />}
          onClick={onOpen}
          position="fixed"
          left={4}
          top={4}
          zIndex="overlay"
          color={primaryColor}
          variant="ghost"
        />
        
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent />
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return <SidebarContent />;
};

export default Sidebar;