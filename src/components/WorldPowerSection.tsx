// src/components/WorldPowerSection.tsx

import { Box, VStack, Text, Image, HStack } from "@chakra-ui/react";
import creator from "../assets/creator.png";

const WorldPowerSection = () => {
  return (
    <Box
      mt={{ base: 24, md: 26 }} // Add margin from previous section
      borderTopLeftRadius="80px"
      borderTopRightRadius="80px"
      overflow="hidden"
      bg="gray.900" // Fallback background color
    >
      <Box
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        px={4}
        py={{ base: 16, md: 28 }}
      >
        <VStack gap={12} maxW="6xl" mx="auto" textAlign="center" color="white">
          {/* Headings */}
          <VStack gap={2}>
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
              The world’s most powerful
            </Text>
            <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold">
              Solana Launcher ever.
            </Text>
          </VStack>

          {/* Image Frame */}
          <Box
            bg="whiteAlpha.100"
            borderRadius="2xl"
            p={4}
            position="relative"
            boxShadow="xl"
            w="100%"
          >
            {/* Browser UI Dots */}
            <HStack gap={2} mb={3} pl={3}>
              <Box w={3} h={3} borderRadius="full" bg="red.400" />
              <Box w={3} h={3} borderRadius="full" bg="yellow.400" />
              <Box w={3} h={3} borderRadius="full" bg="green.400" />
            </HStack>

            {/* Main Image */}
            <Image
              src={creator}
              alt="Launcher Preview"
              borderRadius="lg"
              w="100%"
              maxH="500px"
              objectFit="cover"
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default WorldPowerSection;
