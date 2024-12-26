import {
    Badge,
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
    useColorModeValue,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { Edit2, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import useCourseStore from '../store/course';

const CourseCard = ({ course, primaryColor, secondaryColor }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedCourse, setUpdatedCourse] = useState(course);
  const { updateCourse, deleteCourse } = useCourseStore();

  const handleEdit = async () => {
    const { success, message } = await updateCourse(course._id, updatedCourse);
    onClose();
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
      position: "top-right"
    });
  };

  const handleDelete = async () => {
    const { success, message } = await deleteCourse(course._id);
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
      position: "top-right"
    });
  };

  return (
    <Box
      bg={cardBg}
      border="1px"
      borderColor={borderColor}
      rounded="xl"
      overflow="hidden"
      textAlign={"center"}
      transition="all 0.2s"
      _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
    >
      <Box position="relative">
        <Box h="200px" overflow="hidden">
          <img
            src={course.image}
            alt={course.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
          />
        </Box>
        <Badge
          position="absolute"
          top={4}
          right={4}
          bg={primaryColor}
          color="white"
          px={3}
          py={1}
          rounded="full"
          textAlign={"center"}
        >
          {course.price} DT/ Month
        </Badge>
      </Box>
      
      <VStack p={6} align="stretch" spacing={4}>
        <Heading size="md" noOfLines={2}>
          {course.title}
        </Heading>
        
        <HStack spacing={4}>
          <Button
            flex={1}
            leftIcon={<Edit2 size={18} />}
            onClick={onOpen}
            variant="outline"
            borderColor={primaryColor}
            color={primaryColor}
            _hover={{
              bg: primaryColor,
              color: 'white'
            }}
          >
            Edit
          </Button>
          <Button
            flex={1}
            leftIcon={<Trash2 size={18} />}
            onClick={handleDelete}
            variant="outline"
            borderColor="red.500"
            color="red.500"
            _hover={{
              bg: 'red.500',
              color: 'white'
            }}
          >
            Delete
          </Button>
        </HStack>
      </VStack>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg={cardBg}>
          <ModalHeader>Edit Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  value={updatedCourse.title}
                  onChange={(e) => setUpdatedCourse({
                    ...updatedCourse,
                    title: e.target.value
                  })}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={updatedCourse.price}
                  onChange={(e) => setUpdatedCourse({
                    ...updatedCourse,
                    price: e.target.value
                  })}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  value={updatedCourse.image}
                  onChange={(e) => setUpdatedCourse({
                    ...updatedCourse,
                    image: e.target.value
                  })}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={primaryColor}
              color="white"
              mr={3}
              onClick={handleEdit}
              _hover={{ bg: secondaryColor }}
            >
              Save Changes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CourseCard;