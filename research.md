---
layout: markdown
title: Staking Research
permalink: /research
subheader: A collection of active areas of research related to staking
---

### Pectra Hard Fork Updates

The Pectra hard fork introduces several Ethereum Improvement Proposals (EIPs) that impact staking and validator operations.

- **[EIP-6110: Supply Validator Deposits on Chain](https://eips.ethereum.org/EIPS/eip-6110)**  
  Streamlines the deposit process by removing the need for deposit voting on the Consensus Layer (CL). This improves the validator user experience by speeding up deposit recognition on-chain, with deposits appearing in under 20 minutes during normal chain finalization. This enhancement doesn’t affect the activation queue but ensures deposits are processed more efficiently.

- **[EIP-7002: Execution Layer Triggerable Exits](https://eips.ethereum.org/EIPS/eip-7002)**  
  Enables validators to initiate exits directly from the execution layer (EL). This offers stakers more control and flexibility, as exits can be managed from the EL without needing Consensus Layer interactions, simplifying the withdrawal process.

- **[EIP-7251: Increase the MAX_EFFECTIVE_BALANCE](https://gist.github.com/michaelneuder/cafabcfcfcccc45e44ab9d6b1c7b4e1d)**  
  Raises the maximum effective balance from 32 ETH to 2048 ETH, allowing larger single-validator stakes. This change benefits stakers by enabling consolidation of ETH into fewer validators, which can reduce operational overhead for large-scale stakers and improve network efficiency by reducing the number of active validators needed for the same amount of staked ETH.

- **[EIP-7594: Peer Data Availability Sampling (PeerDAS)](https://eips.ethereum.org/EIPS/eip-7594)**  
  Introduces a data availability sampling method to enhance network resilience and decentralization, particularly as part of Pectra B. While this EIP doesn’t directly impact staking operations, it strengthens the network's reliability and security, which benefits all network participants, including stakers, by supporting a more robust infrastructure.

- **[EIP-7623: Increase Calldata Cost](https://eips.ethereum.org/EIPS/eip-7623)**  
  Adjusts the cost of calldata, which has a minor impact on validators by slightly increasing the gas cost of transactions that use calldata. This effect is generally negligible for validators since the average block size is usually below the maximum gas limit, but it may slightly affect validators with specific calldata-heavy transactions.

- **[EIP-7742: Uncouple Blob Count Between CL and EL](https://eips.ethereum.org/EIPS/eip-7742)**  
  Enhances the coordination between the Consensus Layer (CL) and Execution Layer (EL) by decoupling blob counts, which affects validators by improving scalability and communication across layers. This update helps with data availability, which indirectly benefits validator performance.

- **[EIP-7762: Increase MIN_BASE_FEE_PER_BLOB_GAS](https://eips.ethereum.org/EIPS/eip-7762)**  
  Slightly increases the base fee for blob gas, which minimally impacts validators by adjusting gas fees for blob transactions. This change is expected to have a minor effect on staking operations as the increased fees apply only in certain transaction contexts.

For additional details on these EIPs and how they impact staking, see the [Staking section of the Pectra FAQ on the EPF Wiki](https://epf.wiki/#/wiki/pectra-faq?id=stakers).

### Staking Issuance

Adjusting the issuance curve has been a topic of discussion primarily aimed at addressing increasing validator set centralization. A comprehensive resource maintained by [Caspar](https://hackmd.io/@ttsao/epbs-faq0) can be found at [issuance.wtf](https://issuance.wtf/).

- [Properties of issuance level: consensus incentives and variability across potential reward curves
  ](https://ethresear.ch/t/properties-of-issuance-level-consensus-incentives-and-variability-across-potential-reward-curves/18448#h-55-potential-candidate-for-a-new-reward-curve-23)
- [Endgame Staking Economics: A Case for Targeting](https://ethresear.ch/t/endgame-staking-economics-a-case-for-targeting/18751)
- [Electra: Issuance Curve Adjustment Proposal](https://ethereum-magicians.org/t/electra-issuance-curve-adjustment-proposal/18825)

### Max Effective Balance (maxEB)

maxEB raises the amount of ETH that a validator can hold from 32 ETH to 2048 ETH. It is slated to go live with the [Pectra hard fork](https://eips.ethereum.org/EIPS/eip-7600).

- [Increase the MAX_EFFECTIVE_BALANCE](https://gist.github.com/michaelneuder/cafabcfcfcccc45e44ab9d6b1c7b4e1d)

### Inclusion Lists

Inclusion lists are a set of proposals aimed at increasing censorship resistance of the network in light of increased censorship caused by external builder centralization.

- [Forward inclusion list](https://notes.ethereum.org/@fradamt/forward-inclusion-lists)
- [No free lunch – a new inclusion list design](https://ethresear.ch/t/no-free-lunch-a-new-inclusion-list-design/16389)
- [Unconditional inclusion lists](https://ethresear.ch/t/unconditional-inclusion-lists/18500)

### MEV Burn

mevburn aims to address centralization caused by the volatility in MEV rewards and increase the cost of censorship at the builder level.

- [MEV burn—a simple design](https://ethresear.ch/t/mev-burn-a-simple-design/15590)
- [Dr. changestuff or: How I learned to stop worrying and love mev-burn](https://ethresear.ch/t/dr-changestuff-or-how-i-learned-to-stop-worrying-and-love-mev-burn/17384)

### ePBS

Enshrined Proposal Builder Separation removes the necessity for relays by allowing validators and builders to interact trustlessly.

- [The EIP](https://eips.ethereum.org/EIPS/eip-7732)
- [Reasons why ePBS](https://hackmd.io/@ttsao/bypassing-relayer)
- [ePBS roadmap](https://mirror.xyz/barnabe.eth/QJ6W0mmyOwjec-2zuH6lZb0iEI2aYFB9gE-LHWIMzjQ)
- [ePBS annotated spec](https://hackmd.io/@potuz/rJ9GCnT1C)
- [ePBS breakout playlist](https://www.youtube.com/playlist?list=PLJqWcTqh_zKHoz9dnQFGrWI_s1-8RwMhX) [video]

### Changes to block building structure

There are a number of proposals in flux to adjust the structure of block building on Ethereum. Some of these separate the parties who attest and propose (as proposing and building is mostly separate today). Some break up who has the rights to build pieces of a block. Some change how proposers are chosen. All of these proposals seek to address increasingly unsustainable centralization that has emerged from the current structure. This area of research is the most active and broad on this list.

- [Will MEV go to zero?](https://www.youtube.com/watch?v=IrJz4GZW-VM) [video]
- [Execution Tickets](https://ethresear.ch/t/execution-tickets/17944)
- [Rainbow Staking](https://ethresear.ch/t/unbundling-staking-towards-rainbow-staking/18683/1)
- [Barnabe's overview, April '24](https://mirror.xyz/barnabe.eth/QJ6W0mmyOwjec-2zuH6lZb0iEI2aYFB9gE-LHWIMzjQ)
- [Attester Proposer Separation](https://www.youtube.com/watch?v=IrJz4GZW-VM)
