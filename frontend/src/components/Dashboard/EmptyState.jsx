import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import React from 'react';

const EmptyState = ({ searchTerm, cardBg, primaryColor, secondaryColor }) => (
  <Box textAlign="center" py={12} px={6} bg={cardBg} rounded="lg" shadow="md">
    <VStack spacing={4}>
      <Heading size="lg">No Courses Found</Heading>
      <Text color="gray.500">
        {searchTerm
          ? 'No courses match your search criteria'
          : 'Start by adding your first course'}
      </Text>
      {!searchTerm && (
        <Button
          leftIcon={<Plus size={20} />}
          bg={primaryColor}
          color="white"
          _hover={{ bg: secondaryColor }}
          onClick={() => (window.location.href = '/addcourse')}
        >
          Add First Course
        </Button>
      )}
    </VStack>
  </Box>
);

export default EmptyState;
