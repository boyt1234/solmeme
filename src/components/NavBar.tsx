// src/components/Navbar.tsx
import {
  Flex,
  Text,
  HStack,
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navLinks = (
    <>
      <RouterLink to="/" onClick={onClose}>
        Home
      </RouterLink>
      <RouterLink to="/create-token" onClick={onClose}>
        Create Token
      </RouterLink>
      <RouterLink to="/Liquidity-pool" onClick={onClose}>
        Liquidity Pool
      </RouterLink>
      <a
        href="https://www.youtube.com/watch?v=NY56fIIBeMQ&t=10s"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        Youtube Tutorial
      </a>
      <a
        href="https://raydium.io"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        Manage Liquidity
      </a>
    </>
  );

  return (
    <>
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        px={6}
        py={4}
        position="fixed"
        top="0"
        w="100%"
        zIndex="1000"
        backdropFilter="blur(10px)"
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
      >
        {/* Logo */}
        <Text fontWeight="bold" fontSize="lg">
          SolXme
        </Text>

        {/* Desktop Links */}
        {!isMobile && (
          <HStack
            gap={10}
            px={5}
            py={4}
            borderRadius="full"
            boxShadow="md"
            border="1px solid"
            borderColor="white"
          >
            {navLinks}
          </HStack>
        )}

        {/* Wallet or Hamburger */}
        <Box>
          {isMobile ? (
            <IconButton
              aria-label="Toggle Menu"
              onClick={open ? onClose : onOpen}
              variant="outline"
              color="white"
              borderColor="white"
            >
              {open ? <FiX /> : <FiMenu />}
            </IconButton>
          ) : (
            <WalletMultiButton />
          )}
        </Box>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer.Root
        open={open}
        onOpenChange={(val) => (val.open ? onOpen() : onClose())}
      >
        <DrawerContent bg="blackAlpha.900" color="white">
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" gap={6} mt={6}>
              {navLinks}
              <WalletMultiButton />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer.Root>
    </>
  );
};

export default Navbar;
