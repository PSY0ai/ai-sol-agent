<div align="center">

# PSY Solana Agent Kit

<small>powered by Solana Agent Kit</small>

</div>


A comprehensive toolkit that enables AI agents to interact with Solana blockchain protocols. This framework allows any AI model to execute over 15 different Solana operations autonomously, including:

- Token trading and creation
- Asset lending
- Bulk token distribution via compression
- Quick transactions (blinks)
- DEX pool creation
- Plus additional functionalities

## ⚡ Blockchain Capabilities

- **Token Management**
  - Create SPL tokens using Metaplex
  - Send and receive assets
  - Monitor token balances
  - SOL staking operations
  - Efficient airdrops using Light Protocol and Helius

- **Metaplex NFT Tools**
  - Create NFT collections
  - Generate individual NFTs
  - Handle metadata updates
  - Set up royalty structures

- **DEX & DeFi Tools**
  - Token swaps via Jupiter
  - PumpPortal token launches
  - Pool creation on Raydium (CPMM, CLMM, AMMv4)
  - Orca whirlpool functionality
  - Meteora AMM integration
  - Openbook marketplace setup
  - SNS domain management
  - Jito transaction bundling

- **Quick Operations (Blinks)**
   - Lulo lending integration
   - Arcade game distribution
   - JupSOL staking tools

## 🧠 AI Framework Features

- **LangChain Components**
  - Blockchain operation toolset
  - React-based agent architecture
  - Persistent state management
  - Live operation feedback

- **Operation Modes**
  - Conversational interface
  - Self-running agent mode
  - Custom timing controls
  - Robust error management

- **AI Capabilities**
  - NFT art creation via DALL-E
  - Command interpretation
  - Market data analysis
  - Smart decision engine

## 🚀 Getting Started

```bash
npm install psy-agent
```

## Common Operations

### Token Creation

```typescript
import { SolanaAgentKit, createSolanaTools } from "psy-agent";

const tokenInfo = await deploy_token(
  agent,
  9,
  1000000
);

console.log("New Token:", tokenInfo.mint.toString());
```

### NFT Collection Setup

```typescript
import { deploy_collection } from "psy-agent";

const nftCollection = await deploy_collection(agent, {
  name: "Collection Name",
  uri: "https://arweave.net/metadata.json",
  royaltyBasisPoints: 500,
  creators: [
    {
      address: "wallet-address",
      percentage: 100,
    },
  ],
});
```

### Token Exchange

```typescript
import { trade } from "psy-agent";
import { PublicKey } from "@solana/web3.js";

const tx = await trade(
  agent,
  new PublicKey("target-token"),
  100,
  new PublicKey("source-token"),
  300
);
```

### Asset Lending

```typescript
import { lendAsset } from "psy-agent";
import { PublicKey } from "@solana/web3.js";

const tx = await lendAsset(
  agent,
  100
);
```

### SOL Staking

```typescript
import { stakeWithJup } from "psy-agent";

const tx = await stakeWithJup(
  agent,
  1
);
```

### Token Value Check

```typescript
import { fetchPrice } from "psy-agent";

const tokenPrice = await fetchPrice(
  agent,
  "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"
);

console.log("USDC Price:", tokenPrice);
```

### Compressed Token Distribution

```typescript
import {
  sendCompressedAirdrop,
  getAirdropCostEstimate,
} from "psy-agent";
import { PublicKey } from "@solana/web3.js";

(async () => {
  console.log(
    "Estimated cost:",
    getAirdropCostEstimate(
      1000,
      30_000
    )
  );

  const tx = await sendCompressedAirdrop(
    agent,
    new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    42,
    [
      new PublicKey("1nc1nerator11111111111111111111111111111111"),
    ],
    30_000
  );
})();
```

## Function Reference

### Core Methods

#### `deploy_token(agent, decimals?, name, uri, symbol, initialSupply?)`

Creates a new SPL token with configurable parameters.

#### `deploy_collection(agent, options)`

Establishes a new NFT collection.

#### `mintCollectionNFT(agent, collectionMint, metadata, recipient?)`

Creates NFTs within an existing collection.

#### `transfer(agent, to, amount, mint?)`

Moves SOL or tokens between wallets.

#### `trade(agent, outputMint, inputAmount, inputMint?, slippageBps?)`

Executes token swaps via Jupiter.

#### `get_balance(agent, token_address)`

Checks wallet balances.

#### `lendAsset(agent, assetMint, amount, apiKey)`

Facilitates lending through Lulo.

#### `stakeWithJup(agent, amount)`

Enables SOL staking via Jupiter.

#### `sendCompressedAirdrop(agent, mintAddress, amount, recipients, priorityFeeInLamports?, shouldLog?)`

Distributes tokens efficiently using compression.

## Required Packages

Built on these core dependencies:

- @solana/web3.js
- @solana/spl-token
- @metaplex-foundation/mpl-token-metadata
- @metaplex-foundation/mpl-core
- @metaplex-foundation/umi
- @lightprotocol/compressed-token
- @lightprotocol/stateless.js

## Development

We welcome community contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License

## Security Notice

Exercise caution with private keys and transactions. Always use secure environments.
