"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { Button, Box, Text, Link, Flex } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  txHash: string;
};

export default function SuccessModal({
  isOpen,
  onClose,
  txHash,
}: SuccessModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={false} // manual vertical positioning
    >
      <ModalOverlay />
      <ModalContent
        bg="#18181b" // bring back background color
        color="white"
        borderRadius="2xl"
        p={20}
        w="full"
        maxW="400px"
        mx="auto"
        mt="20vh"
        boxShadow="2xl"
        position="relative"
      >
        <ModalHeader textAlign="center" p={0} mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            🎉 Congratulations!
          </Text>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody px={0} textAlign="center">
          <Text fontSize="md" mb={3}>
            Your Solana token has been successfully created!
          </Text>

          <Text fontSize="sm" mb={5} color="gray.400">
            It’s now live on the blockchain. Grow, trade, and make an impact in
            Web3.
          </Text>

          <Box
            bg="white"
            color="black"
            px={4}
            py={3}
            rounded="md"
            mb={4}
            wordBreak="break-word"
            textAlign="left"
          >
            <Text fontSize="sm" fontWeight="bold">
              Transaction Hash:
            </Text>
            <Text fontSize="sm">{txHash}</Text>
          </Box>

          <Link
            href={`https://solscan.io/tx/${txHash}?cluster=devnet`}
            target="_blank"
            rel="noopener noreferrer"
            color="teal.300"
            fontWeight="bold"
            fontSize="sm"
          >
            View on Solana Explorer{" "}
            <FiExternalLink size={12} style={{ marginLeft: 4 }} />{" "}
            {/* smaller icon size */}
          </Link>

          <Flex justify="center" mt={6}>
            <Button colorScheme="teal" size="sm" onClick={onClose}>
              Close
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
