---
layout: markdown
title: Staking Airdrops
permalink: /airdrops
subheader: 'Document historical airdrops and best practice for future airdrops'

---


## Past Airdrops

{% for airdrop in site.data.airdrops %}
  - {{airdrop.date}} - [{{airdrop.title | titlecase}}]({{airdrop.link}})
{% endfor %}


## Best Practice for Future Airdrops

Providing Airdrops to Solo and Home stakers is an excellent way to engage the diverse staking ecosystem built on the Ethereum network. Rewarding solo stakers is a way to connect with some of the most engaged participants in the network, and through their work they've shown that they're willing to get their hands dirty and potentially participate in other projects


### Solo Staker Lists
- The [GLCStaked](https://github.com/GLCNI/ETH-Solo-Validator-Addresses) list is generally regarded as the more comprehensive solo stakers list
- The [rated.network](https://github.com/rated-network/solo-stakers/tree/main) list only comprehensively includes validator with indices below 500,000, but has been used for the StarkNet & Omni airdrops. You *will* get solo stakers asking why they've been left out because the list's methodology is more discerning and misses some solo stakers


### Do's

- Provide a full list of eligible addresses so users can easily check their eligibility without connecting
- Reach out to EthStaker or other community leaders before the drop to ensure a smooth process. Use a Non-Disclosure Agreement if necessary. Using this process will also reduce the number of airdrop scams targeting stakers
- Communicate with the staking community to let them know why you chose to airdrop to them! Even if it's just a "thank you", or if you want to encourage them to take some action
- Allow "claiming on behalf of another address". This means paying for the smart contract cost with a different wallet than the recipient. Many home stakers are EXTREMELY cautious with any keys related to staking, and they'd prefer not to connect those to the network if at all possible. This is doubly beneficial because it means more stakers will hold onto the tokens for longer!
- Refer to published lists of home stakers like the list maintained by [GLCStaked](https://github.com/GLCNI/ETH-Solo-Validator-Addresses) and the list by [rated.network](https://github.com/rated-network/solo-stakers/tree/main) and rather than developing your own list. This prevents confusion and gives you as the airdropper a direction to refer complaints rather than dealing with frustrated users
- Use the Fee Recipient Address as the target for claiming as this is more likely to be actively maintained by solo stakers 

 
### Don'ts

- Never use a cap or first-come, first served model to distribute airdrops to a few stakers. This causes a mad frenzy and angry participants will be a headache for you! If you need to cap the number of recipients, use a validator index cutoff, like "all validator indices before 500,000"
