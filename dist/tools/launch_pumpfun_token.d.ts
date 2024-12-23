import { PumpFunTokenOptions, SolanaAgentKit } from "../index";
/**
 * Launch a token on Pump.fun
 * @param agent - SolanaAgentKit instance
 * @param tokenName - Name of the token
 * @param tokenTicker - Ticker of the token
 * @param description - Description of the token
 * @param imageUrl - URL of the token image
 * @param options - Optional token options (twitter, telegram, website, initialLiquiditySOL, slippageBps, priorityFee)
 */
export declare function launchPumpFunToken(agent: SolanaAgentKit, tokenName: string, tokenTicker: string, description: string, imageUrl: string, options?: PumpFunTokenOptions): Promise<{
    signature: string;
    mint: string;
    metadataUri: any;
}>;
//# sourceMappingURL=launch_pumpfun_token.d.ts.map