import "./App.css"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import AirDrop from "./AirDrop";
function App() {

  return (
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/UF7wmGDEGTs7JfqP_Fcwc"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton style={{ marginTop: "20px", marginBottom: "20px" }} />
            <AirDrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider >
    </>
  )
}

export default App
