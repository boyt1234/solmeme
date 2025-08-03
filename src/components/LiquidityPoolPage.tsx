import { Box, VStack, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import Navbar from "../components/NavBar";
import Footer from "./Footer";

const LiquidityPoolPage = () => {
  return (
    <>
      <Navbar />
      <Box height={{ base: "80px", md: "100px" }} />
      <Box bg="black" color="white" minH="100vh" px={6} py={16}>
        <VStack gap={12} maxW="5xl" mx="auto" align="stretch">
          {/* Heading */}
          <Text fontSize="3xl" fontWeight="bold">
            My Portfolio
          </Text>

          {/* Token Lives Section */}
          <Box bg="gray.900" borderRadius="lg" py={6} px={4}>
            <Tabs variant="unstyled">
              <TabList>
                <Tab
                  _selected={{
                    borderBottom: "2px solid #61DAFB", // light blue underline
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="lg"
                  px={0}
                  mb={4}
                >
                  Token Lives
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text textAlign="center" color="gray.400">
                    Connect wallet to see your asset distribution.
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* History Section */}
          <Box bg="gray.900" borderRadius="lg" py={6} px={4}>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              History
            </Text>
            <Text textAlign="center" color="gray.400">
              Connect wallet to see your positions.
            </Text>
          </Box>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default LiquidityPoolPage;
