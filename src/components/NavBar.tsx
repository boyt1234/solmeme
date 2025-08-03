// src/components/Navbar.tsx
import { Flex, Text, HStack, Box } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      px={14}
      py={4}
      position="fixed"
      top="0"
      w="100%"
      zIndex="1000"
      backdropFilter="blur(10px)"
    >
      {/* Logo */}
      <Text fontWeight="bold" fontSize="xl">
        SolXme
      </Text>

      {/* Center nav links inside a rounded box */}
      <HStack
        gap={10}
        px={5}
        py={4}
        borderRadius="full"
        boxShadow="md"
        border="1px solid"
        borderColor="white"
      >
        <RouterLink
          to="/"
          style={{ fontWeight: "500", color: "white", textDecoration: "none" }}
        >
          Home
        </RouterLink>
        <RouterLink
          to="/create-token"
          style={{
            fontWeight: "500",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Create Token
        </RouterLink>
        <RouterLink
          to="/Liquidity-pool"
          style={{
            fontWeight: "500",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Liquidity Pool
        </RouterLink>
        <a href="https://raydium.io" target="_blank" rel="noopener noreferrer">
          Manage Liquidity
        </a>
      </HStack>

      {/* Connect Wallet button */}
      <Box>
        <WalletMultiButton />
      </Box>
    </Flex>
  );
};

export default Navbar;
