import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMemo } from "react";

// Wallet Adapter Imports
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  //SolflareWalletAdapter,
  //LedgerWalletAdapter,
  //CoinbaseWalletAdapter,
  //MathWalletAdapter,
  //TrustWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import ReferralPage from "./pages/ReferralPage";
import TokenGuidePage from "./pages/TokenGuidePage";

// Required styles for wallet modal
import "@solana/wallet-adapter-react-ui/styles.css";

import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import WorldPowerSection from "./components/WorldPowerSection";
import PhoneParallaxSection from "./components/PhoneParallaxSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import CreateTokenPage from "./components/CreateTokenPage";
import LiquidityPoolPage from "./components/LiquidityPoolPage";

const Home = () => (
  <Box>
    <Navbar />
    <HeroSection />
    <WorldPowerSection />
    <PhoneParallaxSection />
    <FeaturesSection />
    <Footer />
  </Box>
);

function App() {
  const network = "mainnet-beta";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      //new SolflareWalletAdapter(),
      //new LedgerWalletAdapter(),
      //new CoinbaseWalletAdapter(),
      //new MathWalletAdapter(),
      //new TrustWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-token" element={<CreateTokenPage />} />
              <Route path="/Liquidity-pool" element={<LiquidityPoolPage />} />
              <Route path="/referral" element={<ReferralPage />} />
              <Route path="/token-guide" element={<TokenGuidePage />} />
            </Routes>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
