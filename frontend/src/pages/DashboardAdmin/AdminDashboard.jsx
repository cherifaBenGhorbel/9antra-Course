import React, { useEffect, useState } from 'react';
import { Box, Container, VStack, useColorModeValue } from '@chakra-ui/react';
import HeaderSection from '../../components/Dashboard/HeaderSection';
import SearchAndFilter from '../../components/Dashboard/SearchAndFilter';
import CoursesGrid from '../../components/Dashboard/CoursesGrid';
import EmptyState from '../../components/Dashboard/EmptyState';
import useCourseStore from '../../store/course';

const AdminDashboard = () => {
  const { fetchCourses, courses, isLoading } = useCourseStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const primaryColor = useColorModeValue('#b5356a', '#0068fa');
  const secondaryColor = useColorModeValue('#ffba59', '#61f2d5');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const filteredCourses = courses
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.price.toString().includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortBy === 'price') return Number(b.price) - Number(a.price);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <HeaderSection
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            cardBg={cardBg}
            primaryColor={primaryColor}
          />
          <CoursesGrid
            isLoading={isLoading}
            filteredCourses={filteredCourses}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
          {!isLoading && filteredCourses.length === 0 && (
            <EmptyState
              searchTerm={searchTerm}
              cardBg={cardBg}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
