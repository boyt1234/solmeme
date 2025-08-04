import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  Textarea,
  Switch,
  FileUpload,
  Icon,
  Select,
  Portal,
  createListCollection,
  Spinner,
} from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import Footer from "./Footer";
import { LuUpload } from "react-icons/lu";
import { useState } from "react";
import RevokeAuthoritiesSection from "./RevokeAuthoritiesSection";
import { calculateTotalFee } from "../components/feeUtils";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import SuccessModal from "./SuccessModal";

const CreateTokenPage = () => {
  const [isSubmitted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [txSignature, setTxSignature] = useState<string | null>(null);

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [decimals, setDecimals] = useState("");
  const [supply, setSupply] = useState("");
  const [description, setDescription] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [creatorAddress, setCreatorAddress] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [liquiditySol, setLiquiditySol] = useState("");
  const [liquidityTokens, setLiquidityTokens] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [showCreatorInfo, setShowCreatorInfo] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showLiquidity, setShowLiquidity] = useState(false);
  const [revokes, setRevokes] = useState({
    freeze: true,
    mint: true,
    update: true,
  });

  const feeTiers = createListCollection({
    items: [
      { label: "0%", value: "0" },
      { label: "2%", value: "2" },
      { label: "4%", value: "4" },
    ],
  });

  const totalFee = calculateTotalFee({
    showCreatorInfo,
    showSocialLinks,
    showLiquidity,
    liquiditySol: parseFloat(liquiditySol || "0"),
    revokeMint: revokes.mint,
    revokeUpdate: revokes.update,
  });

  const { publicKey, sendTransaction } = useWallet();
  const connection = new Connection(
    "https://mainnet.helius-rpc.com/?api-key=01557dce-1c4c-4520-9dce-26a7770e8f78"
  );

  const handleLaunch = async () => {
    if (!publicKey) {
      alert("Please connect your wallet.");
      return;
    }

    // ✅ Validate recipient address before sending
    if (!recipientAddress.trim()) {
      alert("Please enter the token recipient address.");
      return;
    }

    const feeInLamports = totalFee * 1e9; // convert SOL to lamports
    const recipient = new PublicKey(
      "BQn2Mx1XrYdXMEAB17Jg3JQ4e3kjqjRcztUggFdtzocX"
    ); // your wallet

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipient,
        lamports: feeInLamports,
      })
    );

    setIsLoading(true); // Show spinner

    try {
      const signature = await sendTransaction(transaction, connection);
      console.log("Transaction signature:", signature);

      setTxSignature(signature);
      setIsModalOpen(true); // Show success modal
    } catch (err) {
      console.error("Transaction failed", err);
      alert("❌ Transaction failed. Please try again.");
    } finally {
      setIsLoading(false); // Hide spinner
    }
  };

  return (
    <>
      <Navbar />

      <Box bg="gray.950" color="white" py={20} px={6}>
        <VStack gap={4} maxW="4xl" mx="auto" textAlign="center" mt={24}>
          <Text fontSize="4xl" fontWeight="bold">
            Solana Token Creator
          </Text>
          <Text fontSize="md" color="gray.400">
            Create and deploy your Solana coins effortlessly.
          </Text>
          <Text fontSize="md" color="gray.400">
            Reach the world and scale without limits!
          </Text>
        </VStack>
      </Box>

      <VStack gap={6}>
        <Box
          mt={12}
          bg="gray.800"
          p={8}
          borderRadius="2xl"
          boxShadow="lg"
          maxW="900px" // 👈 limits the form width
          w="full" // 👈 makes it responsive
          mx="auto" // 👈 centers it horizontally
        >
          <VStack gap={6} align="stretch">
            {/* Token Name and Symbol */}
            <Flex
              w="full"
              justify="space-between"
              gap={6}
              flexWrap={{ base: "wrap", md: "nowrap" }}
            >
              <FormControl isRequired flex="1">
                <FormLabel>Token Name </FormLabel>
                <Input
                  placeholder="Ex: Trump Coin"
                  maxLength={32}
                  border="1px solid white"
                  borderRadius="md"
                  _placeholder={{ color: "gray.400" }}
                  color="white"
                  bg="gray.900"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
                <FormHelperText color="gray.400">
                  Max 32 characters in your name
                </FormHelperText>
              </FormControl>

              <FormControl isRequired flex="1">
                <FormLabel>Token Symbol</FormLabel>
                <Input
                  placeholder="Ex: SOL"
                  border="1px solid white"
                  borderRadius="md"
                  _placeholder={{ color: "gray.400" }}
                  color="white"
                  bg="gray.900"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                />
              </FormControl>
            </Flex>

            {/* Decimals and Supply */}
            <Flex
              w="full"
              justify="space-between"
              gap={6}
              flexWrap={{ base: "wrap", md: "nowrap" }}
            >
              <FormControl isRequired flex="1">
                <FormLabel>Decimals</FormLabel>
                <Input
                  placeholder="9"
                  border="1px solid white"
                  borderRadius="md"
                  _placeholder={{ color: "gray.400" }}
                  color="white"
                  bg="gray.900"
                  value={decimals}
                  onChange={(e) => setDecimals(e.target.value)}
                />
                <FormHelperText color="gray.400">
                  Change the number of decimals for your token
                </FormHelperText>
              </FormControl>

              <FormControl isRequired flex="1">
                <FormLabel>Supply</FormLabel>
                <Input
                  placeholder="1000000"
                  border="1px solid white"
                  borderRadius="md"
                  _placeholder={{ color: "gray.400" }}
                  color="white"
                  bg="gray.900"
                  value={supply}
                  onChange={(e) => setSupply(e.target.value)}
                />
                <FormHelperText color="gray.400">
                  The initial number of available tokens that will be created in
                  your wallet
                </FormHelperText>
              </FormControl>
            </Flex>

            {/* Upload and AI Logo Generator side by side */}
            <Flex
              w="full"
              justify="space-between"
              gap={6}
              flexWrap={{ base: "wrap", md: "nowrap" }}
              align="start"
            >
              <FormControl isRequired flex="1">
                <FormLabel>Logo</FormLabel>
                <Box
                  border="1px solid white"
                  borderRadius="lg"
                  p={8}
                  textAlign="center"
                  bg="gray.800"
                  color="white"
                >
                  <VStack gap={2}>
                    <FileUpload.Root
                      maxW="xl"
                      alignItems="stretch"
                      maxFiles={10}
                    >
                      <FileUpload.HiddenInput />
                      <FileUpload.Dropzone>
                        <Icon size="md" color="fg.muted">
                          <LuUpload />
                        </Icon>
                        <FileUpload.DropzoneContent>
                          <Box>Drag and drop files here</Box>
                          <Box color="fg.muted">.png, .jpg up to 5MB</Box>
                        </FileUpload.DropzoneContent>
                      </FileUpload.Dropzone>
                      <FileUpload.List />
                    </FileUpload.Root>
                  </VStack>
                </Box>

                <Text color="gray.300" mt={4}>
                  Add logo for your token or use AI to generate one!
                </Text>
              </FormControl>

              <Box flex="1">
                <HStack justify="space-between">
                  <Text fontWeight="medium" color="white">
                    Generate personalized AI Logo
                  </Text>
                  <Text fontSize="xs" color="blue.300" fontWeight="bold">
                    COMING SOON
                  </Text>
                </HStack>

                <Box
                  mt={6}
                  w="100%"
                  h="200px"
                  border="1px solid white"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.900"
                >
                  <Text color="gray.500">[SVG Logo Placeholder]</Text>
                </Box>

                <Text fontSize="sm" color="gray.400" mt={2} textAlign="center">
                  Lazy to create a logo? Use our personalized AI Logo Generator
                  for your token name.
                </Text>

                <VStack mt={4} gap={1}>
                  <Button
                    w="full"
                    bg="white"
                    color="black"
                    borderRadius="full"
                    _hover={{ bg: "gray.200" }}
                    disabled
                  >
                    Generate
                  </Button>
                  <Text fontSize="sm" color="gray.400" textAlign="center">
                    (at just 0.05 SOL)
                  </Text>
                </VStack>
              </Box>
            </Flex>

            {/* Description Section */}
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Here you can describe your token"
                border="1px solid white"
                borderRadius="md"
                _placeholder={{ color: "gray.400" }}
                color="white"
                bg="gray.900"
                resize="vertical"
                minH="200px" // 👈 change height here
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <Box borderBottom="1px solid white" opacity={0.2} my={8} />
            <Box bg="gray.900" p={6} borderRadius="lg" mt={8}>
              {/* Switch Row */}
              <Flex
                align="center"
                justify="space-between"
                w="full"
                flexWrap={{ base: "wrap", md: "nowrap" }}
              >
                <Box>
                  <HStack>
                    <Switch.Root
                      onCheckedChange={(event) =>
                        setShowCreatorInfo(event.checked)
                      }
                    >
                      <Switch.HiddenInput />
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                      <Switch.Label />
                    </Switch.Root>
                    <Box>
                      <FormLabel
                        htmlFor="creator-info"
                        mb="0"
                        fontWeight="bold"
                      >
                        Creator's Info (Optional)
                      </FormLabel>
                      <Text fontSize="sm" color="gray.400">
                        Change the information of the creator in the metadata.
                      </Text>
                    </Box>
                  </HStack>
                </Box>

                {/* Cost stays fixed */}
                <Text
                  fontSize="sm"
                  color="white"
                  fontWeight="semibold"
                  mt={{ base: 2, md: 0 }}
                >
                  +0.1 SOL
                </Text>
              </Flex>

              {/* Form Section (Outside Flex) */}
              {showCreatorInfo && (
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  align="start"
                  mt={4}
                  w="full"
                  gap={4}
                >
                  <FormControl isRequired flex="1">
                    <FormLabel color="white">Creator's Address</FormLabel>
                    <Input
                      placeholder="Ex: 3stNYG..."
                      border="1px solid white"
                      borderRadius="md"
                      bg="gray.800"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      w="300px"
                      value={creatorAddress}
                      onChange={(e) => setCreatorAddress(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired flex="1">
                    <FormLabel color="white">Creator's Name</FormLabel>
                    <Input
                      placeholder="Ex: Https"
                      border="1px solid white"
                      borderRadius="md"
                      bg="gray.800"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      w="300px"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                    />
                  </FormControl>
                </Flex>
              )}

              {/* Switch Row */}
              <Flex
                align="center"
                justify="space-between"
                w="full"
                mt={8}
                flexWrap={{ base: "wrap", md: "nowrap" }}
              >
                {/* Left Side: Label and Description */}
                <Box>
                  <HStack>
                    <Switch.Root
                      onCheckedChange={(event) =>
                        setShowSocialLinks(event.checked)
                      }
                    >
                      <Switch.HiddenInput />
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                      <Switch.Label />
                    </Switch.Root>
                    <Box>
                      <FormLabel
                        htmlFor="social-links"
                        mb="0"
                        fontWeight="bold"
                      >
                        Add Social Links & Tags
                      </FormLabel>
                      <Text fontSize="sm" color="gray.400">
                        Add links to your token metadata.
                      </Text>
                    </Box>
                  </HStack>
                </Box>

                {/* Right Side: Static Cost Text */}
                <Text
                  fontSize="sm"
                  color="white"
                  fontWeight="semibold"
                  mt={{ base: 2, md: 0 }}
                >
                  +0.1 SOL
                </Text>
              </Flex>

              {/* Expandable Form Section (Placed Outside Flex) */}
              {showSocialLinks && (
                <Box mt={6}>
                  <FormControl>
                    <FormLabel fontWeight="bold" color="white">
                      Telegram Link
                    </FormLabel>
                    <Input
                      placeholder="http://t.me"
                      border="1px solid white"
                      borderRadius="md"
                      bg="gray.800"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      w="100%"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel fontWeight="bold" color="white">
                      Twitter or X Link
                    </FormLabel>
                    <Input
                      placeholder="Ex: http://x.com"
                      border="1px solid white"
                      borderRadius="md"
                      bg="gray.800"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      w="100%"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel fontWeight="bold" color="white">
                      Website Link
                    </FormLabel>
                    <Input
                      placeholder="Ex: http://"
                      border="1px solid white"
                      borderRadius="md"
                      bg="gray.800"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      w="100%"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </FormControl>
                </Box>
              )}

              {/* Luna Liquidity Pool Switch Row */}
              <Flex
                align="start"
                justify="space-between"
                w="full"
                flexWrap={{ base: "wrap", md: "nowrap" }}
                mt={8}
              >
                <Box flex="1">
                  <HStack>
                    <Switch.Root
                      onCheckedChange={(event) =>
                        setShowLiquidity(event.checked)
                      }
                    >
                      <Switch.HiddenInput />
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                      <Switch.Label />
                    </Switch.Root>
                    <Box>
                      <FormLabel htmlFor="liquidity" mb="0" fontWeight="bold">
                        SolXme Liquidity Pool
                      </FormLabel>
                      <Text fontSize="sm" color="gray.400">
                        Full access to the liquidity pool.
                      </Text>
                    </Box>
                  </HStack>

                  {showLiquidity && (
                    <Box mt={6}>
                      <FormControl isRequired mb={4}>
                        <FormLabel fontWeight="bold" color="white">
                          SOL Amount
                        </FormLabel>
                        <Input
                          placeholder="Ex: 3"
                          border="1px solid white"
                          borderRadius="md"
                          bg="gray.800"
                          color="white"
                          _placeholder={{ color: "gray.400" }}
                          w="100%"
                          value={liquiditySol}
                          onChange={(e) => setLiquiditySol(e.target.value)}
                        />
                      </FormControl>

                      <FormControl isRequired mb={4}>
                        <FormLabel fontWeight="bold" color="white">
                          Token Amount
                        </FormLabel>
                        <Input
                          placeholder="Ex: 5000000"
                          border="1px solid white"
                          borderRadius="md"
                          bg="gray.800"
                          color="white"
                          _placeholder={{ color: "gray.400" }}
                          w="100%"
                          value={liquidityTokens}
                          onChange={(e) => setLiquidityTokens(e.target.value)}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontWeight="bold" color="white">
                          Fee Tier
                        </FormLabel>
                        <Select.Root collection={feeTiers} width="100%">
                          <Select.HiddenSelect />
                          <Select.Label></Select.Label>
                          <Select.Control
                            border="1px solid white"
                            borderRadius="md"
                          >
                            <Select.Trigger>
                              <Select.ValueText placeholder="Select fee tier" />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                              <Select.Indicator />
                            </Select.IndicatorGroup>
                          </Select.Control>
                          <Portal>
                            <Select.Positioner>
                              <Select.Content>
                                {feeTiers.items.map((tier) => (
                                  <Select.Item item={tier} key={tier.value}>
                                    {tier.label}
                                    <Select.ItemIndicator />
                                  </Select.Item>
                                ))}
                              </Select.Content>
                            </Select.Positioner>
                          </Portal>
                        </Select.Root>
                      </FormControl>
                    </Box>
                  )}
                </Box>

                {/* Fixed right-side cost */}
                <Text
                  fontSize="sm"
                  color="white"
                  fontWeight="semibold"
                  mt={{ base: 2, md: 0 }}
                  ml={{ base: 0, md: 4 }}
                  whiteSpace="nowrap"
                >
                  +0.1 SOL (FREE)
                </Text>
              </Flex>
            </Box>

            <Box borderBottom="1px solid white" opacity={0.2} my={8} />

            <RevokeAuthoritiesSection
              revokes={revokes}
              setRevokes={setRevokes}
              recipientAddress={recipientAddress}
              setRecipientAddress={setRecipientAddress}
              isSubmitted={isSubmitted}
            />

            <Flex justify="center" mb={3}>
              <Button
                bg="white"
                color="black"
                borderRadius="md"
                width="200px"
                _hover={{ bg: "gray.300" }}
                onClick={handleLaunch}
              >
                Launch Token
              </Button>
            </Flex>

            <Text fontSize="sm" color="gray.400" textAlign="center">
              Total Fees:{" "}
              <Text as="span" fontWeight="bold" color="white">
                {totalFee.toFixed(2)} SOL
              </Text>
            </Text>
          </VStack>
        </Box>
      </VStack>
      <Footer />
      {isLoading && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          bg="rgba(0,0,0,0.6)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1000}
        >
          <Spinner size="xl" color="white" mb={4} />
          <Text fontSize="xl" color="white">
            ⏳ Your token is being created...
          </Text>
        </Box>
      )}

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        txHash={txSignature ?? ""}
      />
    </>
  );
};

export default CreateTokenPage;
