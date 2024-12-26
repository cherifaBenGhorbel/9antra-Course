import { SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import CourseCard from '../../components/CourseCard';

const CoursesGrid = ({ isLoading, filteredCourses, primaryColor, secondaryColor }) => (
  isLoading ? (
    <VStack py={8}>
      <Spinner size="xl" color={primaryColor} />
      <Text>Loading courses...</Text>
    </VStack>
  ) : (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {filteredCourses.map(course => (
        <CourseCard
          key={course._id}
          course={course}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ))}
    </SimpleGrid>
  )
);

export default CoursesGrid;
