"use client";

import { Box, Flex, Text, Input, Switch } from "@chakra-ui/react";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";

type RevokeAuthoritiesProps = {
  revokes: {
    freeze: boolean;
    mint: boolean;
    update: boolean;
  };
  setRevokes: React.Dispatch<
    React.SetStateAction<{
      freeze: boolean;
      mint: boolean;
      update: boolean;
    }>
  >;
  recipientAddress: string;
  setRecipientAddress: (val: string) => void;
  isSubmitted: boolean; // new prop for validation trigger
};

export default function RevokeAuthoritiesSection({
  revokes,
  setRevokes,
  recipientAddress,
  setRecipientAddress,
  isSubmitted,
}: RevokeAuthoritiesProps) {
  const handleToggle = (key: "mint" | "update") => {
    setRevokes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const revokeItems = [
    {
      key: "freeze",
      title: "Revoke Freeze",
      description:
        "No one will be able to freeze holders' tokens account anymore",
      fixed: true,
    },
    {
      key: "mint",
      title: "Revoke Mint",
      description: "No one will be able to mint new tokens anymore",
    },
    {
      key: "update",
      title: "Revoke Update",
      description: "No one will be able to update the token metadata anymore",
    },
  ] as const;

  // Validation check
  const isRecipientError = isSubmitted && recipientAddress.trim() === "";

  return (
    <Box maxW="6xl" mx="auto" mt={16} px={4}>
      <Text fontSize="xl" fontWeight="bold" mb={6}>
        Revoke Authorities (Investor&apos;s Booster)
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={6}
        justify="space-between"
        flexWrap="wrap"
      >
        {revokeItems.map((item) => (
          <Box
            key={item.key}
            flex="1"
            minW={{ base: "100%", md: "30%" }}
            border="1px solid white"
            borderRadius="lg"
            p={4}
            bg="gray.900"
          >
            <Flex justify="space-between" align="center" mb={2}>
              <Text fontWeight="bold" fontSize="md">
                {item.title}
              </Text>
              <Switch.Root
                checked={revokes[item.key]}
                onCheckedChange={
                  "fixed" in item && item.fixed
                    ? undefined
                    : () => handleToggle(item.key as "mint" | "update")
                }
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
              </Switch.Root>
            </Flex>
            <Text fontSize="sm" color="gray.400" minH="60px" mb={6}>
              {item.description}
            </Text>
            <Flex justify="flex-end">
              <Text fontSize="sm" fontWeight="semibold" color="white">
                +0.1 SOL
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Text fontSize="sm" color="gray.400" mt={4} textAlign="center">
        Solana Token has 3 Authorities: Freeze Authority, Mint Authority, and
        Update Authority. Revoke them to attract more investors.
      </Text>

      <Box
        border="1px solid white"
        borderRadius="lg"
        p={6}
        bg="gray.900"
        mt={8}
      >
        <Text fontSize="md" fontWeight="bold" mb={4}>
          Enter token recipient
        </Text>

        <FormControl isInvalid={isRecipientError} isRequired>
          <Input
            placeholder="Enter the address who will be the receiver of the token (owner)"
            border="1px solid white"
            borderRadius="md"
            bg="gray.800"
            color="white"
            _placeholder={{ color: "gray.400" }}
            mb={4}
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
          {isRecipientError && (
            <FormErrorMessage>
              Please enter the recipient address.
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </Box>
  );
}
