import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated!</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaRunning />} colorScheme="teal" variant="solid" size="lg">
            Cardio
          </Button>
          <Button leftIcon={<FaDumbbell />} colorScheme="teal" variant="solid" size="lg">
            Strength
          </Button>
          <Button leftIcon={<FaHeartbeat />} colorScheme="teal" variant="solid" size="lg">
            Health
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" width="100%">
          <Button as={Link} to="/progress-tracking" colorScheme="teal" variant="outline" size="lg">
            View Progress
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;