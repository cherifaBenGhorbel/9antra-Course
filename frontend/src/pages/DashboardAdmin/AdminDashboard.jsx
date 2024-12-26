import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  VStack,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import HeaderSection from '../../components/Dashboard/HeaderSection';
import SearchAndFilter from '../../components/Dashboard/SearchAndFilter';
import CoursesGrid from '../../components/Dashboard/CoursesGrid';
import EmptyState from '../../components/Dashboard/EmptyState';
import useCourseStore from '../../store/course';
import Sidebar from '../../components/Sidebar';

const AdminDashboard = () => {
  const { fetchCourses, courses, isLoading } = useCourseStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const primaryColor = useColorModeValue('#b5356a', '#0068fa');
  const secondaryColor = useColorModeValue('#ffba59', '#61f2d5');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const containerPadding = useBreakpointValue({ base: 4, md: 6, lg: 8 });

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
    <Box bg={bgColor} minH="100vh">
      <Flex h="100vh" overflow="hidden">
        <Sidebar />
        <Box 
          flex="1" 
          overflow="auto" 
          px={containerPadding}
          py={6}
          ml={isMobile ? 0 : undefined}
        >
          <Container 
            maxW={{ base: 'container.xl', '2xl': 'container.2xl' }}
            px={{ base: 2, md: 4 }}
          >
            <VStack 
              spacing={{ base: 4, md: 6, lg: 8 }} 
              align="stretch"
              w="full"
            >
              <HeaderSection
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
              />
              <Box 
                bg={cardBg} 
                p={4} 
                rounded="lg" 
                shadow="sm"
              >
                <SearchAndFilter
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  cardBg={cardBg}
                  primaryColor={primaryColor}
                />
              </Box>
              <Box flex="1">
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
              </Box>
            </VStack>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;