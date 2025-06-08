import React from 'react';
import Swap from './components/Swap';
import TokenCreator from './components/TokenCreator';
import NFTMarketplace from './components/NFTMarketplace';
import WalletDashboard from './components/WalletDashboard';

export default function Home() {
  return (
    <div>
      <Swap />
      <TokenCreator />
      <NFTMarketplace />
      <WalletDashboard />
    </div>
  );
}
