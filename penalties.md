---
layout: markdown
title: Staking Penalties
permalink: /staking-penalties
---


{% include partials/content/penalties/diagram.html %}


Penalties and slashing is something new stakers are often concerned about. Full stake slashing is a very rary occurance that requires specific actions across many validators to make happen.

The most likely penalty stakers may experience is due to being offline, and even with a month offline the penalty is minor. Review the graphic and table below to better understand these penalties.

<br>

Scenario                                                             | Penalty                      | More Info
---------------------------------------------------------------------|------------------------------|------
Attack by multiple validators\*                                      | Full 32\* ETH stake          | [ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)
Surround vote, double voting, proposing two blocks\*                 | 0.0078\* ETH + forced exit   | [ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)
Offline one day\*\*                                                  | 0.002 ETH + missed earnings  | [docs.ethstaker.org](https://docs.ethstaker.org/help/downtime-explained#inactivity-leak)
Offline one week\*\*                                                 | 0.0142 ETH + missed earnings | [docs.ethstaker.org](https://docs.ethstaker.org/help/downtime-explained#inactivity-leak)
Offline one month\*\*                                                | 0.06 ETH + missed earnings   | [docs.ethstaker.org](https://docs.ethstaker.org/help/downtime-explained#inactivity-leak)

\* Penalties based on a 32 ETH validator and [scales linearly with active balance](https://github.com/ethereum/consensus-specs/pull/3618#issuecomment-2009246584), so with a 2048 ETH validator the penalty is 64x the value shown 

\*\* Scales linearly with time offline


