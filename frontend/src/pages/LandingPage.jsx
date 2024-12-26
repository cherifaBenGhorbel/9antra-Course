import { useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import HeroSection from '../components/Landing/HeroSection';
import ContactForm from '../components/Landing/ContactForm';
import CoursesSection from '../components/Landing/CoursesSection';
import useCourseStore from '../store/course';

export default function LandingPage() {
  const { fetchCourses, courses } = useCourseStore();
  
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const primaryColor = useColorModeValue('#b5356a', '#0068fa');
  const secondaryColor = useColorModeValue('#ffba59', '#61f2d5');
  const cardBg = useColorModeValue('white', 'gray.800');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <>
      <HeroSection primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <CoursesSection
        courses={courses}
        cardBg={cardBg}
        hoverBg={hoverBg}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <ContactForm primaryColor={primaryColor} secondaryColor={secondaryColor} cardBg={cardBg} />
    </>
  );
}
