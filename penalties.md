---
layout: markdown
title: Staking Penalties
permalink: /staking-penalties
---


New stakers often worry about penalties and slashing. To help clarify the differences, we created the following visualization along with supporting resources.


{% include partials/content/penalties/diagram.html %}


The most common penalty stakers face comes from being offline, known as an inactivity leak. Even after a month offline, the penalty remains relatively minor. Larger penalties require conditions that lead to slashed and force-exited validators. Full stake slashing is extremely rare and requires coordinated actions across many validators to trigger.


Scenario                                                             | Penalty                      | More Info
---------------------------------------------------------------------|------------------------------|------
Offline one day\*\*                                                  | 0.002 ETH + missed earnings  | [docs.ethstaker.org](https://docs.ethstaker.org/help/downtime-explained#inactivity-leak)
Offline one week\*\*                                                 | 0.0142 ETH + missed earnings | [docs.ethstaker.org](https://docs.ethstaker.org/help/downtime-explained#inactivity-leak)
Offline one month\*\*                                                | 0.06 ETH + missed earnings   | [docs.ethstaker.org](https://docs.ethstaker.org/help/downtime-explained#inactivity-leak)
Surround vote, double voting, proposing two blocks\*                 | 0.0078\* ETH + forced exit   | [ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)
Attack by multiple validators\*                                      | Full 32\* ETH stake          | [ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)


<small>\* Penalties based on a 32 ETH validator and [scales linearly with active balance](https://github.com/ethereum/consensus-specs/pull/3618#issuecomment-2009246584), so with a 2048 ETH validator the penalty is 64x the value shown </small>

<small>\*\* Scales linearly with time offline</small>



