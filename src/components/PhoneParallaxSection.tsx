// src/components/PhoneParallaxSection.tsx
import { Box, Text, Image, HStack, useBreakpointValue } from "@chakra-ui/react";
import leftcoin from "../assets/leftcoin.png"; // Replace with your images
import middleimage from "../assets/middleimage.png";
import rightcoin from "../assets/rightcoin.png";

const PhoneParallaxSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={4}
      color="white"
      textAlign="center"
      maxW="6xl"
      mx="auto"
    >
      {/* Title */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={12}>
        Unlock the Full Potential of Your Solana
      </Text>
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={12}>
        Token Effortlessly
      </Text>

      {/* Image Row */}
      <HStack
        gap={{ base: 4, md: 16 }}
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {/* Left Coin */}
        <Image
          src={leftcoin}
          alt="Left Coin Group"
          maxW={isMobile ? "120px" : "180px"}
          transform="translateY(-10%)"
          mb={{ base: 8, md: 0 }}
        />

        {/* iPhone Image */}
        <Image
          src={middleimage}
          alt="iPhone Preview"
          maxW={isMobile ? "180px" : "280px"}
          boxShadow="lg"
          borderRadius="2xl"
        />

        {/* Right Coin */}
        <Image
          src={rightcoin}
          alt="Right Coin Group"
          maxW={isMobile ? "120px" : "180px"}
          transform="translateY(-10%)"
          mb={{ base: 8, md: 0 }}
        />
      </HStack>
    </Box>
  );
};

export default PhoneParallaxSection;
