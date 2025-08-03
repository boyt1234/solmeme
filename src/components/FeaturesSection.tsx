// src/components/FeaturesSection.tsx
import { Box, Text, VStack, Image, Button, Stack } from "@chakra-ui/react";
import middleimage from "../assets/middleimage.png"; // Replace with your image
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.800" color="white" py={20} px={4}>
      <VStack gap={6} maxW="6xl" mx="auto" textAlign="center">
        {/* Section Label */}
        <Text fontSize="md" fontWeight="semibold" color="purple.300">
          Features
        </Text>

        {/* Title */}
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Unlock the Full Potential of Your Solana Token Effortlessly
        </Text>

        {/* Subtitle */}
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.300" maxW="4xl">
          Create, manage, and launch your Solana token effortlessly with secure
          transactions, instant deployment, and zero coding required!
        </Text>
      </VStack>

      {/* Feature Content */}
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={10}
        mt={16}
        maxW="6xl"
        mx="auto"
        px={4}
        align="center"
      >
        {/* Left: Image */}
        <Box flex={1} textAlign="center">
          <Image src={middleimage} alt="iPhone" maxW="250px" mx="auto" />
        </Box>

        {/* Center: Stats */}
        <VStack gap={6} flex={1} textAlign="left">
          <Box>
            <Text fontSize="3xl" fontWeight="bold" color="purple.400">
              99.9%
            </Text>
            <Text>Successful Token Launches</Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="bold" color="purple.400">
              85%+
            </Text>
            <Text>Returned Users</Text>
          </Box>
        </VStack>

        {/* Right: Description and CTA */}
        <VStack gap={5} flex={1} textAlign="left">
          <Text fontSize="xl" fontWeight="semibold">
            Create & Deploy Your Token in Minutes
          </Text>
          <Text color="gray.300">
            Turn your idea into reality with lightning-fast token creation.
            Whether for projects, communities, or innovation, deploy your Solana
            token in minutes – easily, securely, and built for the future!
          </Text>
          <Button
            colorScheme="purple"
            borderRadius="full"
            px={8}
            fontWeight="semibold"
            alignSelf="start"
            onClick={() => navigate("/create-token")}
          >
            Create Token
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default FeaturesSection;
