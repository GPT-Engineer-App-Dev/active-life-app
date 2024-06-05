import React, { useState } from 'react';
import { Container, VStack, Heading, FormControl, FormLabel, Input, Select, Textarea, Button, useToast } from "@chakra-ui/react";

const WorkoutLog = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Workout logged.",
      description: "Your workout has been successfully logged.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setWorkoutType('');
    setDuration('');
    setDate('');
    setNotes('');
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Log Your Workout</Heading>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4}>
            <FormControl id="workout-type" isRequired>
              <FormLabel>Workout Type</FormLabel>
              <Select placeholder="Select workout type" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Health">Health</option>
              </Select>
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FormControl>
            <Button colorScheme="teal" type="submit" width="full">Log Workout</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default WorkoutLog;