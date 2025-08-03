import { Box, Text, VStack } from "@chakra-ui/react";

const TokenGuidePage = () => {
  return (
    <Box p={8} maxW="4xl" mx="auto" textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        Privacy Policy
      </Text>
      <Text fontSize="sm" color="gray.500" mb={8}>
        Effective Date: 1st of March, 2025
      </Text>

      <VStack gap={6} align="stretch" textAlign="left">
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            1. Introduction
          </Text>
          <Text mt={2} color="gray.600">
            At SolXme, we are committed to protecting your privacy. This policy
            explains how we collect and use your data.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            2. Information We Collect
          </Text>
          <Text mt={2} color="gray.600">
            We may collect wallet addresses, user interactions, and technical
            data to enhance your experience on our platform.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            3. How We Use Your Information
          </Text>
          <Text mt={2} color="gray.600">
            Your information is used to provide our services, improve
            functionality, and ensure security across the platform.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            4. Information Sharing
          </Text>
          <Text mt={2} color="gray.600">
            We do not sell or rent your data. Information may be shared with
            partners strictly for service-related purposes.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            5. Security
          </Text>
          <Text mt={2} color="gray.600">
            We take appropriate technical and organizational measures to protect
            your data from unauthorized access or loss.
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            6. Changes to This Policy
          </Text>
          <Text mt={2} color="gray.600">
            We may update this policy over time. You are encouraged to review it
            periodically for any changes.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default TokenGuidePage;
