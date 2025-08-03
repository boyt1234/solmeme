import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  useBreakpointValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import moon from "../assets/moon.png";
import figure from "../assets/figure.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      minHeight="100vh"
      width="100%"
      bgImage={`url(${moon})`}
      bgSize="cover"
      backgroundPosition="center 25%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 13, md: 24 }}
      textAlign="center"
      color="white"
      position="relative"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="6xl"
        w="100%"
        position="relative"
      >
        <VStack gap={8} maxW="3xl" w="100%" zIndex={2}>
          <Box
            mt={12}
            px={6}
            py={2}
            bg="whiteAlpha.200"
            border="2px solid white"
            borderRadius="full"
            fontWeight="bold"
            fontSize="sm"
            backdropFilter="blur(8px)"
          >
            #1 Solana Token Launcher in the World
          </Box>

          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Launch your $Solana Token
          </Text>

          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="semibold">
            Take it to the Moon!
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.200" maxW="2xl">
            Create and deploy your Solana coin effortlessly in seconds.
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.200" maxW="2xl">
            Reach the world and scale without limits.
          </Text>

          <HStack
            gap={6}
            bg="whiteAlpha.200"
            borderRadius="full"
            px={{ base: 4, md: 6 }}
            py={3}
            border="1px solid white"
            backdropFilter="blur(8px)"
            w={isMobile ? "90%" : "auto"}
          >
            <Text fontWeight="medium" fontSize="md" color="white">
              Create your first token
            </Text>
            <Button
              colorScheme="purple"
              borderRadius="full"
              px={9}
              fontWeight="semibold"
              onClick={() => navigate("/create-token")}
            >
              Create Token
            </Button>
          </HStack>
        </VStack>

        {/* Responsive Image */}
        <Box
          mt={{ base: 10, md: 20 }}
          maxW={{ base: "90%", md: "650px" }}
          mx="auto"
          zIndex={1}
        >
          <Image
            src={figure}
            alt="Token preview"
            w="100%"
            objectFit="contain"
            position="relative"
            top={{ base: "10px", md: "95px" }} // shift down
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
