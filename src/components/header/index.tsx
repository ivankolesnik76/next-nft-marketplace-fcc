"use client";

import { ConnectButton } from "web3uikit";
import Link from "next/link";
import ConnectWallet from "../web3/connectButton";

type Props = {};
export const Header = ({}: Props) => {
  return (
    <nav className="p-5 border-b-2 flex justify-between items-center">
      <h1 className="text-3xl">NFT Marketplace</h1>
      <div className="flex justify-center items-center gap-3 mr-3">
        <Link href="/">Nft marketplace</Link>
        <Link href="/sell">Sell page</Link>
        <ConnectWallet />
      </div>
    </nav>
  );
};
