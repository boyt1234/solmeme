import { Box, Text, VStack } from "@chakra-ui/react";

const ReferralPage = () => {
  return (
    <Box p={8} maxW="4xl" mx="auto" textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        Terms of Service
      </Text>
      <Text fontSize="sm" color="gray.500" mb={8}>
        Effective date: 1st of March, 2025
      </Text>

      <VStack gap={6} align="stretch" textAlign="left">
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            1. Introduction
          </Text>
          <Text mt={2} color="gray.600">
            Welcome to SolXme. By accessing or using our platform, you agree to
            be bound by these terms.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            2. Services
          </Text>
          <Text mt={2} color="gray.600">
            SolXme provides tools to create and manage Solana-based tokens and
            liquidity.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            3. User Responsibilities
          </Text>
          <Text mt={2} color="gray.600">
            Users are responsible for ensuring compliance with all applicable
            laws and safeguarding their wallet access.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            4. Limitation of Liability
          </Text>
          <Text mt={2} color="gray.600">
            SolXme is not liable for any losses, including those due to smart
            contract vulnerabilities or user error.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            5. Termination
          </Text>
          <Text mt={2} color="gray.600">
            We reserve the right to suspend or terminate access for violations
            of these terms.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            6. Changes to Terms
          </Text>
          <Text mt={2} color="gray.600">
            These terms may be updated at any time. Continued use of the
            platform means you accept the updated terms.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ReferralPage;
