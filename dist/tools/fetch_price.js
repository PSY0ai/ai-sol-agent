"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPrice = fetchPrice;
/**
 * Fetch the price of a given token in USDC using Jupiter API
 * @param agent SolanaAgentKit instance
 * @param tokenId The token mint address
 * @returns The price of the token in USDC
 */
async function fetchPrice(agent, tokenId) {
    try {
        const response = await fetch(`https://api.jup.ag/price/v2?ids=${tokenId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch price: ${response.statusText}`);
        }
        const data = await response.json();
        const price = data.data[tokenId]?.price;
        if (!price) {
            throw new Error("Price data not available for the given token.");
        }
        return price;
    }
    catch (error) {
        throw new Error(`Price fetch failed: ${error.message}`);
    }
}
//# sourceMappingURL=fetch_price.js.map