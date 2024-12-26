import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useToast,
  VStack
} from '@chakra-ui/react';
import { ArrowLeft, DollarSign, Image, Type } from 'lucide-react';
import React, { useState } from 'react';
import useCourseStore from '../../store/course';

const AddCourse = () => {
  const [newCourse, setNewCourse] = useState({
    title: '',
    price: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const { createCourse } = useCourseStore();

  const primaryColor = useColorModeValue('#b5356a', '#0068fa');
  const secondaryColor = useColorModeValue('#ffba59', '#61f2d5');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const handleAddCourse = async () => {
    setIsSubmitting(true);
    try {
      const { success, message } = await createCourse(newCourse);
      toast({
        title: success ? 'Success' : 'Error',
        description: message,
        status: success ? 'success' : 'error',
        duration: 5000,
        isClosable: true,
      });
      
      if (success) {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add course. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <HStack justify="space-between" wrap="wrap" gap={4}>
            <Heading
              size="2xl"
              bgGradient={`linear(to-r, ${primaryColor}, ${secondaryColor})`}
              bgClip="text"
            >
              Add New Course
            </Heading>
            <Button
              leftIcon={<ArrowLeft size={20} />}
              variant="ghost"
              onClick={() => window.location.href = '/dashboard'}
            >
              Back to Dashboard
            </Button>
          </HStack>

          <Box
            bg={cardBg}
            p={8}
            rounded="lg"
            shadow="md"
          >
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Course Title</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Type color={primaryColor} size={20} />
                  </InputLeftElement>
                  <Input
                    placeholder="Enter course title..."
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Price</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <DollarSign color={primaryColor} size={20} />
                  </InputLeftElement>
                  <Input
                    placeholder="Enter course price..."
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                    type="number"
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image color={primaryColor} size={20} />
                  </InputLeftElement>
                  <Input
                    placeholder="Enter image URL..."
                    value={newCourse.image}
                    onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
                  />
                </InputGroup>
              </FormControl>

              <Button
                w="full"
                bg={primaryColor}
                color="white"
                _hover={{ bg: secondaryColor }}
                onClick={handleAddCourse}
                isLoading={isSubmitting}
                loadingText="Adding Course..."
                size="lg"
                mt={4}
              >
                Add Course
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AddCourse;