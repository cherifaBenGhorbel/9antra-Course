import { Box, Divider, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function CourseInfo({ course, cardBg, hoverBg, primaryColor }) {
  return (
    <Box
      key={course._id}
      bg={cardBg}
      rounded="xl"
      overflow="hidden"
      shadow="lg"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'xl',
        bg: hoverBg,
      }}
    >
      <Box position="relative">
        <Image
          src={course.image || '/api/placeholder/400/200'}
          alt={course.title}
          w="full"
          h="200px"
          objectFit="cover"
        />
      </Box>
      <VStack p={6} align="stretch" spacing={4}>
        <Heading size="md" textAlign={'center'}>
          {course.title}
        </Heading>
        <Divider />
        <HStack justify="space-between" align="center">
          <Text color={primaryColor} fontSize="xl" fontWeight="bold" textAlign={'center'}>
            {course.price} DT/ Month
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
