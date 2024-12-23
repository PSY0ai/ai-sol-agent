import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { mintCollectionNFT, FEE_TIERS } from "../tools";
import { CollectionOptions, PumpFunTokenOptions } from "../types";
import { BN } from "@coral-xyz/anchor";
/**
 * Main class for interacting with Solana blockchain
 * Provides a unified interface for token operations, NFT management, and trading
 *
 * @class SolanaAgentKit
 * @property {Connection} connection - Solana RPC connection
 * @property {Keypair} wallet - Wallet keypair for signing transactions
 * @property {PublicKey} wallet_address - Public key of the wallet
 */
export declare class SolanaAgentKit {
    connection: Connection;
    wallet: Keypair;
    wallet_address: PublicKey;
    openai_api_key: string;
    constructor(private_key: string, rpc_url: string | undefined, openai_api_key: string);
    requestFaucetFunds(): Promise<string>;
    deployToken(name: string, uri: string, symbol: string, decimals?: number, initialSupply?: number): Promise<{
        mint: PublicKey;
    }>;
    deployCollection(options: CollectionOptions): Promise<import("../types").CollectionDeployment>;
    getBalance(token_address?: PublicKey): Promise<number | null>;
    mintNFT(collectionMint: PublicKey, metadata: Parameters<typeof mintCollectionNFT>[2], recipient?: PublicKey): Promise<import("../types").MintCollectionNFTResponse>;
    transfer(to: PublicKey, amount: number, mint?: PublicKey): Promise<string>;
    registerDomain(name: string, spaceKB?: number): Promise<string>;
    resolveSolDomain(domain: string): Promise<PublicKey>;
    getPrimaryDomain(account: PublicKey): Promise<string>;
    trade(outputMint: PublicKey, inputAmount: number, inputMint?: PublicKey, slippageBps?: number): Promise<string>;
    lendAssets(amount: number): Promise<string>;
    getTPS(): Promise<number>;
    getTokenDataByAddress(mint: string): Promise<import("../types").JupiterTokenData | undefined>;
    getTokenDataByTicker(ticker: string): Promise<import("../types").JupiterTokenData | undefined>;
    launchPumpFunToken(tokenName: string, tokenTicker: string, description: string, imageUrl: string, options?: PumpFunTokenOptions): Promise<{
        signature: string;
        mint: string;
        metadataUri: any;
    }>;
    stake(amount: number): Promise<string>;
    sendCompressedAirdrop(mintAddress: string, amount: number, decimals: number, recipients: string[], priorityFeeInLamports: number, shouldLog: boolean): Promise<string[]>;
    createOrcaSingleSidedWhirlpool(depositTokenAmount: BN, depositTokenMint: PublicKey, otherTokenMint: PublicKey, initialPrice: Decimal, maxPrice: Decimal, feeTier: keyof typeof FEE_TIERS): Promise<string>;
    raydiumCreateAmmV4(marketId: PublicKey, baseAmount: BN, quoteAmount: BN, startTime: BN): Promise<string>;
    raydiumCreateClmm(mint1: PublicKey, mint2: PublicKey, configId: PublicKey, initialPrice: Decimal, startTime: BN): Promise<string>;
    raydiumCreateCpmm(mint1: PublicKey, mint2: PublicKey, configId: PublicKey, mintAAmount: BN, mintBAmount: BN, startTime: BN): Promise<string>;
    openbookCreateMarket(baseMint: PublicKey, quoteMint: PublicKey, lotSize?: number, tickSize?: number): Promise<string[]>;
}
//# sourceMappingURL=index.d.ts.map