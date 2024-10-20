"use client";

import { type ReactNode, FC, useState } from "react";
import { MoralisProvider } from "react-moralis";
// import { config } from "./configs/wagmi/config";
import { type State, WagmiProvider } from "wagmi";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";
import { config } from "./configs/rainbowKit/config";

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

const client = new QueryClient();

const Providers: FC<Props> = ({ children, initialState }) => {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>{children} </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
