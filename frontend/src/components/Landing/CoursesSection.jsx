import { Button, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import CourseInfo from './CourseInfo';

export default function CoursesSection({ courses, cardBg, hoverBg, primaryColor, secondaryColor }) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const displayedCourses = showAllCourses ? courses : courses.slice(0, 3);

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={16}>
        <VStack spacing={4}>
          <Heading
            size="2xl"
            bgGradient={`linear(to-r, ${primaryColor}, ${secondaryColor})`}
            bgClip="text"
          >
            Discover Our Courses
          </Heading>
          <Text fontSize="xl" color="gray.500" textAlign="center" maxW="600px">
            Explore our comprehensive range of technical courses designed to boost your career
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {displayedCourses.map((course) => (
            <CourseInfo
              key={course._id}
              course={course}
              cardBg={cardBg}
              hoverBg={hoverBg}
              primaryColor={primaryColor}
            />
          ))}
        </SimpleGrid>

        {courses.length > 3 && (
          <Button
            size="lg"
            variant="outline"
            color={primaryColor}
            borderColor={primaryColor}
            rounded="full"
            px={8}
            rightIcon={showAllCourses ? <ChevronUp /> : <ChevronDown />}
            onClick={() => setShowAllCourses(!showAllCourses)}
            _hover={{
              bg: `${primaryColor}10`,
            }}
          >
            {showAllCourses ? 'Show Less' : 'View More Courses'}
          </Button>
        )}
      </VStack>
    </Container>
  );
}
