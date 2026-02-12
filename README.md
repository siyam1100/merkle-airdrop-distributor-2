# Merkle Airdrop Distributor

This repository provides an industry-standard solution for distributing tokens to a large list of eligible addresses. By using a Merkle Tree, the contract only needs to store a single 32-byte "Root" hash instead of thousands of individual addresses.

## How it Works
1. **Off-Chain**: A script collects all eligible addresses and amounts, then generates a Merkle Tree.
2. **On-Chain**: The Merkle Root is uploaded to the `MerkleDistributor` contract.
3. **Claiming**: Users provide a "Merkle Proof" (a list of hashes) that proves their address and amount are part of the original tree.



## Benefits
- **Extremely Gas Efficient**: Deployment cost remains constant regardless of the number of recipients.
- **Scalable**: Supports millions of users.
- **Secure**: Cryptographically proves eligibility without exposing the entire list on-chain.

## Tech Stack
- Solidity ^0.8.20
- OpenZeppelin MerkleProof library
- JavaScript/TypeScript for tree generation
