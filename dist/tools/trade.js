"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trade = trade;
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("../constants");
/**
 * Swap tokens using Jupiter Exchange
 * @param agent SolanaAgentKit instance
 * @param outputMint Target token mint address
 * @param inputAmount Amount to swap (in token decimals)
 * @param inputMint Source token mint address (defaults to USDC)
 * @param slippageBps Slippage tolerance in basis points (default: 300 = 3%)
 * @returns Transaction signature
 */
async function trade(agent, outputMint, inputAmount, inputMint = constants_1.TOKENS.USDC, slippageBps = constants_1.DEFAULT_OPTIONS.SLIPPAGE_BPS) {
    try {
        const quoteResponse = await (await fetch(`${constants_1.JUP_API}/quote?` +
            `inputMint=${inputMint.toString()}` +
            `&outputMint=${outputMint.toString()}` +
            `&amount=${inputAmount * web3_js_1.LAMPORTS_PER_SOL}` +
            `&slippageBps=${slippageBps}` +
            `&onlyDirectRoutes=true` +
            `&maxAccounts=20`)).json();
        // Get serialized transaction
        const { swapTransaction } = await (await fetch("https://quote-api.jup.ag/v6/swap", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quoteResponse,
                userPublicKey: agent.wallet_address.toString(),
                wrapAndUnwrapSol: true,
                dynamicComputeUnitLimit: true,
                prioritizationFeeLamports: "auto",
            }),
        })).json();
        // Deserialize transaction
        const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
        const transaction = web3_js_1.VersionedTransaction.deserialize(swapTransactionBuf);
        // Sign and send transaction
        transaction.sign([agent.wallet]);
        const signature = await agent.connection.sendTransaction(transaction);
        return signature;
    }
    catch (error) {
        throw new Error(`Swap failed: ${error.message}`);
    }
}
//# sourceMappingURL=trade.js.map