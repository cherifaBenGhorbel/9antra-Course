import { Button, Heading, HStack } from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import React from 'react';

const HeaderSection = ({ primaryColor, secondaryColor }) => (
  <HStack justify="space-between" wrap="wrap" gap={4}>
    <Heading
      size="2xl"
      bgGradient={`linear(to-r, ${primaryColor}, ${secondaryColor})`}
      bgClip="text"
    >
      Admin Dashboard
    </Heading>
    <Button
      leftIcon={<Plus size={20} />}
      bg={primaryColor}
      color="white"
      _hover={{ bg: secondaryColor }}
      onClick={() => (window.location.href = '/addcourse')}
    >
      Add New Course
    </Button>
  </HStack>
);

export default HeaderSection;
