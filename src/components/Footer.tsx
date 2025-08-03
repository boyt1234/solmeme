import { Box, Text, HStack, VStack, Link, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box bg="gray.900" color="white" py={10} px={6} position="relative">
      <Flex
        maxW="6xl"
        mx="auto"
        align="center"
        justify="center"
        position="relative"
      >
        {/* Centered VStack (absolute center using full-width Flex) */}
        <VStack gap={2} textAlign="center">
          <Text fontSize="sm" color="gray.400">
            © SolXme 2025
          </Text>

          <HStack gap={6}>
            <Link
              onClick={() => navigate("/referral")}
              fontSize="sm"
              color="gray.300"
              _hover={{ textDecoration: "underline", color: "white" }}
              cursor="pointer"
            >
              Terms of Service
            </Link>
            <Link
              onClick={() => navigate("/token-guide")}
              fontSize="sm"
              color="gray.300"
              _hover={{ textDecoration: "underline", color: "white" }}
              cursor="pointer"
            >
              Privacy Policy
            </Link>
          </HStack>
        </VStack>

        {/* Logo on the far left */}
        <Box position="absolute" left={0}>
          <Text fontWeight="bold" fontSize="xl">
            SolXme
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
