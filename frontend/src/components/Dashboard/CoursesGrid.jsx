import React from 'react';
import {
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  Box,
  useBreakpointValue
} from '@chakra-ui/react';
import CourseCard from '../../components/CourseCard';

const CoursesGrid = ({ isLoading, filteredCourses, primaryColor, secondaryColor }) => {
  const columns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 2,
    xl: 3
  });

  return (
    <Box w="full">
      {isLoading ? (
        <VStack py={8} spacing={4}>
          <Spinner
            size="xl"
            color={primaryColor}
            thickness="4px"
            speed="0.65s"
          />
          <Text color={primaryColor} fontSize="lg">
            Loading courses...
          </Text>
        </VStack>
      ) : (
        <SimpleGrid
          columns={columns}
          spacing={{ base: 4, md: 6 }}
          w="full"
          px={{ base: 0, md: 2 }}
        >
          {filteredCourses.map(course => (
            <CourseCard
              key={course._id}
              course={course}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default CoursesGrid;