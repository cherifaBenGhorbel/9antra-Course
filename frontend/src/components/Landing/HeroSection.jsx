import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import TEAM from '../../assets/team.jpg';

export default function HeroSection({ primaryColor, secondaryColor }) {
  return (
    <Box
      position="relative"
      h="600px"
      bgImage={TEAM}
      bgPosition="center"
      bgSize="cover"
      bgAttachment="fixed"
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient={`linear(to-r, ${primaryColor}CC, ${secondaryColor}CC)`}
      >
        <Container maxW="container.xl" h="full">
          <VStack align="flex-start" justify="center" h="full" spacing={8} color="white">
            <Heading size="4xl" maxW="800px">
              Improve your skills on your own
            </Heading>
            <Text fontSize="2xl" maxW="600px">
              Join our platform to enhance your technical expertise and prepare for a better future
            </Text>
            <Button
              size="lg"
              bg="white"
              color={primaryColor}
              px={8}
              h={14}
              fontSize="lg"
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'lg',
              }}
              transition="all 0.3s"
            >
              REGISTER NOW
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
