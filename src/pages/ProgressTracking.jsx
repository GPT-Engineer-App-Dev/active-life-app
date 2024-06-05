import React from 'react';
import { Container, VStack, Heading, Box, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

const ProgressTracking = () => {
  // Dummy data for demonstration
  const totalWorkouts = 50;
  const averageDuration = 45; // in minutes
  const progressData = {
    Cardio: 20,
    Strength: 15,
    Health: 15,
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Your Progress</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="40px" width="100%">
          <Stat>
            <StatLabel>Total Workouts</StatLabel>
            <StatNumber>{totalWorkouts}</StatNumber>
            <StatHelpText>Workouts logged</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Average Duration</StatLabel>
            <StatNumber>{averageDuration} mins</StatNumber>
            <StatHelpText>Per workout</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Cardio Workouts</StatLabel>
            <StatNumber>{progressData.Cardio}</StatNumber>
            <StatHelpText>Sessions</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Strength Workouts</StatLabel>
            <StatNumber>{progressData.Strength}</StatNumber>
            <StatHelpText>Sessions</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Health Workouts</StatLabel>
            <StatNumber>{progressData.Health}</StatNumber>
            <StatHelpText>Sessions</StatHelpText>
          </Stat>
        </SimpleGrid>
        <Box width="100%" mt={8}>
          <Heading as="h2" size="lg" mb={4}>Progress Over Time</Heading>
          {/* Placeholder for chart */}
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text>Chart will be displayed here</Text>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProgressTracking;