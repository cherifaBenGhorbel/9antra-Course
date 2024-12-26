import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SimpleGrid,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import { Send } from 'lucide-react';
import React from 'react';

export default function ContactForm({ primaryColor, secondaryColor, cardBg }) {
  return (
    <Box bg="orange.50" py={20}>
      <Container maxW="container.md">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading
              size="2xl"
              bgGradient={`linear(to-r, ${primaryColor}, ${secondaryColor})`}
              bgClip="text"
            >
              Contact Us
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">
              Have questions? We're here to help!
            </Text>
          </VStack>

          <Box
            bg={cardBg}
            p={8}
            rounded="xl"
            shadow="xl"
            w="full"
            borderTop={`4px solid ${primaryColor}`}
          >
            <VStack spacing={6}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input size="lg" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input size="lg" type="email" bg="white" />
                </FormControl>
              </SimpleGrid>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea bg="white" rows={6} />
              </FormControl>
              <Button
                w="full"
                size="lg"
                bg={primaryColor}
                color="white"
                _hover={{ bg: secondaryColor }}
                rightIcon={<Send size={16} />}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
