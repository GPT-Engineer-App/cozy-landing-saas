import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Box as="header" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to SaaSify
        </Heading>
        <Text fontSize="xl" color="gray.600">
          The ultimate solution for your business needs
        </Text>
      </Box>

      {/* Hero Section */}
      <Box as="section" textAlign="center" py={10}>
        <VStack spacing={6}>
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvZnR3YXJlfGVufDB8fHx8MTcxNzU4MjU3NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Software" boxSize="400px" objectFit="cover" borderRadius="md" />
          <Heading as="h2" size="xl">
            Transform Your Business Today
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            Our software helps you streamline operations, improve efficiency, and boost your bottom line. Join thousands of satisfied customers who have transformed their businesses with SaaSify.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box as="section" py={10}>
        <Heading as="h3" size="lg" textAlign="center" mb={6}>
          Features
        </Heading>
        <HStack spacing={8} justify="center">
          <VStack spacing={4} align="center">
            <FaCheckCircle size="3em" color="teal" />
            <Text fontSize="lg" fontWeight="bold">
              Easy to Use
            </Text>
            <Text textAlign="center" color="gray.600">
              Our intuitive interface ensures that you can get started quickly and easily.
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaCheckCircle size="3em" color="teal" />
            <Text fontSize="lg" fontWeight="bold">
              Secure
            </Text>
            <Text textAlign="center" color="gray.600">
              We prioritize your data security with top-notch encryption and security protocols.
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaCheckCircle size="3em" color="teal" />
            <Text fontSize="lg" fontWeight="bold">
              24/7 Support
            </Text>
            <Text textAlign="center" color="gray.600">
              Our support team is available around the clock to assist you with any issues.
            </Text>
          </VStack>
        </HStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={10} bg="gray.50">
        <Heading as="h3" size="lg" textAlign="center" mb={6}>
          Contact Us
        </Heading>
        <VStack spacing={4} align="center">
          <HStack spacing={4}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="teal" />
            <Text fontSize="lg">info@saasify.com</Text>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" colorScheme="teal" />
            <Text fontSize="lg">+1 (800) 123-4567</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Box as="footer" textAlign="center" py={6} borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
