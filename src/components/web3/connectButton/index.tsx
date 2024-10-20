"use client";

import { useAccount } from "wagmi";
import { Account } from "../account";
import { WalletOptions } from "../walletOptions";
import { useIsMounted } from "@/app/hooks/useIsMounted";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
  const isMounted = useIsMounted();
  const { isConnected } = useAccount();
  if (!isMounted) return null;
  //   if (isConnected) return <Account />;
  return (
    <ConnectButton
      showBalance
      accountStatus={{
        smallScreen: "avatar",
        largeScreen: "full",
      }}
    />
  );
};

export default ConnectWallet;
